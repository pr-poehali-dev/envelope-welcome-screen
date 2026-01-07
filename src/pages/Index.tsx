import { useState } from 'react';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);

  const handleSealClick = () => {
    setIsEnvelopeOpen(true);
    setTimeout(() => {
      document.getElementById('main-content')?.scrollIntoView({ behavior: 'smooth' });
    }, 1500);
  };

  return (
    <div className="smooth-scroll overflow-x-hidden">
      {/* Hero Section - Envelope */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200">
        {/* Envelope Container */}
        <div className="relative w-full max-w-2xl aspect-[3/2] mx-4">
          {/* Envelope Back with Image */}
          <div 
            className={`absolute inset-0 rounded-lg shadow-2xl transition-all duration-1000 ${
              isEnvelopeOpen ? 'scale-95 shadow-xl' : 'scale-100'
            }`}
            style={{
              backgroundImage: 'url(https://cdn.poehali.dev/projects/ec67d413-4bd8-4408-9a1e-68277a2bd840/files/66283d6b-eac7-47ed-9751-c840505237cd.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            {/* Envelope Flap - Top part that opens */}
            <div 
              className={`absolute inset-x-0 top-0 h-1/2 transition-all duration-1000 origin-top ${
                isEnvelopeOpen ? 'envelope-flap-open' : ''
              }`}
              style={{
                backgroundImage: 'url(https://cdn.poehali.dev/projects/ec67d413-4bd8-4408-9a1e-68277a2bd840/files/66283d6b-eac7-47ed-9751-c840505237cd.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center top',
                transformStyle: 'preserve-3d',
                boxShadow: isEnvelopeOpen ? '0 10px 30px rgba(0,0,0,0.3)' : 'none',
                zIndex: 2
              }}
            />

            {/* Wax Seal */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <button
                onClick={handleSealClick}
                disabled={isEnvelopeOpen}
                className={`wax-seal w-32 h-32 md:w-40 md:h-40 rounded-full flex items-center justify-center transition-all duration-500 focus:outline-none focus:ring-4 focus:ring-accent/50 ${
                  isEnvelopeOpen 
                    ? 'scale-0 opacity-0' 
                    : 'hover:scale-110 scale-100 opacity-100'
                }`}
                aria-label="Открыть приглашение"
              >
                <span className="text-accent font-serif text-base md:text-lg font-semibold tracking-wider">
                  Нажмите
                </span>
              </button>
            </div>

            {/* Content Inside Envelope */}
            <div 
              className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 delay-500 ${
                isEnvelopeOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-90 pointer-events-none'
              }`}
            >
              <div className="bg-background/95 backdrop-blur-sm p-8 rounded-lg shadow-xl text-center max-w-md mx-4">
                <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                  Приглашение
                </h1>
                <div className="w-24 h-1 bg-accent mx-auto mb-4"></div>
                <p className="text-xl md:text-2xl text-foreground font-serif">
                  Илья и Анастасия
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div id="main-content" className="bg-background">
        {/* Names Section - Photo Collage */}
        {/* REPLACE IMAGES: Update src attributes below with actual couple photos */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-full max-w-6xl px-4">
              <div className="grid grid-cols-2 gap-4 md:gap-8">
                {/* Boy Photo - REPLACE THIS IMAGE */}
                <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                  <img
                    src="https://cdn.poehali.dev/projects/ec67d413-4bd8-4408-9a1e-68277a2bd840/files/b07dad34-0658-422d-b246-f8b6cbe84d36.jpg"
                    alt="Илья в детстве"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Girl Photo - REPLACE THIS IMAGE */}
                <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
                  <img
                    src="https://cdn.poehali.dev/projects/ec67d413-4bd8-4408-9a1e-68277a2bd840/files/6555f465-c74b-41d2-938c-439cf3d7d5e2.jpg"
                    alt="Анастасия в детстве"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* Names Overlay */}
          <div className="relative z-10 text-center bg-background/80 backdrop-blur-sm px-8 py-12 rounded-lg shadow-xl mx-4">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-primary mb-4">
              Илья и Анастасия
            </h1>
            <div className="w-32 h-1 bg-accent mx-auto"></div>
          </div>
        </section>

        {/* Timeline Section */}
        {/* EDIT SCHEDULE: Update times and descriptions below */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-primary mb-16">
              Программа дня
            </h2>
            
            <div className="space-y-8">
              {[
                { time: '15:00', title: 'Сбор гостей, фуршет', icon: 'Users' },
                { time: '16:30', title: 'Церемония', icon: 'Heart' },
                { time: '18:00', title: 'Ужин', icon: 'Utensils' },
                { time: '20:00', title: 'Танцы', icon: 'Music' }
              ].map((item, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-6 bg-card p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                    <Icon name={item.icon} size={32} className="text-primary-foreground" />
                  </div>
                  <div className="flex-grow">
                    <div className="text-2xl font-bold text-accent">{item.time}</div>
                    <div className="text-xl text-card-foreground">{item.title}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8">
              Место проведения
            </h2>
            
            <div className="bg-card p-8 rounded-lg shadow-lg">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon name="MapPin" size={40} className="text-primary" />
                </div>
              </div>
              
              <p className="text-2xl md:text-3xl text-card-foreground mb-4">
                Москва, город Пушкино, ул. Гоголя
              </p>
              
              {/* Placeholder for interactive map */}
              {/* <div className="mt-8 h-64 bg-muted rounded-lg flex items-center justify-center">
                <p className="text-muted-foreground">Карта будет здесь</p>
              </div> */}
            </div>
          </div>
        </section>

        {/* Contacts Section */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8">
              Контакты для связи
            </h2>
            
            <div className="bg-card p-8 rounded-lg shadow-lg">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon name="Phone" size={40} className="text-primary" />
                </div>
              </div>
              
              <a 
                href="tel:88889995553344" 
                className="text-3xl md:text-4xl text-accent hover:text-accent/80 transition-colors duration-300 font-semibold"
              >
                8-888-999-555-33-44
              </a>
            </div>
          </div>
        </section>

        {/* Closing Section */}
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5"></div>
          
          <div className="relative z-10 text-center px-4">
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-primary mb-8 animate-fade-in">
              До встречи<br />на мероприятии!
            </h2>
            
            <div className="flex justify-center gap-4 mt-12">
              <div className="w-16 h-16 rounded-full bg-accent/20 animate-pulse"></div>
              <div className="w-16 h-16 rounded-full bg-primary/20 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-16 h-16 rounded-full bg-accent/20 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}