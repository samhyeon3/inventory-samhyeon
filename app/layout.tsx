import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
        <header className="bg-blue-600 text-white shadow-md">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="text-xl font-bold tracking-tight">삼현T의 수학실</h1>
            <nav>
              {/* 여기에 새로운 네비게이션 링크를 추가하세요 */}
              <ul className="flex space-x-4">
                <li><a href="#" className="hover:text-blue-200 transition-colors">홈</a></li>
                <li><a href="#" className="hover:text-blue-200 transition-colors">도구 모음</a></li>
              </ul>
            </nav>
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
