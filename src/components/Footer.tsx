
import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 px-6 border-t border-blue-100 bg-gradient-to-b from-transparent to-blue-50/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#home" className="text-xl font-serif font-bold tracking-tight text-gradient">
              BlogCaNhan
            </a>
          </div>
          
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-2 mb-4 md:mb-0">
            <a href="#home" className="text-foreground/70 hover:text-primary transition-colors duration-200">
              Trang chủ
            </a>
            <a href="#about" className="text-foreground/70 hover:text-primary transition-colors duration-200">
              Về tôi
            </a>
            <a href="#projects" className="text-foreground/70 hover:text-primary transition-colors duration-200">
              Dự án
            </a>
            <a href="#contact" className="text-foreground/70 hover:text-primary transition-colors duration-200">
              Liên hệ
            </a>
          </nav>
          
          <div className="text-foreground/60 text-sm flex items-center">
            <span>&copy; {currentYear} Thiết kế với</span>
            <Heart size={14} className="mx-1 text-red-500" />
            <span>bởi Nguyễn Văn Chúc</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
