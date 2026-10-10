import type { Session } from "next-auth";
import type { JWT } from "next-auth/jwt";

export function mapTokenToSession(session: Session, token: JWT): Session {
  if (token.userId) {
    session.user.id = token.userId;
  }

  if (token.email) {
    session.user.email = token.email;
  }

  session.user.firstName = token.firstName;
  session.user.lastName = token.lastName;

  session.user.name =
    [token.firstName, token.lastName].filter(Boolean).join(" ") || null;

  session.user.image = token.profilePictureUrl ?? null;

  if (token.accessToken) {
    session.accessToken = token.accessToken;
  }

  if (token.error) {
    session.error = token.error;
  }

  return session;
}
