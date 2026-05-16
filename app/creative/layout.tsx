"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CreativeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const tabs = [
    { name: "문제", path: "/creative" },
    { name: "정답 확인", path: "/creative/answers" },
    { name: "문제 업로드", path: "/creative/upload" },
    { name: "AI 튜터", path: "/creative/chat" },
  ];

  return (
    <div className="flex flex-col flex-grow w-full">
      {/* 서브 네비게이션 (미니 탭) */}
      <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 sticky top-0 z-10">
        <div className="max-w-3xl mx-auto px-4">
          <nav className="flex space-x-8" aria-label="Tabs">
            {tabs.map((tab) => {
              const isActive = pathname === tab.path;
              return (
                <Link
                  key={tab.name}
                  href={tab.path}
                  className={`
                    whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors
                    ${isActive 
                      ? "border-blue-500 text-blue-600 dark:text-blue-400" 
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300"
                    }
                  `}
                >
                  {tab.name}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>

      {/* 하위 페이지 렌더링 영역 */}
      <div className="flex-grow w-full">
        {children}
      </div>
    </div>
  );
}
