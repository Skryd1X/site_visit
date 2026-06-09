import { Calendar, Layers, ListChecks, Building2, LayoutList, PhoneCall } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const ITEMS = [
  { icon: Calendar, title: 'Опыт с 2018 года', description: 'Компания зарегистрирована и работает на рынке с 2018 года.' },
  { icon: Layers, title: 'Комплексный подход', description: 'Можно закрыть сразу несколько задач: электрика, отделка, оборудование.' },
  { icon: ListChecks, title: 'Понятная структура работ', description: 'Клиент получает понятное описание задач, этапов и стоимости.' },
  { icon: Building2, title: 'Работа с разными объектами', description: 'Подходит для коммерческих, технических и частных помещений.' },
  { icon: LayoutList, title: 'Аккуратное оформление', description: 'Все услуги, контакты и прайс собраны на одной странице без лишней информации.' },
  { icon: PhoneCall, title: 'Связь напрямую', description: 'Контакты компании доступны без сложных форм и лишних шагов.' },
];

export default function Advantages() {
  const { ref, isVisible } = useInView();

  return (
    <section id="advantages" ref={ref} className="py-14 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-10 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900 tracking-tight">Почему выбирают КРААС ИНЖИНИРИНГ</h2>
          <div className="mt-3 w-12 h-1 bg-primary-500 rounded-full mx-auto" />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {ITEMS.map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className={`bg-neutral-50 rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-neutral-100 hover:border-primary-100 hover:bg-white hover:shadow-md transition-all duration-300 group ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${i * 0.06}s` }}>
                <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center mb-3 group-hover:bg-primary-100 transition-colors">
                  <Icon className="w-5 h-5 text-primary-600" />
                </div>
                <h3 className="font-semibold text-neutral-900 text-base sm:text-lg mb-1.5">{item.title}</h3>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
