import { NextAuthOptions } from "next-auth";
import { JWT } from "next-auth/jwt";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

async function refreshAccessToken(token: JWT): Promise<JWT> {
  try {
    const response = await fetch(`${process.env.API_URL}/refresh`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        refreshToken: token.refreshToken,
      }),
    });
    if (!response.ok) {
      throw new Error("Failed to refresh access token");
    }

    const refreshedTokens = await response.json();
    return {
      ...token,
      accessToken: refreshedTokens.accessToken,
      refreshToken: refreshedTokens.refreshToken,
      accessTokenExpires: Date.now() + refreshedTokens.expiresIn * 1000,
    };
  } catch (error) {
    console.error("Error refreshing access token:", error);

    return {
      ...token,
      error: "RefreshAccessTokenError",
    };
  }
}

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),

    CredentialsProvider({
      name: "Credentials",

      credentials: {
        email: {
          label: "Email",
          type: "email",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },

      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        const response = await fetch(`${process.env.API_URL}/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: credentials.email,
            password: credentials.password,
          }),
        });

        if (!response.ok) {
          return null;
        }

        const data = await response.json();
        const meResponse = await fetch(`${process.env.API_URL}/api/auth/me`, {
          headers: {
            Authorization: `Bearer ${data.accessToken}`,
          },
        });

        if (!meResponse.ok) {
          return null;
        }

        const user = await meResponse.json();
        return {
          id: user.userId,
          email: user.email,
          profilePictureUrl: user.profilePictureUrl,
          firstName: user.firstName,
          lastName: user.lastName,
          accessToken: data.accessToken,
          refreshToken: data.refreshToken,
          expiresIn: data.expiresIn,
        };
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user, account }) {
      // First Google login
      if (account?.provider === "google") {
        const response = await fetch(`${process.env.API_URL}/api/auth/google`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            idToken: account.id_token,
          }),
        });

        if (!response.ok) {
          console.error(
            "Backend Google authentication failed:",
            await response.text(),
          );

          return token;
        }

        const data = await response.json();
        console.log("Backend Google authentication successful:", data);
        token.accessToken = data.accessToken;
        token.refreshToken = data.refreshToken;
        token.accessTokenExpires = Date.now() + data.expiresIn * 1000;
        const meResponse = await fetch(`${process.env.API_URL}/api/auth/me`, {
          headers: {
            Authorization: `Bearer ${data.accessToken}`,
          },
        });

        if (!meResponse.ok) {
          console.error(
            "Failed to fetch current user:",
            await meResponse.text(),
          );
          return token;
        }

        const user = await meResponse.json();
        token.userId = user.userId;
        token.email = user.email;
        token.firstName = user.firstName;
        token.lastName = user.lastName;
        token.profilePictureUrl = user.profilePictureUrl;

        return token; // IMPORTANT
      }
      if (account?.provider === "credentials" && user) {
        console.log("Credentials login successful:", user);
        token.userId = user.id;
        token.email = user.email;
        token.profilePictureUrl = user.profilePictureUrl;
        token.firstName = user.firstName;
        token.lastName = user.lastName;
        token.accessToken = user.accessToken;
        token.refreshToken = user.refreshToken;

        if (user.expiresIn) {
          token.accessTokenExpires = Date.now() + user.expiresIn * 1000;
        }

        return token;
      }
      // Access token is still valid
      if (
        token.accessToken &&
        token.accessTokenExpires &&
        Date.now() < token.accessTokenExpires
      ) {
        return token;
      }

      return await refreshAccessToken(token);
    },

    async session({ session, token }) {
      if (token.userId) {
        session.user.id = token.userId;
      }
      if (token.email) {
        session.user.email = token.email;
      }
      if (token.firstName) {
        session.user.firstName = token.firstName;
      }
      if (token.lastName) {
        session.user.lastName = token.lastName;
      }
      if (token.accessToken) {
        session.accessToken = token.accessToken;
      }
      if (token.error) {
        session.error = token.error;
      }

      session.user.image = token.profilePictureUrl ?? null;

      return session;
    },
  },
};
