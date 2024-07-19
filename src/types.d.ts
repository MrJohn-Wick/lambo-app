import { JWT, User } from "next-auth/jwt"

declare module "next-auth/jwt" {
  interface JWT {
    access_token?: string;
    refresh_token?: string; 
  };

};

declare module "next-auth" {
  interface User {
    access_token?: string;
    refresh_token?: string; 
  };
};
