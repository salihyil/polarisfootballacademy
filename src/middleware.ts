import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import acceptLanguage from "accept-language";
import { NextRequest, NextResponse } from "next/server";
import { cookieName, fallbackLng, languages } from "./app/i18n/settings";

acceptLanguage.languages(languages);

export const config = {
  // matcher: '/:lng*'
  matcher: ["/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js).*)"],
};

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });
  let lng;
 /*  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    console.log("req.url:::", req.url);

    return NextResponse.rewrite(req.url);
  } */

  if (req.cookies.has(cookieName)) {
    const cookie = req.cookies.get(cookieName);
    if (cookie) {
      lng = acceptLanguage.get(cookie.value);
    }
  }
  if (!lng) lng = acceptLanguage.get(req.headers.get("Accept-Language"));
  if (!lng) lng = fallbackLng;

  // Redirect if lng in path is not supported
  if (
    !languages.some((loc) => req.nextUrl.pathname.startsWith(`/${loc}`)) &&
    !req.nextUrl.pathname.startsWith("/_next")
  ) {
    return NextResponse.redirect(new URL(`/${lng}${req.nextUrl.pathname}`, req.url));
  }

  if (req.headers.has("referer")) {
    const referer = req.headers.get("referer");
    if (referer) {
      const refererUrl = new URL(referer);
      const lngInReferer = languages.find((l) => refererUrl.pathname.startsWith(`/${l}`));

      if (lngInReferer) res.cookies.set(cookieName, lngInReferer);
      return res;
    }
  }

  return res;
}
