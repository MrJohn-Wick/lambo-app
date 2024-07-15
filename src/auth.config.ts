import jwt from 'jsonwebtoken';
// @ts-ignore
import { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const authConfig = {
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        const { email, password } = credentials;
        
        const formData = new URLSearchParams();

        formData.append("grant_type", "password");
        formData.append("client_id", "0e2ec2df-ee53-4327-a472-9d78c278bdbb");
        // formData.append("client_secret", process.env.OAUTH_CLIENT_SECRET);
        formData.append("username", email as string);
        formData.append("password", password as string);

        const response = await fetch("http://localhost:3000/token", {
          method: "POST",
          body: formData,
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        });

        const data = await response.json();

        if (response.ok && data?.access_token) {
          const { access_token, refresh_token } = data;
          const decoded = jwt.verify(access_token, "secret");

          return {
            // @ts-ignore
            id: decoded.user_id,
            // @ts-ignore
            email: decoded.email,
            access_token,
            refresh_token,
          };
        }

        throw new Error("User not found.");
      },
    }),
  ],
} satisfies NextAuthConfig;
