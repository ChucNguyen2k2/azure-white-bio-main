import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Giả lập gửi form
    setTimeout(() => {
      toast({
        title: "Gửi tin nhắn thành công!",
        description: "Cảm ơn bạn đã liên hệ với tôi. Tôi sẽ phản hồi sớm nhất có thể.",
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      setIsSubmitting(false);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Mail size={20} />,
      title: 'Email',
      value: 'nvchuc.work@gmail.com',
      link: 'mailto:nvchuc.work@gmail.com'
    },
    {
      icon: <Phone size={20} />,
      title: 'Điện thoại',
      value: '(+84) 86 999 4160',
      link: 'tel:+84869994160'
    },
    {
      icon: <MapPin size={20} />,
      title: 'Địa chỉ',
      value: 'Hà Nội, Việt Nam',
      link: 'https://www.google.com/maps/place/B%C3%A1nh+Gi%C3%B2+N%C3%B3ng+Tu%E1%BA%A5n+%C4%90i%E1%BB%87p/@20.813505,105.8328704,19.25z/data=!4m6!3m5!1s0x3135b5334163434b:0x3f7c512f8f535a49!8m2!3d20.813127!4d105.8327634!16s%2Fg%2F11sttpx6g5?entry=ttu&g_ep=EgoyMDI1MDMxMi4wIKXMDSoASAFQAw%3D%3D'
    },
  ];

  return (
    <section id="contact" className="py-24 px-6 relative">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-light opacity-50 -z-10"></div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-4">
            Liên hệ
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif text-balance">
            Hãy <span className="text-gradient">liên hệ với tôi</span>
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Bạn có thể liên hệ với tôi bằng cách điền vào biểu mẫu bên dưới hoặc sử dụng thông tin liên hệ của tôi.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-6">
            <div className="glass-card p-8 rounded-xl h-full">
              <h3 className="text-xl font-semibold mb-6">Thông tin liên hệ</h3>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className="flex items-start gap-4 group"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="p-3 rounded-lg bg-blue-100 text-blue-700 group-hover:bg-blue-200 transition-colors duration-200">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="text-foreground/80 text-sm mb-1">{info.title}</h4>
                      <p className="font-medium group-hover:text-blue-600 transition-colors duration-200">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              <hr className="my-8 border-blue-100" />

              <div>
                <h3 className="text-xl font-semibold mb-4">Theo dõi tôi</h3>
                <p className="text-foreground/80 text-sm mb-6">
                  Hãy kết nối với tôi trên các nền tảng mạng xã hội.
                </p>
                <div className="flex gap-4">
                  <a
                    href="https://www.facebook.com/chuc2811/"
                    className="p-3 rounded-lg bg-blue-100 text-blue-700 hover:bg-blue-200 transition-colors duration-200"
                    aria-label="Facebook"
                    target="_blank"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                  </a>
                  {/* <a 
                    href="#" 
                    className="p-3 rounded-lg bg-blue-100 text-blue-700 hover:bg-blue-200 transition-colors duration-200"
                    aria-label="Telegram"
                    target="_blank"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                  </a> */}
                  <a
                    href="https://www.instagram.com/chucc812.off/"
                    className="p-3 rounded-lg bg-blue-100 text-blue-700 hover:bg-blue-200 transition-colors duration-200"
                    aria-label="Instagram"
                    target="_blank"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/chucnguyen2811/"
                    className="p-3 rounded-lg bg-blue-100 text-blue-700 hover:bg-blue-200 transition-colors duration-200"
                    aria-label="LinkedIn"
                    target="_blank"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="glass-card p-8 rounded-xl">
              <h3 className="text-xl font-semibold mb-6">Gửi tin nhắn</h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground/80 mb-1">
                      Họ tên
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-blue-100 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 outline-none transition-all duration-200"
                      placeholder="Nguyen Van A"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground/80 mb-1">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-blue-100 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 outline-none transition-all duration-200"
                      placeholder="example@gmail.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground/80 mb-1">
                    Chủ đề
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-blue-100 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 outline-none transition-all duration-200"
                    placeholder="Chủ đề của bạn"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground/80 mb-1">
                    Tin nhắn
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-blue-100 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 outline-none transition-all duration-200 resize-none"
                    placeholder="Nội dung tin nhắn của bạn..."
                  ></textarea>
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors duration-200 shadow-soft flex items-center justify-center gap-2 w-full md:w-auto disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Đang gửi...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Gửi tin nhắn
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
