import type { User } from "next-auth";
import { apiPublic, apiAuthenticated } from "./api-client";
import { API_ENDPOINTS } from "./api-endpoints";

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
  return apiAuthenticated<BackendUser>(API_ENDPOINTS.AUTH.ME, accessToken);
}

function createAuthResult(
  tokenData: BackendTokenResponse,
  backendUser: BackendUser,
): BackendAuthResult {
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

export async function loginWithCredentials(
  email: string,
  password: string,
): Promise<BackendAuthResult | null> {
  try {
    const tokenData = await apiPublic<BackendTokenResponse>(
      API_ENDPOINTS.AUTH.LOGIN,
      {
        method: "POST",
        body: JSON.stringify({ email, password }),
      },
    );

    const backendUser = await getCurrentUser(tokenData.accessToken);

    return createAuthResult(tokenData, backendUser);
  } catch (error) {
    console.error("Credentials authentication failed:", error);
    return null;
  }
}

export async function loginWithGoogle(
  idToken: string,
): Promise<BackendAuthResult | null> {
  try {
    const tokenData = await apiPublic<BackendTokenResponse>(
      API_ENDPOINTS.AUTH.GOOGLE,
      {
        method: "POST",
        body: JSON.stringify({ idToken }),
      },
    );

    const backendUser = await getCurrentUser(tokenData.accessToken);

    return createAuthResult(tokenData, backendUser);
  } catch (error) {
    console.error("Google authentication failed:", error);
    return null;
  }
}
