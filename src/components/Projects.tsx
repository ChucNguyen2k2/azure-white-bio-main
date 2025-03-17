import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Ứng dụng Web E-commerce',
      description: 'Xây dựng một trang web thương mại điện tử đầy đủ tính năng với React, Node.js và MongoDB.',
      tags: ['React', 'Node.js', 'MongoDB', 'Express'],
      image: 'https://images.unsplash.com/photo-1517292987719-0369a794ec0f?q=80&w=1974&auto=format&fit=crop',
      github: 'https://github.com/ChucNguyen2k2/ecommerce-website-chucnguyen',
      demo: 'https://chucnguyen2k2.github.io/ecommerce-website-chucnguyen/',
    },
    {
      title: 'Ứng dụng quản lý nhiệm vụ',
      description: 'Một ứng dụng quản lý nhiệm vụ với giao diện người dùng trực quan và đồng bộ hóa đám mây.',
      tags: ['React', 'Firebase', 'Tailwind CSS'],
      image: 'https://images.unsplash.com/photo-1555421689-491a97ff2f31?q=80&w=2070&auto=format&fit=crop',
      github: '#',
      demo: '#',
    },
    {
      title: 'Portfolio cá nhân',
      description: 'Trang web portfolio cá nhân được xây dựng với React và Framer Motion cho các hiệu ứng mượt mà.',
      tags: ['React', 'Framer Motion', 'Styled Components', 'TypeScript'],
      image: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=1974&auto=format&fit=crop',
      github: '#',
      demo: '#',
    },
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-blue-50/50 relative">
      {/* Background Elements */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl opacity-50 -z-10"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-4">
            Dự án của tôi
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif text-balance">
            Một số <span className="text-gradient">dự án nổi bật</span>
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Những dự án dưới đây thể hiện kỹ năng và kinh nghiệm của tôi. Mỗi dự án đều có mô tả ngắn gọn và liên kết đến code và bản demo trực tiếp.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl overflow-hidden shadow-soft border border-blue-100/50 transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="h-48 relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-foreground/70 mb-4 text-sm">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag, idx) => (
                    <span 
                      key={idx} 
                      className="px-2 py-1 text-xs rounded-full bg-blue-50 text-blue-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <a 
                    href={project.github} 
                    className="p-2 rounded-lg bg-foreground/5 hover:bg-foreground/10 text-foreground/80 transition-colors duration-200 flex items-center gap-1 text-sm"
                    aria-label="GitHub Repository"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </a>
                  <a 
                    href={project.demo} 
                    className="p-2 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-700 transition-colors duration-200 flex items-center gap-1 text-sm"
                    aria-label="Live Demo"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={16} />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
