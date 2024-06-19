import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl;

  // Check if the request is for /products
//   if (url.pathname === '/products') {
//     url.searchParams.set('ctg', 'men_clothing');
//     return NextResponse.redirect(url);
//   }

  return NextResponse.next();
}

export const config = {
//   matcher: '/products', 
};
