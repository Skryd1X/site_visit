import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Главная', href: '#hero' },
  { label: 'О компании', href: '#about' },
  { label: 'Услуги', href: '#services' },
  { label: 'Прайс', href: '#price' },
  { label: 'Преимущества', href: '#advantages' },
  { label: 'Контакты', href: '#contacts' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const handleNav = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-[72px]">
          <a href="#hero" onClick={() => handleNav('#hero')} className="flex items-center gap-2 flex-shrink-0">
            <div className="h-9 w-9 rounded-xl bg-primary-600 flex items-center justify-center">
              <span className="text-white font-bold text-sm">К</span>
            </div>
            <div className="leading-tight">
              <div className="font-bold text-neutral-900 text-base sm:text-lg tracking-tight">
                КРААС <span className="text-primary-600">ИНЖИНИРИНГ</span>
              </div>
              <div className="text-[10px] text-neutral-500 font-medium tracking-wide hidden sm:block">
                электромонтажные и строительные работы
              </div>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-1" aria-label="Основная навигация">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNav(item.href)}
                className="px-3 py-2 text-sm font-medium text-neutral-700 hover:text-primary-600 rounded-lg hover:bg-primary-50 transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+79269814305" className="flex items-center gap-2 text-sm font-semibold text-neutral-800 hover:text-primary-600 transition-colors">
              <Phone className="w-4 h-4" />
              +7 926 981 43 05
            </a>
            <a
              href="#contacts"
              onClick={(e) => { e.preventDefault(); handleNav('#contacts'); }}
              className="px-5 py-2.5 bg-primary-600 text-white text-sm font-semibold rounded-2xl hover:bg-primary-700 transition-colors duration-200 shadow-sm"
            >
              Связаться
            </a>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <a href="tel:+79269814305" className="p-2 text-neutral-700 hover:text-primary-600" aria-label="Позвонить">
              <Phone className="w-5 h-5" />
            </a>
            <button
              onClick={() => setOpen(!open)}
              className="p-2 text-neutral-700 hover:text-primary-600 transition-colors"
              aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
            >
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="lg:hidden animate-slide-down border-t border-neutral-100 bg-white/95 backdrop-blur-md max-h-[calc(100vh-64px)] overflow-y-auto">
          <nav className="max-w-7xl mx-auto px-4 py-3 flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNav(item.href)}
                className="w-full text-left px-4 py-3 text-sm font-medium text-neutral-700 hover:text-primary-600 rounded-xl hover:bg-primary-50 transition-colors"
              >
                {item.label}
              </button>
            ))}
            <a
              href="#contacts"
              onClick={(e) => { e.preventDefault(); handleNav('#contacts'); }}
              className="mt-2 w-full text-center px-5 py-3 bg-primary-600 text-white text-sm font-semibold rounded-2xl hover:bg-primary-700 transition-colors"
            >
              Связаться
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
