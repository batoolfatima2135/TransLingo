import type { Account, User } from "next-auth";
import type { JWT } from "next-auth/jwt";

import { refreshAccessToken } from "./refresh-token";
import { handleCredentialsLogin } from "./credentials-login";
import { handleGoogleLogin } from "./google-login";

interface JwtHandlerParams {
  token: JWT;
  user?: User;
  account?: Account | null;
}

export async function handleJwt({
  token,
  user,
  account,
}: JwtHandlerParams): Promise<JWT> {
  if (account?.provider === "google") {
    return handleGoogleLogin(token, account.id_token ?? "");
  }

  if (account?.provider === "credentials" && user) {
    return handleCredentialsLogin(token, user);
  }

  if (isAccessTokenValid(token)) {
    return token;
  }

  if (token.refreshToken) {
    return refreshAccessToken(token);
  }

  return {
    ...token,
    error: "RefreshAccessTokenError",
  };
}

function isAccessTokenValid(token: JWT): boolean {
  return Boolean(
    token.accessToken &&
    token.accessTokenExpires &&
    Date.now() < token.accessTokenExpires,
  );
}
