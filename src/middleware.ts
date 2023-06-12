import {
  type NextMiddleware,
  NextResponse,
  type NextRequest,
} from "next/server";

import { config as i18n } from "./i18n";

export const config = {
  matcher: ["/((?!api|static|.*\\..*|_next|favicon.ico).*)"],
};
export const middleware: NextMiddleware = (request) => {
  const guards = [checkLocale];
  for (const guard of guards) {
    const response = guard(request);
    if (response) {
      return response;
    }
  }
};

const checkLocale = (request: NextRequest) => {
  const pathname = request.nextUrl.pathname;

  const locale = i18n.locales.find(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (!locale) {
    const url = request.nextUrl.clone();
    url.pathname = `/${i18n.defaultLocale}${pathname}`;

    return NextResponse.rewrite(url);
  }
};
