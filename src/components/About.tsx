import React, { useEffect, useRef } from 'react';

export const About: React.FC = () => {
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
    <section id="about" className="section bg-brown-100" ref={sectionRef}>
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="section-subtitle fade-in">プロカメラマンが撮る</h2>
          <h3 className="section-title fade-in">ペットと家族の特別な瞬間</h3>
          
          <div className="fade-in mt-8 mb-12">
            <p className="text-lg leading-relaxed mb-6">
              プロカメラマンがご自宅やお好きな場所に出張し、家族の一員であるペットとの"かけがえのない今"を写真で記録します。
              ナチュラルで感情が伝わる写真を大切にした撮影サービスです。
            </p>
            <p className="text-lg leading-relaxed">
              「Instagram映え」ではなく、「家族アルバム」として大切にしたくなるような、
              温かみのある自然な表情を引き出します。
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="card hover:translate-y-[-5px] fade-in">
              <div className="rounded-full bg-green-light w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="font-handwritten text-2xl">1</span>
              </div>
              <h4 className="text-xl font-medium mb-2">自然な姿を撮影</h4>
              <p>ペットにストレスを与えない撮影で、リラックスした自然な表情を残します。</p>
            </div>
            
            <div className="card hover:translate-y-[-5px] fade-in" style={{ transitionDelay: '0.2s' }}>
              <div className="rounded-full bg-green-light w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="font-handwritten text-2xl">2</span>
              </div>
              <h4 className="text-xl font-medium mb-2">愛情が伝わる瞬間</h4>
              <p>飼い主さんとペットの絆や愛情を感じられる特別な瞬間を大切に撮影します。</p>
            </div>
            
            <div className="card hover:translate-y-[-5px] fade-in" style={{ transitionDelay: '0.4s' }}>
              <div className="rounded-full bg-green-light w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="font-handwritten text-2xl">3</span>
              </div>
              <h4 className="text-xl font-medium mb-2">思い出に残る一枚</h4>
              <p>何年経っても心が温まる、時間を超えて価値が増す写真をお届けします。</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};