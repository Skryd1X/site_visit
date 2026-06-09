import { Zap, Paintbrush, Wrench, CalendarCheck } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const STATS = [
  { icon: CalendarCheck, label: 'С 2018 года на рынке' },
  { icon: Zap, label: 'Электромонтажные работы' },
  { icon: Paintbrush, label: 'Отделочные работы' },
  { icon: Wrench, label: 'Строительное оборудование' },
];

export default function Hero() {
  const { ref, isVisible } = useInView(0.05);

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" ref={ref} className="relative min-h-screen flex items-center pt-16 lg:pt-0 bg-gradient-to-br from-white via-neutral-50 to-accent-50 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%232563eb' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 sm:py-16 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className={`space-y-6 sm:space-y-8 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 border border-primary-100">
              <div className="w-2 h-2 rounded-full bg-primary-500" />
              <span className="text-xs sm:text-sm font-medium text-primary-700">Работаем с 2018 года</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 leading-[1.15] tracking-tight">
              Электромонтажные и строительные работы{' '}
              <span className="text-primary-600">для бизнеса</span> и частных объектов
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-neutral-600 leading-relaxed max-w-xl">
              ООО &laquo;КРААС ИНЖИНИРИНГ&raquo; выполняет электромонтажные, отделочные и инженерные
              работы, а также работает с поставками строительного оборудования.
            </p>

            <div className="flex flex-wrap gap-3">
              <button onClick={() => scrollTo('#services')} className="px-5 sm:px-6 py-3 bg-primary-600 text-white text-sm font-semibold rounded-2xl hover:bg-primary-700 transition-all duration-200 shadow-sm hover:shadow-md">
                Посмотреть услуги
              </button>
              <button onClick={() => scrollTo('#price')} className="px-5 sm:px-6 py-3 bg-white text-neutral-800 text-sm font-semibold rounded-2xl border border-neutral-200 hover:border-primary-200 hover:text-primary-600 transition-all duration-200">
                Открыть прайс
              </button>
              <button onClick={() => scrollTo('#contacts')} className="px-5 sm:px-6 py-3 text-primary-600 text-sm font-semibold rounded-2xl hover:bg-primary-50 transition-all duration-200">
                Связаться
              </button>
            </div>
          </div>

          <div className={`grid grid-cols-2 gap-3 sm:gap-4 ${isVisible ? 'animate-fade-in-up delay-200' : 'opacity-0'}`}>
            {STATS.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div key={i} className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-sm border border-neutral-100 hover:shadow-md hover:border-primary-100 transition-all duration-300 group">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-primary-50 flex items-center justify-center mb-2 sm:mb-3 group-hover:bg-primary-100 transition-colors">
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary-600" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-neutral-700 leading-snug">
                    {stat.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
