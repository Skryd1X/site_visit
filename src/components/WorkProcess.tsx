import { MessageSquare, Search, FileText, Hammer } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const STEPS = [
  { icon: MessageSquare, number: '01', title: 'Обсуждение задачи', description: 'Клиент сообщает, какие работы нужны и какой объект требуется обслужить.' },
  { icon: Search, number: '02', title: 'Уточнение деталей', description: 'Компания уточняет объем, особенности объекта, срочность и технические нюансы.' },
  { icon: FileText, number: '03', title: 'Подготовка предложения', description: 'Формируется понятный состав работ и ориентир по стоимости.' },
  { icon: Hammer, number: '04', title: 'Выполнение работ', description: 'Команда выполняет работы аккуратно, с учетом требований безопасности и договоренностей.' },
];

export default function WorkProcess() {
  const { ref, isVisible } = useInView();

  return (
    <section ref={ref} className="py-14 lg:py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-10 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900 tracking-tight">Как проходит работа</h2>
          <div className="mt-3 w-12 h-1 bg-primary-500 rounded-full mx-auto" />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={i} className={`bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-neutral-100 shadow-sm hover:shadow-md transition-all duration-300 group relative ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${i * 0.08}s` }}>
                <div className="absolute top-3 right-4 text-4xl sm:text-5xl font-bold text-neutral-100 select-none group-hover:text-primary-100 transition-colors">{step.number}</div>
                <div className="relative">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-accent-50 flex items-center justify-center mb-3 group-hover:bg-accent-100 transition-colors">
                    <Icon className="w-5 h-5 text-accent-600" />
                  </div>
                  <h3 className="font-semibold text-neutral-900 text-base sm:text-lg mb-1.5">{step.title}</h3>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
