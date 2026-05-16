import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

import Link from "next/link";

export const metadata: Metadata = {
  title: "삼현T의 수학실",
  description: "삼현T의 온라인 도구앱 만들기",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        {/* 상단 헤더 */}
        <header className="bg-blue-600 text-white shadow-md relative z-10">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center md:justify-center relative">
            <h1 className="text-xl font-bold tracking-tight md:absolute md:left-4">
              <Link href="/">삼현T의 수학실</Link>
            </h1>
            <nav className="hidden md:block">
              <ul className="flex space-x-8 text-lg font-medium">
                <li><Link href="/" className="hover:text-blue-200 transition-colors">홈</Link></li>
                <li><Link href="/creative" className="hover:text-blue-200 transition-colors">창의 문제</Link></li>
                <li><Link href="/tools" className="hover:text-blue-200 transition-colors">도구 모음</Link></li>
              </ul>
            </nav>
            {/* 모바일 환경용 네비게이션 공간 (추후 확장 가능) */}
            <div className="md:hidden">
               <Link href="/creative" className="text-sm hover:text-blue-200">창의 문제</Link>
            </div>
          </div>
        </header>

        {/* 메인 컨텐츠 */}
        <main className="flex-grow container mx-auto px-4 py-8 flex flex-col">
          {children}
        </main>

        {/* 하단 푸터 */}
        <footer className="bg-gray-100 text-gray-600 border-t border-gray-200 mt-auto">
          <div className="container mx-auto px-4 py-6 text-center">
            <p className="text-sm">© {new Date().getFullYear()} 삼현T의 수학실. All rights reserved.</p>
            {/* 여기에 푸터 링크나 추가 정보를 추가하세요 */}
          </div>
        </footer>
      </body>
    </html>
  );
}
