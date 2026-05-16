export default function AnswersPage() {
  // TODO: 실제 데이터베이스 연동 시 이곳에서 데이터를 가져옵니다.
  const mockAnswers = [
    { id: 1, studentName: "김학생", answer: "삼각형의 내각의 합은 180도이므로 x = 45도입니다.", submittedAt: "2026-05-16 14:30" },
    { id: 2, studentName: "이학생", answer: "피타고라스의 정리에 의해 빗변의 길이는 5입니다.", submittedAt: "2026-05-16 15:10" },
    { id: 3, studentName: "박학생", answer: "둘레의 길이는 2πr 이므로 10π 가 됩니다.", submittedAt: "2026-05-16 15:45" },
  ];

  return (
    <div className="flex flex-col items-center max-w-4xl mx-auto w-full py-8 space-y-6 px-4">
      <div className="text-center space-y-2 w-full">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">제출된 정답 확인</h2>
        <p className="text-gray-500 dark:text-gray-400">학생들이 제출한 정답 목록입니다.</p>
      </div>

      <div className="w-full bg-white dark:bg-gray-900 rounded-2xl shadow-md border border-gray-200 dark:border-gray-800 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                <th className="py-4 px-6 font-semibold text-gray-700 dark:text-gray-300 w-24">이름</th>
                <th className="py-4 px-6 font-semibold text-gray-700 dark:text-gray-300">제출한 정답</th>
                <th className="py-4 px-6 font-semibold text-gray-700 dark:text-gray-300 w-48">제출 시간</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
              {mockAnswers.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                  <td className="py-4 px-6 text-gray-900 dark:text-white font-medium">{item.studentName}</td>
                  <td className="py-4 px-6 text-gray-600 dark:text-gray-400 whitespace-pre-wrap">{item.answer}</td>
                  <td className="py-4 px-6 text-gray-500 dark:text-gray-500 text-sm">{item.submittedAt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* 데이터가 없을 경우 표시할 UI (현재는 하드코딩된 데이터가 있어 가려짐) */}
        {mockAnswers.length === 0 && (
          <div className="py-12 text-center text-gray-500 dark:text-gray-400">
            아직 제출된 정답이 없습니다.
          </div>
        )}
      </div>
    </div>
  );
}
