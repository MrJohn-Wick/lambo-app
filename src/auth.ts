// @ts-ignore
import NextAuth, { DefaultSession } from "next-auth";

import { authConfig } from "./auth.config";

declare module "next-auth" {
  /**
   * Returned by `auth`, `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      access_token?: string;
      refresh_token?: string;
    } & DefaultSession["user"];
  }
}

// @ts-ignore
export const { handlers, signIn, signOut, auth } = NextAuth({
  debug: true,
  session: { strategy: "jwt" },
  pages: {
    signIn: "/login",
  },
  events: {
    // @ts-ignore
    async signOut({ token }) {
      console.log("SignOut", token);
      const raw_token = token.access_token;
      const formData = new URLSearchParams();

      formData.append("token", raw_token);
      const resp = await fetch("http://localhost:3000/token/revoke", {
        method: "POST",
        body: formData,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });

      console.log(resp);

      return;
    },
  },
  callbacks: {
// @ts-ignore
    async session({ session, user, token, newSession, trigger }) {
      console.log("Session");
      console.log(session, user, token, newSession, trigger);
      if (session && token) {
        if (token.user_id) {
          session.user.id = token.user_id;
        }
        session.user.access_token = token.access_token;
        session.user.refresh_token = token.refresh_token;
      }
      console.log("Session ready", session);

      return session;
    },
    // @ts-ignore
    async jwt({ token, user, account, profile, trigger, session }) {
      console.log("JWT");
      console.log(token, user, account, profile, trigger, session);
      if (trigger === "signIn") {
        token.user_id = user.id;
        token.access_token = user.access_token;
        token.refresh_token = user.refresh_token;
      }

      return token;
    },
  },
  ...authConfig,
});
