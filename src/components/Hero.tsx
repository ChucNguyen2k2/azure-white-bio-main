
import React from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden pt-20"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 bg-gradient-light opacity-50"></div>
      <div className="absolute -top-[30%] -left-[10%] w-[70%] h-[70%] rounded-full bg-blue-200/30 blur-3xl"></div>
      <div className="absolute -bottom-[30%] -right-[10%] w-[70%] h-[70%] rounded-full bg-blue-300/20 blur-3xl"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10 animate-fadeIn">
        <div className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-6 animate-slideDown">
          Chào mừng đến với blog của tôi
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-6 font-serif leading-tight text-balance">
          Xin chào, tôi là <span className="text-gradient">Nguyễn Văn Chúc</span>
        </h1>
        
        <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl mx-auto animate-slideUp animate-delay-200">
          Tôi là một nhà phát triển web với niềm đam mê thiết kế giao diện người dùng tinh tế và xây dựng các ứng dụng web hiệu quả.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-slideUp animate-delay-300">
          <a 
            href="#about" 
            className="px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors duration-200 shadow-soft"
          >
            Tìm hiểu thêm
          </a>
          <a 
            href="#contact" 
            className="px-6 py-3 rounded-lg bg-white border border-blue-200 text-foreground font-medium hover:bg-blue-50 transition-colors duration-200 shadow-soft"
          >
            Liên hệ với tôi
          </a>
        </div>
        
        <div className="flex justify-center gap-5 animate-slideUp animate-delay-400">
          <a 
            href="#" 
            className="p-2 rounded-full bg-white/80 hover:bg-blue-100 text-blue-700 transition-all duration-200 shadow-soft"
            aria-label="Github"
          >
            <Github size={20} />
          </a>
          <a 
            href="#" 
            className="p-2 rounded-full bg-white/80 hover:bg-blue-100 text-blue-700 transition-all duration-200 shadow-soft"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a 
            href="#" 
            className="p-2 rounded-full bg-white/80 hover:bg-blue-100 text-blue-700 transition-all duration-200 shadow-soft"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" aria-label="Scroll Down">
          <ChevronDown className="text-blue-600" size={30} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
