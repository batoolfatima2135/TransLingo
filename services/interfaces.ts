import type { User } from "next-auth";

export interface BackendUser {
  userId: string;
  email: string;
  firstName?: string;
  lastName?: string;
  profilePictureUrl?: string | null;
}

export interface BackendTokenResponse {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
  tokenType: string;
}

export interface BackendAuthResult {
  user: User;
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
}
