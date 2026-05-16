export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center flex-grow text-center space-y-8 py-12">
      
      {/* Hero Section */}
      <section className="max-w-2xl px-4 space-y-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight dark:text-white">
          삼현T의 온라인 도구앱 만들기
        </h2>
        
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
          이곳은 교육용 웹 서비스를 개발하기 위한 가장 기본적이고 깔끔한 뼈대입니다. 
          원하는 기능과 도구들을 마음껏 추가해보세요!
        </p>
      </section>

      {/* Action Area */}
      <section className="flex flex-col sm:flex-row gap-4 pt-4">
        {/* 기능 추가를 위한 가짜(Placeholder) 버튼 */}
        <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
          새로운 도구 시작하기
        </button>
        
        {/* 여기에 새로운 컴포넌트나 버튼을 추가하세요 */}
      </section>
      
      {/* 여기에 새로운 섹션(예: 추천 도구 목록 등)을 추가하세요 */}
      
    </div>
  );
}
