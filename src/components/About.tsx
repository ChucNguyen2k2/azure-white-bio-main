
import React from 'react';
import { Code, Globe, Layout, Paintbrush } from 'lucide-react';

const About = () => {
  const skills = [
    { 
      icon: <Code size={22} />, 
      title: 'Phát triển Front-end', 
      description: 'Tôi xây dựng giao diện web đẹp mắt với HTML, CSS, và JavaScript. Tôi thành thạo các framework như React.' 
    },
    { 
      icon: <Layout size={22} />, 
      title: 'Phát triển Back-end', 
      description: 'Tôi phát triển logic ứng dụng với Node.js, Express và làm việc với cơ sở dữ liệu SQL và NoSQL.' 
    },
    { 
      icon: <Paintbrush size={22} />, 
      title: 'UI/UX Design', 
      description: 'Tôi thiết kế giao diện người dùng trực quan và trải nghiệm người dùng mượt mà dựa trên nguyên tắc thiết kế hiện đại.' 
    },
    { 
      icon: <Globe size={22} />, 
      title: 'Web Responsive', 
      description: 'Tôi đảm bảo trang web hoạt động tốt trên tất cả các thiết bị từ điện thoại di động đến máy tính để bàn.' 
    },
  ];

  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl opacity-50 -z-10"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-4">
            Về tôi
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif text-balance">
            Hãy cùng tìm hiểu <span className="text-gradient">về tôi</span>
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Tôi là một nhà phát triển web với hơn 5 năm kinh nghiệm. Tôi đam mê tạo ra những trải nghiệm web tuyệt vời.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-semibold mb-4">Câu chuyện của tôi</h3>
            <p className="text-foreground/80 mb-4">
              Hành trình của tôi bắt đầu từ khi tôi còn là sinh viên. Tôi luôn tò mò về cách xây dựng các trang web và ứng dụng, điều này đã thúc đẩy tôi tìm hiểu sâu hơn về lập trình web.
            </p>
            <p className="text-foreground/80 mb-4">
              Qua nhiều năm, tôi đã làm việc với nhiều công nghệ khác nhau và tham gia vào nhiều dự án đa dạng. Tôi tin rằng việc liên tục học hỏi là chìa khóa để phát triển trong lĩnh vực này.
            </p>
            <p className="text-foreground/80">
              Hiện tại, tôi đang tập trung vào việc xây dựng các ứng dụng web hiệu suất cao với trải nghiệm người dùng tuyệt vời và thiết kế tinh tế.
            </p>
          </div>
          
          <div className="relative h-[400px] rounded-xl overflow-hidden shadow-soft">
            <div className="absolute inset-0 bg-gradient-blue opacity-20"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="glass-card p-8 rounded-xl max-w-sm mx-auto">
                <h4 className="font-serif text-xl font-semibold mb-4">Học vấn & Kinh nghiệm</h4>
                <ul className="space-y-4">
                  <li className="flex items-start gap-6">
                    <span className="text-blue-500 font-semibold">2020-2025:</span>
                    <span>Kỹ Sư Công Nghệ Thông Tin - Học Viện Kỹ Thuật Mật Mã</span>
                  </li>
                  <li className="flex items-start gap-1">
                    <span className="text-blue-500 font-semibold">2021-2022:</span>
                    <span>Lập trình viên Front-end - Công ty ABC</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500 font-semibold">2023-nay:</span>
                    <span>Nhà phát triển Full-stack - Công ty DEF</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-2xl font-semibold text-center mb-10">Kỹ năng của tôi</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div 
                key={index} 
                className="glass-card p-6 rounded-xl transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="p-3 rounded-lg bg-blue-100 text-blue-700 mb-4 inline-block">
                  {skill.icon}
                </div>
                <h4 className="text-lg font-semibold mb-2">{skill.title}</h4>
                <p className="text-sm text-foreground/80">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
