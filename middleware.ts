import { NextResponse } from 'next/server'
import acceptLanguage from 'accept-language'
import { languages } from './app/i18n/settings'

acceptLanguage.languages(languages)

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js).*)']
}

export function middleware(req){  

  if (req.nextUrl.pathname.includes('.') || req.nextUrl.pathname==="/") return NextResponse.next()

  // let locale = req.nextUrl.pathname.split('/')[1]
  // if (!/^(|en|fr)$/.test(locale)){
  //   return NextResponse.rewrite(new URL(`${req.nextUrl.origin}/en/404`,req.nextUrl.origin))
  // }

  return NextResponse.next()
}