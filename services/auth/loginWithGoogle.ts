import { apiPublic } from "../api-client";
import { API_ENDPOINTS } from "../api-endpoints";
import { BackendAuthResult, BackendTokenResponse } from "../interfaces";
import { getCurrentUser } from "./getCurrentUser";
import { createAuthResult } from "./loginWithCredentials";

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
