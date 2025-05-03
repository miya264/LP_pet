import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqItems = [
  {
    question: "どんな場所で撮影ができますか？",
    answer: "ご自宅、公園、ドッグラン、お気に入りのカフェなど、ペットがリラックスできる場所であればどこでも撮影可能です。ペットが普段から慣れている環境での撮影がおすすめです。場所によっては許可が必要な場合もありますので、事前にご相談ください。"
  },
  {
    question: "撮影当日の流れを教えてください",
    answer: "当日は約束の時間に撮影場所へお伺いし、まずはペットと仲良くなる時間を取ります。その後、自然な雰囲気の中で撮影を進めていきます。ペットの機嫌や体調を見ながら適宜休憩を取りつつ、最高の瞬間を逃さないよう心がけています。急かすことなく、ペットのペースに合わせた撮影を行います。"
  },
  {
    question: "写真はいつ頃受け取れますか？",
    answer: "撮影後、約2週間で全データをオンラインギャラリーにてご確認いただけます。その中からプランに応じた枚数をお選びいただき、さらに1週間程度で高画質データと写真集（プランによる）をお届けします。特急納品も対応可能ですので、お急ぎの場合はご相談ください。"
  },
  {
    question: "複数のペットがいますが、一緒に撮影できますか？",
    answer: "はい、もちろん可能です。複数のペットがいる場合、それぞれの個性を引き出しつつ、一緒の写真も撮影します。ただし、ペットの性格や相性によっては撮影方法を工夫する必要がありますので、事前にペットの性格や特徴をお聞かせください。追加料金は発生しません。"
  },
  {
    question: "家族も一緒に写真に写りたいのですが可能ですか？",
    answer: "もちろん可能です。むしろペットと飼い主さんの絆や愛情が伝わる写真を大切にしていますので、ぜひご家族も一緒に撮影しましょう。全員での集合写真だけでなく、それぞれのご家族とペットの触れ合いの瞬間も丁寧に撮影いたします。"
  },
  {
    question: "キャンセルポリシーを教えてください",
    answer: "撮影日の7日前までのキャンセルは無料です。6〜3日前は料金の30%、2日前は50%、前日・当日は100%のキャンセル料が発生します。ただし、ペットの体調不良や急な天候変化による延期は、可能な限り柔軟に対応いたしますのでご相談ください。"
  }
];

export const FAQ: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section" ref={sectionRef}>
      <div className="container-custom">
        <h2 className="section-subtitle fade-in">よくある質問</h2>
        <h3 className="section-title fade-in">撮影についてのご質問</h3>
        
        <div className="max-w-3xl mx-auto mt-12 space-y-4">
          {faqItems.map((item, index) => (
            <div 
              key={index} 
              className="card fade-in overflow-hidden hover:shadow-md transition-all duration-300"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <button
                className="flex justify-between items-center w-full p-6 text-left"
                onClick={() => toggleAccordion(index)}
              >
                <h4 className="text-lg font-medium">{item.question}</h4>
                {openIndex === index ? (
                  <ChevronUp size={20} className="text-green-dark flex-shrink-0" />
                ) : (
                  <ChevronDown size={20} className="text-green-dark flex-shrink-0" />
                )}
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <p className="px-6 pb-6 leading-relaxed">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 fade-in">
          <p className="mb-4">その他のご質問がございましたら、お気軽にお問い合わせください。</p>
          <a href="#contact" className="btn btn-outline">
            お問い合わせする
          </a>
        </div>
      </div>
    </section>
  );
};