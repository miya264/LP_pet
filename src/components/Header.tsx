import React, { useState, useEffect } from 'react';
import { Camera, Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'ホーム', href: '#' },
    { name: 'サービス', href: '#services' },
    { name: 'ギャラリー', href: '#gallery' },
    { name: 'カメラマン', href: '#photographer' },
    { name: 'お客様の声', href: '#testimonials' },
    { name: 'よくある質問', href: '#faq' },
    { name: '予約・問い合わせ', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-cream shadow-soft py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <a href="#" className="flex items-center space-x-2">
          <Camera size={24} className="text-green-dark" />
          <span className="font-handwritten text-xl font-medium">PetPortraits</span>
        </a>

        {/* Desktop navigation */}
        <nav className="hidden md:flex space-x-3 items-center">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 flex items-center justify-center whitespace-nowrap
                ${link.name === '予約・問い合わせ' 
                  ? 'btn-primary' 
                  : 'text-accent-brown hover:text-soft-green bg-transparent'}
              `}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-brown-900" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile navigation */}
      <div 
        className={`md:hidden absolute w-full bg-cream shadow-soft transition-all duration-300 ${
          isOpen ? 'max-h-screen py-4 opacity-100' : 'max-h-0 py-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="container-custom flex flex-col space-y-4">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className={`text-center py-2 ${
                link.name === '予約・問い合わせ' 
                  ? 'btn btn-primary mt-2' 
                  : 'text-brown-900 hover:text-green-dark transition-colors'
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};