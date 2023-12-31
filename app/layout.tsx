// import './globals.css'
import "../styles/reset.css";
import "../styles/font.css";
import "../styles/ico.css";
import "../styles/common.css";
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
            {/* RSS */}
            <link rel="alternate" type="application/rss+xml" href="/rss.xml" title="RSS" />
            <link rel="alternate" type="application/atom+xml" href="/rss-atom.xml" title="RSS Atom" />
            <link rel="alternate" type="application/json" href="/feed.json" title="JSON Feed" />
            {/* Open Graph */}
            <meta property="og:type" content="website"/>
            <meta property="og:url" content=""/>
            <meta property="og:image" content="/images/opengraph.png"/>
            <meta property="og:title" content="변수 변환기"/>
            <meta property="og:description" content="여러 타입의 변수를 바꾸는 변환기"/>
            {/* Page Description */}
            <meta name="description" content="여러 타입의 변수를 바꾸는 변환기입니다."/>
            {/* Google Search Engine */}
            <meta name="google-site-verification" content="WV9mNNo3kWJNdzHQji12leWFIbOh4jEIUI_RBzNQFDM" />
            {/* Google Adsense */}
            <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7943148960429460"
                    crossOrigin="anonymous"></script>
            {/* Naver Meta Tag */}
            <meta name="naver-site-verification" content="8545f4aa0d6acbe0433ecce847257655482477bb" />

        </head>
        <body className={inter.className}>{children}</body>
        </html>
    )
}
