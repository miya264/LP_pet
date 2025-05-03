"use client";

import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    name: "佐藤 真紀",
    pet: "シーズー コタロウ (2歳)",
    comment: "うちの子の自然な表情をこんなに素敵に撮ってもらえるとは思っていませんでした。家に来てもらっての撮影でしたが、コタロウもとてもリラックスしていて、いつもの表情を残せて本当に嬉しいです。写真集も宝物になりました。",
    image: "https://images.pexels.com/photos/3361739/pexels-photo-3361739.jpeg",
    rating: 5
  },
  {
    name: "田中 裕子",
    pet: "ミックス モモ (3歳)",
    comment: "子犬は動きが多くて撮影が難しいと思っていましたが、鈴木さんは本当に忍耐強く、モモの気が向いた瞬間を逃さず撮ってくださいました。自然光を生かした柔らかい雰囲気の写真は、私たち家族にとって大切な宝物です。また成長した姿も、ぜひお願いしたいと思っています。",
    image: "https://images.pexels.com/photos/1904105/pexels-photo-1904105.jpeg",
    rating: 5
  },
  {
    name: "加藤 健太",
    pet: "ミックス リオ (1歳)",
    comment: "公園での撮影でしたが、リオの元気いっぱいな姿から、お茶目でユーモラスな表情、そして疲れて休む穏やかな表情まで、さまざまな瞬間を丁寧に撮っていただきました。家族全員との写真も自然体で素敵に仕上げてくださり、とても感謝しています。写真を見るたびに、その日の明るく楽しい時間がよみがえります。",
    image: "https://images.pexels.com/photos/2607544/pexels-photo-2607544.jpeg",
    rating: 5
  },
  {
    name: "山本 愛",
    pet: "ビーグル ココ (8歳)",
    comment: "高齢になったココの姿を残したくて撮影をお願いしました。体調を考慮しながら短い時間で効率よく、でも焦らずに撮影してくださり、ココの魅力がたっぷり詰まった素敵な写真をたくさん撮っていただけました。この思い出に感謝しています。",
    image: "https://images.pexels.com/photos/1741235/pexels-photo-1741235.jpeg",
    rating: 5
  }
];

export const Testimonials: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);

  const nextTestimonial = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section id="testimonials" className="section-padding bg-beige" ref={sectionRef}>
      <div className="container-custom">
        <h2 className="text-soft-green text-lg mb-2 text-center">お客様の声</h2>
        <h3 className="text-2xl md:text-3xl font-bold text-accent-brown mb-8 text-center">幸せのお声をいただきました</h3>
        <div className="mt-12">
          <div className="relative max-w-4xl mx-auto">
            {/* Desktop navigation */}
            <div className="hidden md:block">
              <button 
                className="absolute -left-5 top-1/2 transform -translate-y-1/2 z-10 h-10 w-10 flex items-center justify-center rounded-full bg-white shadow text-accent-brown hover:bg-soft-green transition-all duration-300"
                onClick={prevTestimonial}
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                className="absolute -right-5 top-1/2 transform -translate-y-1/2 z-10 h-10 w-10 flex items-center justify-center rounded-full bg-white shadow text-accent-brown hover:bg-soft-green transition-all duration-300"
                onClick={nextTestimonial}
              >
                <ChevronRight size={24} />
              </button>
            </div>
            {/* Testimonial card */}
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3">
                  <div className="rounded-full overflow-hidden w-48 h-48 mx-auto shadow hover:shadow-lg transition-all duration-500">
                    <img 
                      src={testimonials[current].image} 
                      alt={`${testimonials[current].name} with ${testimonials[current].pet}`}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <div className="flex mb-2">
                    {[...Array(testimonials[current].rating)].map((_, i) => (
                      <Star key={i} size={18} fill="#A3C9A8" color="#A3C9A8" />
                    ))}
                  </div>
                  <p className="italic mb-6 leading-relaxed text-lg">"{testimonials[current].comment}"</p>
                  <div>
                    <p className="font-medium text-xl">{testimonials[current].name}</p>
                    <p className="text-accent-brown mt-1">{testimonials[current].pet}</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Mobile navigation */}
            <div className="flex justify-center mt-6 space-x-2 md:hidden">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    current === index ? 'bg-soft-green scale-125' : 'bg-accent-brown/50'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="text-center mt-12">
            <a href="#contact" className="btn btn-primary inline-block">
              撮影の予約をする
            </a>
        </div>
      </div>
    </section>
  );
};