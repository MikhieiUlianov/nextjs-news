import { NextResponse } from "next/server";

//to intercept request and maybe make or redirect them
export function middlewate(request: any) {
  console.log(request);
  return NextResponse.next();
}

export const config = {
  //mathcer to filter which page's request we want to manage
  matcher: "/news",
};
