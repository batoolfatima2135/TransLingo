import { apiPublic } from "../api-client";
import { API_ENDPOINTS } from "../api-endpoints";
import {
  BackendAuthResult,
  BackendTokenResponse,
  BackendUser,
} from "../interfaces";
import { getCurrentUser } from "./getCurrentUser";

export function createAuthResult(
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
