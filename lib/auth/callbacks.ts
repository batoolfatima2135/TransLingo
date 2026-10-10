import type { NextAuthOptions } from "next-auth";

import { handleJwt } from "./services/jwt-handler";
import { mapTokenToSession } from "./mappers/auth-mapper";

export const authCallbacks: NextAuthOptions["callbacks"] = {
  async jwt({ token, user, account }) {
    return handleJwt({
      token,
      user,
      account,
    });
  },

  async session({ session, token }) {
    return mapTokenToSession(session, token);
  },
};
