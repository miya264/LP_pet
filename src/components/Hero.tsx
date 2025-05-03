import React, { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

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

    const heroElement = heroRef.current;
    if (heroElement) {
      observer.observe(heroElement);
    }

    return () => {
      if (heroElement) {
        observer.unobserve(heroElement);
      }
    };
  }, []);

  return (
    <section 
      id="hero" 
      className="relative h-screen flex items-center"
      style={{
        backgroundImage: 'linear-gradient(rgba(250, 243, 224, 0.3), rgba(250, 243, 224, 0.6)), url("https://images.pexels.com/photos/6568490/pexels-photo-6568490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div 
        ref={heroRef} 
        className="container-custom fade-in"
      >
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-4 leading-tight">
            うちの子の<span className="font-handwritten text-green-dark">"今"</span>を、<br />
            やさしく美しく残す。
          </h1>
          
          <p className="text-lg md:text-xl opacity-90 mb-8 leading-relaxed">
            忙しい毎日の中でも、ふと癒される"うちの子"の仕草や表情。<br />
            その一瞬を、自然体で、やさしい雰囲気で、心に残る形に。
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center mt-8">
            <a href="#services" className="btn btn-primary">
              サービスを見る
            </a>
            <a href="#contact" className="btn btn-outline">
              予約・問い合わせ
            </a>
          </div>
        </div>
      </div>
      
      <a 
        href="#about" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-brown-900 animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
};