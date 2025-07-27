import { NextResponse } from "next/server";

//to intercept request and maybe make or redirect them
export function middleware(request: any) {
  return NextResponse.next();
}
export const config = {
  //mathcer to filter which page's request we want to manage
  matcher: "/news",
};
