import type { JWT } from "next-auth/jwt";
import type { User } from "next-auth";

export function handleCredentialsLogin(token: JWT, user: User): JWT {
  return {
    ...token,
    userId: user.id,
    email: user.email,
    firstName: user.firstName,
    lastName: user.lastName,
    profilePictureUrl: user.profilePictureUrl,
    accessToken: user.accessToken,
    refreshToken: user.refreshToken,
    accessTokenExpires: user.expiresIn
      ? Date.now() + user.expiresIn * 1000
      : undefined,
    error: undefined,
  };
}
