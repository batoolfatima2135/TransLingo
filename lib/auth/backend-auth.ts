import type { User } from "next-auth";

const API_URL = process.env.API_URL;

if (!API_URL) {
  throw new Error("API_URL is not configured.");
}

interface BackendTokenResponse {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
  tokenType: string;
}

interface BackendUser {
  userId: string;
  email: string;
  firstName?: string;
  lastName?: string;
  profilePictureUrl?: string | null;
}

export interface BackendAuthResult {
  user: User;
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
}

async function getCurrentUser(accessToken: string): Promise<BackendUser> {
  const response = await fetch(`${API_URL}/api/auth/me`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch current user.");
  }

  return response.json();
}

export async function loginWithCredentials(
  email: string,
  password: string,
): Promise<BackendAuthResult | null> {
  const response = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });

  if (!response.ok) {
    return null;
  }

  const tokenData: BackendTokenResponse = await response.json();

  const backendUser = await getCurrentUser(tokenData.accessToken);

  return {
    user: {
      id: backendUser.userId,
      email: backendUser.email,
      firstName: backendUser.firstName,
      lastName: backendUser.lastName,
      profilePictureUrl: backendUser.profilePictureUrl,
    },
    accessToken: tokenData.accessToken,
    refreshToken: tokenData.refreshToken,
    expiresIn: tokenData.expiresIn,
  };
}

export async function loginWithGoogle(
  idToken: string,
): Promise<BackendAuthResult | null> {
  const response = await fetch(`${API_URL}/api/auth/google`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      idToken,
    }),
  });

  if (!response.ok) {
    console.error(
      "Backend Google authentication failed:",
      await response.text(),
    );

    return null;
  }

  const tokenData: BackendTokenResponse = await response.json();

  const backendUser = await getCurrentUser(tokenData.accessToken);

  return {
    user: {
      id: backendUser.userId,
      email: backendUser.email,
      firstName: backendUser.firstName,
      lastName: backendUser.lastName,
      profilePictureUrl: backendUser.profilePictureUrl,
    },
    accessToken: tokenData.accessToken,
    refreshToken: tokenData.refreshToken,
    expiresIn: tokenData.expiresIn,
  };
}
