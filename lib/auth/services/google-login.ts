import type { JWT } from "next-auth/jwt";

import { loginWithGoogle } from "../../../services/auth.service";

export async function handleGoogleLogin(
  token: JWT,
  idToken: string,
): Promise<JWT> {
  if (!idToken) {
    console.error("Google ID token is missing.");

    return {
      ...token,
      error: "GoogleLoginError",
    };
  }
  const result = await loginWithGoogle(idToken);

  if (!result) {
    return {
      ...token,
      error: "GoogleLoginError",
    };
  }

  return {
    ...token,
    userId: result.user.id,
    email: result.user.email,
    firstName: result.user.firstName,
    lastName: result.user.lastName,
    profilePictureUrl: result.user.profilePictureUrl,
    accessToken: result.accessToken,
    refreshToken: result.refreshToken,
    accessTokenExpires: Date.now() + result.expiresIn * 1000,
    error: undefined,
  };
}
