// import './globals.css'
import "../styles/reset.css";
import "../styles/font.css";
import "../styles/ico.css";
import "../styles/common.css";
import "../styles/radio.css";
import "../styles/style.css";

import {Inter} from 'next/font/google'

const inter = Inter({subsets: ['latin']})

export const metadata = {
    title: '변수 변환기',
}

export default function RootLayout({ children }: {
    children: React.ReactNode
}) {
    return (
        <html lang="ko">
        <head>
            {/* Open Graph */}
            <meta property="og:type" content="website"/>
            <meta property="og:url" content=""/>
            <meta property="og:image" content="/images/opengraph.png"/>
            <meta property="og:title" content="변수 변환기"/>
            <meta property="og:description" content="여러 타입의 변수를 바꾸는 변환기"/>
            {/* Page Description */}
            <meta name="description" content="여러 타입의 변수를 바꾸는 변환기입니다."/>
        </head>
        <body className={inter.className}>{children}</body>
        </html>
    )
}
