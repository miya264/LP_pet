import React, { useEffect, useRef } from 'react';
import { Camera, Clock, Map, Heart, Medal, Users } from 'lucide-react';

const services = [
  {
    title: "ベーシックプラン",
    price: "¥15,000〜",
    time: "60分",
    images: "20枚",
    features: [
      "自然な雰囲気の撮影",
      "データでのお渡し",
      "Web閲覧ギャラリー",
      "2ヶ所までの移動OK"
    ],
    recommended: false,
    cta: "予約する"
  },
  {
    title: "スタンダードプラン",
    price: "¥25,000〜",
    time: "90分",
    images: "30枚",
    features: [
      "自然な雰囲気の撮影",
      "データでのお渡し",
      "Web閲覧ギャラリー", 
      "3ヶ所までの移動OK",
      "写真集ミニ(10ページ)"
    ],
    recommended: true,
    cta: "おすすめプラン"
  },
  {
    title: "プレミアムプラン",
    price: "¥40,000〜",
    time: "120分",
    images: "50枚",
    features: [
      "自然な雰囲気の撮影",
      "データでのお渡し",
      "Web閲覧ギャラリー",
      "複数場所での撮影OK",
      "写真集フル(20ページ)",
      "大判プリント3枚"
    ],
    recommended: false,
    cta: "予約する"
  }
];

export const Services: React.FC = () => {
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
    <section id="services" className="section bg-brown-100" ref={sectionRef}>
      <div className="container-custom">
        <h2 className="section-subtitle fade-in">サービス内容</h2>
        <h3 className="section-title fade-in">あなたのペットに合わせたプラン</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`card fade-in hover:translate-y-[-5px] ${
                service.recommended ? 'ring-2 ring-green-dark relative' : ''
              }`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              {service.recommended && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-green-dark text-white px-4 py-1 rounded-full text-sm font-medium">
                  人気プラン
                </div>
              )}
              
              <h4 className="text-2xl font-medium text-center mb-2">{service.title}</h4>
              <p className="text-3xl font-bold text-center text-green-dark mb-6">{service.price}</p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <Clock size={18} className="text-green-dark mr-2" />
                  <span>撮影時間: {service.time}</span>
                </div>
                <div className="flex items-center">
                  <Camera size={18} className="text-green-dark mr-2" />
                  <span>お渡し写真: {service.images}</span>
                </div>
                
                <div className="border-t border-brown-200 my-4"></div>
                
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Heart size={16} className="text-green-dark mt-1 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <a
                href="#contact"
                className={`btn block w-full text-center ${
                  service.recommended ? 'btn-primary' : 'btn-outline'
                }`}
              >
                {service.cta}
              </a>
            </div>
          ))}
        </div>
        
        <div className="mt-20">
          <h4 className="text-2xl text-center mb-10 fade-in">選ばれる理由</h4>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-6">
            <div className="flex flex-col items-center text-center fade-in">
              <Map size={32} className="text-green-dark mb-4" />
              <h5 className="text-xl font-medium mb-2">出張撮影</h5>
              <p>ペットが安心できる場所で、ストレスなく自然な表情を撮影します。</p>
            </div>
            
            <div className="flex flex-col items-center text-center fade-in" style={{ transitionDelay: '0.1s' }}>
              <Clock size={32} className="text-green-dark mb-4" />
              <h5 className="text-xl font-medium mb-2">じっくり時間をかけて</h5>
              <p>急かさず、ペットのペースに合わせて最高の瞬間を逃しません。</p>
            </div>
            
            <div className="flex flex-col items-center text-center fade-in" style={{ transitionDelay: '0.2s' }}>
              <Users size={32} className="text-green-dark mb-4" />
              <h5 className="text-xl font-medium mb-2">家族との絆を大切に</h5>
              <p>飼い主さんとペットの愛情あふれる関係性を美しく残します。</p>
            </div>
            
            <div className="flex flex-col items-center text-center fade-in" style={{ transitionDelay: '0.3s' }}>
              <Heart size={32} className="text-green-dark mb-4" />
              <h5 className="text-xl font-medium mb-2">感情が伝わる写真</h5>
              <p>技術だけでなく、心に響く感情を大切にした撮影を心がけています。</p>
            </div>
            
            <div className="flex flex-col items-center text-center fade-in" style={{ transitionDelay: '0.4s' }}>
              <Medal size={32} className="text-green-dark mb-4" />
              <h5 className="text-xl font-medium mb-2">プロの技術</h5>
              <p>長年の経験と専門知識で、ペットの魅力を最大限に引き出します。</p>
            </div>
            
            <div className="flex flex-col items-center text-center fade-in" style={{ transitionDelay: '0.5s' }}>
              <Camera size={32} className="text-green-dark mb-4" />
              <h5 className="text-xl font-medium mb-2">高品質な仕上がり</h5>
              <p>プロ機材と丁寧な編集で、美しく温かみのある写真に仕上げます。</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};