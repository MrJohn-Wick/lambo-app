import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  session: {
    strategy: 'jwt',
  },
  pages: {
    error: '/login',
    signIn: '/login',
    signOut: '/login',
  },
  callbacks: {
    authorized({ auth }) {
      const isAuthorized = !!auth?.user;
      return isAuthorized;
    }
  },
  providers: [
    Credentials({
      credentials: {
        username: {},
        password: {},
        code: {},
      },
      authorize: async (credentials) => {
        console.log("Credentials authorize");
        console.log(credentials);
        if(credentials.username === 'test') {
          return {
            name:'Test name',
            email: 'test@test.io',
          }
        }
        return null;
      }
    }),
  ],
})
