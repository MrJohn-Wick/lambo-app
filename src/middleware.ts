import { NextRequest, NextResponse } from '~next/server';

export function middleware(request: NextRequest) {
  const session = request.cookies.get('session');

  if (request.nextUrl.pathname === '/login' && session) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  // if (request.nextUrl.pathname === '/' && !session) {
  //   return NextResponse.redirect(new URL('/login', request.url));
  // }
}
