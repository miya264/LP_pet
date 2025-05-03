import React, { useEffect, useRef } from 'react';
import { Camera, Award, Heart } from 'lucide-react';

export const Photographer: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }
        });
      },
      { threshold: 0.1 }
    );

    const element = sectionRef.current;
    if (element) {
      const fadeElements = element.querySelectorAll('.fade-in');
      fadeElements.forEach((el) => {
        observer.observe(el);
      });
    }

    return () => {
      if (element) {
        const fadeElements = element.querySelectorAll('.fade-in');
        fadeElements.forEach((el) => {
          observer.unobserve(el);
        });
      }
    };
  }, []);

  return (
    <section id="photographer" className="section" ref={sectionRef}>
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="fade-in">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-green-light rounded-full opacity-20"></div>
              <img
                src="https://images.pexels.com/photos/2709388/pexels-photo-2709388.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Photographer with camera and dog"
                className="rounded-2xl shadow-soft relative z-10"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-green-light rounded-full opacity-20"></div>
            </div>
          </div>
          
          <div className="fade-in">
            <h2 className="section-subtitle">カメラマン紹介</h2>
            <h3 className="text-3xl font-medium mb-4">鈴木 花（すずき はな）</h3>
            
            <p className="mb-6 leading-relaxed">
              こんにちは、ペット写真家の鈴木花です。10年以上にわたり、ペットとその家族の大切な瞬間を写真に収めてきました。
              私自身も2匹の犬と3匹の猫と暮らしており、動物たちの心と体の言葉を理解することに情熱を注いでいます。
            </p>
            
            <p className="mb-8 leading-relaxed">
              撮影では、ペットと飼い主さんがリラックスできる環境づくりを大切にしています。
              急がず、焦らず、その子の個性やご家族との絆が自然と表れる瞬間を丁寧に切り取ります。
              「家族の思い出として、ずっと大切にしたい写真」をモットーに、心を込めた撮影をお約束します。
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="flex flex-col items-center text-center p-4 bg-brown-100 rounded-xl">
                <Camera size={24} className="text-green-dark mb-2" />
                <p className="font-bold text-2xl">500+</p>
                <p className="text-sm">撮影実績</p>
              </div>
              
              <div className="flex flex-col items-center text-center p-4 bg-brown-100 rounded-xl">
                <Award size={24} className="text-green-dark mb-2" />
                <p className="font-bold text-2xl">10年+</p>
                <p className="text-sm">撮影経験</p>
              </div>
              
              <div className="flex flex-col items-center text-center p-4 bg-brown-100 rounded-xl">
                <Heart size={24} className="text-green-dark mb-2" />
                <p className="font-bold text-2xl">5匹</p>
                <p className="text-sm">愛するペット</p>
              </div>
            </div>
            
            <a href="#contact" className="btn btn-primary inline-block">
              撮影の予約をする
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};