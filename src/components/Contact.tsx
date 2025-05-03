import React, { useRef, useState } from 'react';
import { Mail, Phone, Instagram, MapPin, Calendar, Check } from 'lucide-react';

export const Contact: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    petName: '',
    petType: '',
    message: '',
    preferredDate: '',
    plan: 'スタンダードプラン'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="section-padding bg-beige" ref={sectionRef}>
      <div className="container-custom">
        <h2 className="text-soft-green text-lg mb-2 text-center">ご予約・お問い合わせ</h2>
        <h3 className="text-2xl md:text-3xl font-bold text-accent-brown mb-8 text-center">大切な思い出づくりを、一緒に</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <div>
            <div className="bg-white rounded-2xl shadow p-8 md:p-10 h-full">
              <h4 className="text-2xl font-medium mb-6">お気軽にご連絡ください</h4>
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <Mail size={20} className="text-soft-green mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h5 className="font-medium">メール</h5>
                    <p>info@petportraits.example.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone size={20} className="text-soft-green mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h5 className="font-medium">電話</h5>
                    <p>03-1234-5678（平日10:00〜18:00）</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Instagram size={20} className="text-soft-green mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h5 className="font-medium">Instagram</h5>
                    <p>@petportraits_japan</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin size={20} className="text-soft-green mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h5 className="font-medium">撮影エリア</h5>
                    <p>東京都・神奈川県・千葉県・埼玉県<br />（その他のエリアはご相談ください）</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Calendar size={20} className="text-soft-green mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h5 className="font-medium">撮影可能日</h5>
                    <p>火曜日〜日曜日（月曜定休）<br />9:00〜17:00（最終受付）</p>
                  </div>
                </div>
              </div>
              <div className="relative h-48 md:h-64 rounded-xl overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25925.45037575978!2d139.70492986618346!3d35.66844028356248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b7eb13e0da3%3A0x492949ef2720afd2!2sShibuya%20Station!5e0!3m2!1sen!2sjp!4v1653374078364!5m2!1sen!2sjp" 
                  style={{ border: 0, position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Map"
                ></iframe>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-white rounded-2xl shadow p-8 md:p-10 h-full">
              {formSubmitted ? (
                <div className="text-center py-10">
                  <div className="rounded-full bg-soft-green w-16 h-16 flex items-center justify-center mx-auto mb-6">
                    <Check size={32} className="text-white" />
                  </div>
                  <h4 className="text-2xl font-medium mb-4">お問い合わせありがとうございます</h4>
                  <p className="mb-6">
                    ご入力いただいた内容を確認し、24時間以内にご連絡いたします。
                    しばらくお待ちくださいませ。
                  </p>
                  <button 
                    onClick={() => setFormSubmitted(false)} 
                    className="btn-primary"
                  >
                    フォームに戻る
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h4 className="text-2xl font-medium mb-6">予約・お問い合わせフォーム</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-accent-brown mb-1">
                        お名前 <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full rounded-lg border border-accent-brown focus:border-soft-green focus:ring focus:ring-soft-green focus:ring-opacity-50"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-accent-brown mb-1">
                        メールアドレス <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full rounded-lg border border-accent-brown focus:border-soft-green focus:ring focus:ring-soft-green focus:ring-opacity-50"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-accent-brown mb-1">
                        電話番号
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full rounded-lg border border-accent-brown focus:border-soft-green focus:ring focus:ring-soft-green focus:ring-opacity-50"
                      />
                    </div>
                    <div>
                      <label htmlFor="petName" className="block text-sm font-medium text-accent-brown mb-1">
                        ペットのお名前
                      </label>
                      <input
                        type="text"
                        id="petName"
                        name="petName"
                        value={formData.petName}
                        onChange={handleInputChange}
                        className="w-full rounded-lg border border-accent-brown focus:border-soft-green focus:ring focus:ring-soft-green focus:ring-opacity-50"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="petType" className="block text-sm font-medium text-accent-brown mb-1">
                        ペットの種類
                      </label>
                      <input
                        type="text"
                        id="petType"
                        name="petType"
                        value={formData.petType}
                        onChange={handleInputChange}
                        className="w-full rounded-lg border border-accent-brown focus:border-soft-green focus:ring focus:ring-soft-green focus:ring-opacity-50"
                      />
                    </div>
                    <div>
                      <label htmlFor="preferredDate" className="block text-sm font-medium text-accent-brown mb-1">
                        ご希望日
                      </label>
                      <input
                        type="date"
                        id="preferredDate"
                        name="preferredDate"
                        value={formData.preferredDate}
                        onChange={handleInputChange}
                        className="w-full rounded-lg border border-accent-brown focus:border-soft-green focus:ring focus:ring-soft-green focus:ring-opacity-50"
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label htmlFor="plan" className="block text-sm font-medium text-accent-brown mb-1">
                      ご希望プラン
                    </label>
                    <select
                      id="plan"
                      name="plan"
                      value={formData.plan}
                      onChange={handleInputChange}
                      className="w-full rounded-lg border border-accent-brown focus:border-soft-green focus:ring focus:ring-soft-green focus:ring-opacity-50"
                    >
                      <option value="スタンダードプラン">スタンダードプラン</option>
                      <option value="プレミアムプラン">プレミアムプラン</option>
                      <option value="その他">その他</option>
                    </select>
                  </div>
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-accent-brown mb-1">
                      ご要望・ご質問
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full rounded-lg border border-accent-brown focus:border-soft-green focus:ring focus:ring-soft-green focus:ring-opacity-50"
                    />
                  </div>
                  <button type="submit" className="btn-primary w-full py-3 text-lg">
                    送信する
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};