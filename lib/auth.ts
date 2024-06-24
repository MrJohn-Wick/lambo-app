import NextAuth from 'next-auth';
import Credentials from "next-auth/providers/credentials";
 
// declare module "next-auth" {
//   /**
//    * Returned by `auth`, `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
//    */
//   interface Session {
//     user: {
//       /** The user's postal address. */
//       address: string
//       /**
//        * By default, TypeScript merges new interface properties and overwrites existing ones.
//        * In this case, the default session user properties will be overwritten,
//        * with the new ones defined above. To keep the default session user properties,
//        * you need to add them back into the newly declared interface.
//        */
//     } & DefaultSession["user"]
//   }
// }

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        // const user = await fetch('http://localhost:3000/user/signin')
        if (credentials.password == '12345') {
          return {
            id: '1',
            email: 'ashibeko@gmail.com',
          }
        }
        return null;
      }
    }),
  ],
  session: { strategy: "jwt" },
  callbacks: {
    async session({ token, session })  {
      console.log("AUTH SESSION");
      return session;
    },
    async jwt({ token }) {
      console.log("AUTH JWT");
      return token;
    },
    async redirect({ url, baseUrl }) {
      console.log("AUTH REDIRECT", url);
      if (url.startsWith("/")) return `${baseUrl}${url}`

      // Allows callback URLs on the same origin
      if (new URL(url).origin === baseUrl) return url
  
      return baseUrl    
    }
  }
});
