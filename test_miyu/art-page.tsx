import React from 'react';
import { ArrowLeft } from 'lucide-react';

const ArtPage = () => {
  const artProjects = [
    {
      id: 1,
      title: "作品タイトル 1",
      description: "作品の説明をここに記載します。",
      technique: "使用技法",
      year: 2024
    },
    {
      id: 2,
      title: "作品タイトル 2",
      description: "作品の説明をここに記載します。",
      technique: "使用技法",
      year: 2023
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
          <h1 className="text-5xl font-bold mb-16">Art</h1>

          {/* Overview */}
          <section className="mb-20">
            <h2 className="text-3xl font-semibold mb-8">概要</h2>
            <div className="bg-gray-900 p-8 rounded-2xl">
              <p className="text-gray-300 leading-relaxed">
                アート作品についての概要をここに記載します。主な制作テーマ、
                使用する技法、影響を受けたアーティストなどについて説明します。
              </p>
            </div>
          </section>

          {/* Projects */}
          <section className="mb-20">
            <h2 className="text-3xl font-semibold mb-8">Projects</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {artProjects.map(project => (
                <div key={project.id} className="bg-gray-900 p-8 rounded-2xl">
                  <div className="aspect-video mb-6 bg-gray-800 rounded-lg overflow-hidden">
                    <img
                      src={`/api/placeholder/600/400`}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-medium mb-4">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex justify-between text-gray-400">
                    <span>{project.technique}</span>
                    <span>{project.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default ArtPage;
