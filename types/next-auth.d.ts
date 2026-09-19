import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface User {
    id: string;
    accessToken?: string;
    refreshToken?: string;
    expiresIn?: number;
    firstName?: string;
    lastName?: string;
    profilePictureUrl?: string | null;
  }

  interface Session {
    user: {
      id: string;
      firstName?: string;
      lastName?: string;
    } & DefaultSession["user"];

    accessToken?: string;
    error?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    userId?: string;
    email?: string | null;
    image?: string | null;
    firstName?: string;
    lastName?: string;
    profilePictureUrl?: string | null;
    accessToken?: string;
    refreshToken?: string;
    accessTokenExpires?: number;
    error?: string;
  }
}
