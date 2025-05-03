import React from 'react';
import { Camera, Instagram, Facebook, Mail, ChevronUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-brown-400 text-cream">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center mb-4">
              <Camera size={24} className="mr-2" />
              <span className="font-handwritten text-xl font-medium">PetPortraits</span>
            </div>
            
            <p className="mb-6 opacity-90">
              あなたの大切なペットとの思い出を、ナチュラルで感情豊かな写真に残します。
              東京を中心に出張撮影いたします。
            </p>
            
            <div className="flex space-x-4">
              <a href="#" className="h-10 w-10 rounded-full bg-cream bg-opacity-20 flex items-center justify-center hover:bg-opacity-30 transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-cream bg-opacity-20 flex items-center justify-center hover:bg-opacity-30 transition-all">
                <Facebook size={20} />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-cream bg-opacity-20 flex items-center justify-center hover:bg-opacity-30 transition-all">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">メニュー</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">ホーム</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">サービスについて</a></li>
              <li><a href="#gallery" className="hover:text-white transition-colors">ギャラリー</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">プラン・料金</a></li>
              <li><a href="#photographer" className="hover:text-white transition-colors">カメラマン紹介</a></li>
              <li><a href="#testimonials" className="hover:text-white transition-colors">お客様の声</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">よくある質問</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">お問い合わせ</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">営業時間・エリア</h4>
            <ul className="space-y-3 opacity-90">
              <li>撮影可能日: 火曜日〜日曜日</li>
              <li>営業時間: 9:00〜17:00</li>
              <li>定休日: 月曜日</li>
              <li>撮影エリア: 東京都・神奈川県・千葉県・埼玉県</li>
              <li>（その他エリアはご相談ください）</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-cream border-opacity-20 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm opacity-90">© 2025 PetPortraits All Rights Reserved.</p>
          
          <button 
            onClick={scrollToTop}
            className="mt-4 md:mt-0 flex items-center text-sm hover:text-white transition-colors"
          >
            TOPへ戻る <ChevronUp size={14} className="ml-1" />
          </button>
        </div>
      </div>
    </footer>
  );
};