import { auth } from './lib/auth';


export default auth(async (req) => {
  const { nextUrl } = req;
  const isAuth = !!req.auth;

  if(!isAuth && nextUrl.pathname == '/profile') {
    return Response.redirect(new URL('/login', nextUrl));
  }

  if(isAuth && nextUrl.pathname == '/login') {
    return Response.redirect(new URL('/profile', nextUrl));
  }

});
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
