import React from 'react';
import { ArrowLeft } from 'lucide-react';

const ResearchPage = () => {
  const achievements = [
    {
      id: 1,
      title: "論文タイトル 1",
      description: "論文の説明や概要をここに記載します。",
      journal: "Journal Name A",
      year: 2024
    },
    {
      id: 2,
      title: "論文タイトル 2",
      description: "論文の説明や概要をここに記載します。",
      journal: "Journal Name B",
      year: 2023
    }
  ];

  const projects = [
    {
      id: 1,
      title: "研究プロジェクト 1",
      description: "研究プロジェクトの説明をここに記載します。",
      status: "進行中"
    },
    {
      id: 2,
      title: "研究プロジェクト 2",
      description: "研究プロジェクトの説明をここに記載します。",
      status: "完了"
    }
  ];

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
          <h1 className="text-5xl font-bold mb-16">Research</h1>

          {/* Overview */}
          <section className="mb-20">
            <h2 className="text-3xl font-semibold mb-8">概要</h2>
            <div className="bg-gray-900 p-8 rounded-2xl">
              <p className="text-gray-300 leading-relaxed">
                研究の詳細な説明をここに記載します。主な研究テーマ、アプローチ、目標などについて
                詳しく説明します。現在取り組んでいる課題や、これまでの研究成果についても触れます。
              </p>
            </div>
          </section>

          {/* Achievements */}
          <section className="mb-20">
            <h2 className="text-3xl font-semibold mb-8">Achievements</h2>
            <div className="grid gap-8">
              {achievements.map(achievement => (
                <div key={achievement.id} className="bg-gray-900 p-8 rounded-2xl">
                  <h3 className="text-xl font-medium mb-4">{achievement.title}</h3>
                  <p className="text-gray-300 mb-4">{achievement.description}</p>
                  <p className="text-gray-400">
                    Published in {achievement.journal} ({achievement.year})
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Projects */}
          <section className="mb-20">
            <h2 className="text-3xl font-semibold mb-8">Projects</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map(project => (
                <div key={project.id} className="bg-gray-900 p-8 rounded-2xl">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-medium">{project.title}</h3>
                    <span className="px-3 py-1 bg-blue-500 rounded-full text-sm">
                      {project.status}
                    </span>
                  </div>
                  <p className="text-gray-300">{project.description}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default ResearchPage;
