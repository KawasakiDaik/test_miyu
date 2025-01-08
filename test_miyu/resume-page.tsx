import React from 'react';
import { Download, ArrowLeft } from 'lucide-react';

const ResumePage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center h-16">
            <a 
              href="/" 
              className="flex items-center text-gray-300 hover:text-white transition-colors"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Home
            </a>
          </div>
        </div>
      </nav>

      <main className="pt-24 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-bold mb-16">Resume</h1>
          
          {/* Experience */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-8 text-gray-200">経歴</h2>
            <div className="space-y-6">
              <div className="bg-gray-900 p-6 rounded-2xl">
                <p className="text-gray-400">2024年4月 - 現在</p>
                <h3 className="text-xl font-medium mt-2">基礎科学特別研究員</h3>
                <p className="text-gray-300">理化学研究所</p>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-8 text-gray-200">学歴</h2>
            <div className="space-y-6">
              <div className="bg-gray-900 p-6 rounded-2xl">
                <p className="text-gray-400">2020年4月 - 2022年9月</p>
                <h3 className="text-xl font-medium mt-2">博士課程</h3>
                <p className="text-gray-300">大阪公立大学 工学研究科 物質化学生命系専攻</p>
              </div>
            </div>
          </div>

          {/* Awards */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-8 text-gray-200">受賞</h2>
            <div className="space-y-6">
              <div className="bg-gray-900 p-6 rounded-2xl">
                <p className="text-gray-400">2019年3月</p>
                <h3 className="text-xl font-medium mt-2">応用化学賞</h3>
                <p className="text-gray-300">大阪府立大学 工学域 物質化学系学類</p>
              </div>
            </div>
          </div>

          {/* Download Button */}
          <div className="flex justify-center mt-12">
            <button 
              onClick={() => window.open('/path-to-your-resume.pdf')}
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full flex items-center space-x-2 transition-colors"
            >
              <Download size={20} />
              <span>Download Resume</span>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ResumePage;
