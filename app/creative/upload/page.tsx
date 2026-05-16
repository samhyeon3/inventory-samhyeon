"use client";

import { useState } from "react";

export default function UploadProblemPage() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile));
    }
  };

  const handleUpload = (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return;

    setIsUploading(true);
    // TODO: 실제 서버 스토리지(S3, Vercel Blob 등) 및 DB에 업로드하는 로직을 작성합니다.
    setTimeout(() => {
      setIsUploading(false);
      alert("문제 이미지가 성공적으로 업로드되었습니다!");
      setFile(null);
      setPreview(null);
    }, 1500);
  };

  return (
    <div className="flex flex-col items-center max-w-2xl mx-auto w-full py-8 space-y-8 px-4">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">문제 업로드</h2>
        <p className="text-gray-500 dark:text-gray-400">학생들에게 출제할 문제 이미지를 업로드해 주세요.</p>
      </div>

      <div className="w-full bg-white dark:bg-gray-900 p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800">
        <form onSubmit={handleUpload} className="space-y-6">
          
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
              이미지 파일 선택
            </label>
            <div className="relative border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800/80 transition-colors group overflow-hidden">
              <input 
                type="file" 
                accept="image/*"
                onChange={handleFileChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
              />
              
              {preview ? (
                <div className="relative aspect-video w-full">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={preview} alt="미리보기" className="w-full h-full object-contain p-2" />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-white font-medium bg-black/50 px-4 py-2 rounded-lg">클릭하여 다른 이미지 선택</span>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
                  <svg className="w-12 h-12 text-gray-400 group-hover:text-blue-500 transition-colors mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                  </svg>
                  <p className="text-gray-600 dark:text-gray-400 font-medium">
                    클릭하거나 이미지를 여기로 드래그하세요
                  </p>
                  <p className="text-sm text-gray-500 mt-1">PNG, JPG, GIF 지원</p>
                </div>
              )}
            </div>
          </div>

          <button
            type="submit"
            disabled={!file || isUploading}
            className="w-full py-4 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 disabled:cursor-not-allowed text-white font-bold rounded-xl shadow-md transition-all active:scale-[0.98] flex items-center justify-center"
          >
            {isUploading ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                업로드 중...
              </>
            ) : "문제 업로드하기"}
          </button>
        </form>
      </div>
    </div>
  );
}
