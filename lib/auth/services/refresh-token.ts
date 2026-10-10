import type { JWT } from "next-auth/jwt";

const API_URL = process.env.API_URL;

if (!API_URL) {
  throw new Error("API_URL is not configured.");
}

interface RefreshTokenResponse {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
  tokenType: string;
}

export async function refreshAccessToken(token: JWT): Promise<JWT> {
  try {
    const response = await fetch(`${API_URL}/refresh`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        refreshToken: token.refreshToken,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to refresh access token.");
    }

    const refreshedTokens: RefreshTokenResponse = await response.json();

    return {
      ...token,
      accessToken: refreshedTokens.accessToken,
      refreshToken: refreshedTokens.refreshToken,
      accessTokenExpires: Date.now() + refreshedTokens.expiresIn * 1000,
      error: undefined,
    };
  } catch (error) {
    console.error("Error refreshing access token:", error);

    return {
      ...token,
      error: "RefreshAccessTokenError",
    };
  }
}
