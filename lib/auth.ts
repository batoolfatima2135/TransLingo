import type { NextAuthOptions } from "next-auth";

import { authProviders } from "./auth/providers";
import { authCallbacks } from "./auth/callbacks";

export const authOptions: NextAuthOptions = {
  providers: authProviders,
  callbacks: authCallbacks,

  session: {
    strategy: "jwt",
  },
};
