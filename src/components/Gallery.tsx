import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const galleryImages = [
  {
    src: "https://images.pexels.com/photos/2607544/pexels-photo-2607544.jpeg",
    alt: "Happy dog playing in park",
    caption: "くつろぎの午後、ハートでお茶目に"
  },
  {
    src: "https://images.pexels.com/photos/1904105/pexels-photo-1904105.jpeg",
    alt: "Cat lying in sunlight",
    caption: "そっと触れる優しさの時間"
  },
  {
    src: "https://images.pexels.com/photos/3361739/pexels-photo-3361739.jpeg",
    alt: "Dog and owner playing",
    caption: "愛犬との触れ合い"
  },
  {
    src: "https://images.pexels.com/photos/1741235/pexels-photo-1741235.jpeg",
    alt: "Puppy being held",
    caption: "優しく包まれる瞬間"
  },
  {
    src: "https://images.pexels.com/photos/1183434/pexels-photo-1183434.jpeg",
    alt: "Cat stretching",
    caption: "思わず笑顔がこぼれる瞬間"
  },
  {
    src: "https://images.pexels.com/photos/1390361/pexels-photo-1390361.jpeg",
    alt: "Dog running in field",
    caption: "じっと見つめる無垢なまなざし"
  }
];

export const Gallery: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

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

  const openModal = (index: number) => {
    setCurrentImage(index);
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  return (
    <section id="gallery" className="section" ref={sectionRef}>
      <div className="container-custom">
        <h2 className="section-subtitle fade-in">作品集</h2>
        <h3 className="section-title fade-in">ナチュラルで心温まる瞬間</h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className="fade-in hover-zoom cursor-pointer overflow-hidden rounded-xl shadow-soft transition-all duration-500 hover:shadow-hover group"
              style={{ transitionDelay: `${index * 0.1}s` }}
              onClick={() => openModal(index)}
            >
              <div className="relative overflow-hidden" style={{ paddingBottom: '75%' }}>
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <p className="font-handwritten text-lg">{image.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 fade-in">
          <a href="#contact" className="btn btn-outline animate-float">
            撮影の予約をする
          </a>
        </div>
      </div>

      {modalOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center">
          <button 
            className="absolute top-4 right-4 text-white z-10 transition-transform hover:scale-110"
            onClick={closeModal}
          >
            <X size={32} />
          </button>
          
          <button 
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white z-10 h-12 w-12 flex items-center justify-center rounded-full bg-black/30 hover:bg-black/50 transition-all"
            onClick={prevImage}
          >
            <ChevronLeft size={32} />
          </button>
          
          <div className="max-w-4xl max-h-[80vh] scale-in">
            <img 
              src={galleryImages[currentImage].src} 
              alt={galleryImages[currentImage].alt}
              className="max-h-[80vh] w-auto mx-auto rounded-lg"
            />
            <p className="text-white text-center mt-4 font-handwritten text-xl animate-fade-in">
              {galleryImages[currentImage].caption}
            </p>
          </div>
          
          <button 
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white z-10 h-12 w-12 flex items-center justify-center rounded-full bg-black/30 hover:bg-black/50 transition-all"
            onClick={nextImage}
          >
            <ChevronRight size={32} />
          </button>
        </div>
      )}
    </section>
  );
};