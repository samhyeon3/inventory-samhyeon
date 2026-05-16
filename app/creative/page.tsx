"use client";

import { useState } from "react";

export default function CreativeProblemPage() {
  const [answer, setAnswer] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!answer.trim()) return;
    
    // TODO: 나중에 여기에 데이터베이스 저장 로직을 추가합니다.
    console.log("제출된 정답:", answer);
    setIsSubmitted(true);
  };

  return (
    <div className="flex flex-col items-center max-w-3xl mx-auto w-full py-8 space-y-8">
      {/* 헤더 섹션 */}
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">오늘의 창의 문제</h2>
        <p className="text-gray-500 dark:text-gray-400">아래 문제 이미지를 보고 정답을 입력해 주세요.</p>
      </div>

      {/* 문제 이미지 영역 (임시 플레이스홀더) */}
      <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-2xl shadow-inner border border-gray-200 dark:border-gray-700 aspect-[4/3] flex flex-col items-center justify-center p-4 relative overflow-hidden">
        {/* 추후 실제 업로드된 이미지 태그(<img> 또는 <Image>)로 교체할 부분 */}
        <div className="text-gray-400 flex flex-col items-center">
          <svg className="w-16 h-16 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span className="text-sm font-medium">선생님이 업로드한 문제 이미지가 여기에 표시됩니다</span>
        </div>
      </div>

      {/* 정답 입력 폼 영역 */}
      <div className="w-full bg-white dark:bg-gray-900 p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800">
        {isSubmitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-500 mb-2">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path></svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">제출 완료!</h3>
            <p className="text-gray-600 dark:text-gray-400">정답이 성공적으로 제출되었습니다.</p>
            <button 
              onClick={() => { setIsSubmitted(false); setAnswer(""); }}
              className="mt-4 px-6 py-2 bg-blue-50 text-blue-600 hover:bg-blue-100 rounded-lg font-medium transition-colors"
            >
              다시 제출하기
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="answer" className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                내 정답 입력
              </label>
              <textarea
                id="answer"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                placeholder="풀이 과정이나 정답을 자유롭게 적어주세요..."
                className="w-full min-h-[120px] p-4 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow resize-y"
                required
              />
            </div>
            <button
              type="submit"
              disabled={!answer.trim()}
              className="w-full py-4 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 disabled:cursor-not-allowed text-white font-bold rounded-xl shadow-md transition-all active:scale-[0.98]"
            >
              정답 제출하기
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
