"use client";
import Image from "next/image";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <main>
      {/* ヒーローセクション */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero.jpg"
            alt="ペットと飼い主の触れ合い"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="container-custom relative z-10 text-center">
          <h1 className="font-handwriting text-4xl md:text-6xl text-white mb-6">
            うちの子の"今"を、やさしく美しく残す。
          </h1>
          <p className="text-white text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            忙しい毎日の中でも、ふと癒される"うちの子"の仕草や表情。
            その一瞬を、自然体で、やさしい雰囲気で、心に残る形に。
          </p>
          <a href="#contact" className="btn-primary inline-block">
            撮影のご予約はこちら
          </a>
        </div>
      </section>

      {/* コンセプトセクション */}
      <section className="section-padding bg-beige">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-handwriting text-3xl md:text-4xl text-soft-green mb-4">
              プロカメラマンがご自宅やお好きな場所に出張
            </h2>
            <p className="text-lg">
              家族の一員であるペットとの"かけがえのない今"を写真で記録します。
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "自然な表情を大切に",
                description: "リラックスした環境で、ペット本来の表情を引き出します。",
              },
              {
                title: "思い出の場所で",
                description: "ご自宅やお散歩コースなど、ペットがリラックスできる場所で撮影。",
              },
              {
                title: "家族の一員として",
                description: "飼い主様との触れ合いも大切に、家族の思い出を残します。",
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm">
                <h3 className="text-xl font-medium mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ギャラリーセクション */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="font-handwriting text-3xl md:text-4xl text-center text-soft-green mb-12">
            作品ギャラリー
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="aspect-square relative rounded-xl overflow-hidden"
              >
                <Image
                  src={`/images/gallery-${item}.jpg`}
                  alt={`ギャラリー画像 ${item}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* お客様の声セクション */}
      <Testimonials />

      {/* お問い合わせ・予約セクション */}
      <Contact />
    </main>
  );
}
