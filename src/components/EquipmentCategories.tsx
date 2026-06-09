import { Zap, Anchor, Wrench, Cpu, Droplets, ShieldCheck } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const CATEGORIES = [
  { icon: Zap, label: 'Электрика', color: 'primary' },
  { icon: Anchor, label: 'Крепеж', color: 'accent' },
  { icon: Wrench, label: 'Инструмент', color: 'primary' },
  { icon: Cpu, label: 'Силовая техника', color: 'accent' },
  { icon: Droplets, label: 'Сантехника', color: 'primary' },
  { icon: ShieldCheck, label: 'Средства защиты', color: 'accent' },
];

const colorStyles: Record<string, { bg: string; icon: string; hoverBorder: string; hoverBg: string }> = {
  primary: { bg: 'bg-primary-50', icon: 'text-primary-600', hoverBorder: 'hover:border-primary-200', hoverBg: 'group-hover:bg-primary-100' },
  accent: { bg: 'bg-accent-50', icon: 'text-accent-600', hoverBorder: 'hover:border-accent-200', hoverBg: 'group-hover:bg-accent-100' },
};

export default function EquipmentCategories() {
  const { ref, isVisible } = useInView();

  return (
    <section ref={ref} className="py-14 lg:py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-4 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900 tracking-tight">Строительное оборудование и товары для работ</h2>
          <div className="mt-3 w-12 h-1 bg-primary-500 rounded-full mx-auto" />
        </div>
        <p className={`text-center text-neutral-500 max-w-2xl mx-auto mb-10 text-xs sm:text-sm ${isVisible ? 'animate-fade-in-up delay-100' : 'opacity-0'}`}>
          Компания может работать с подбором строительного оборудования, инструмента и сопутствующих материалов под задачи объекта.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {CATEGORIES.map((cat, i) => {
            const Icon = cat.icon;
            const s = colorStyles[cat.color];
            return (
              <div key={i} className={`bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-5 border border-neutral-100 shadow-sm hover:shadow-md ${s.hoverBorder} transition-all duration-300 group text-center ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${i * 0.06}s` }}>
                <div className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl ${s.bg} flex items-center justify-center mx-auto mb-2.5 ${s.hoverBg} transition-colors`}>
                  <Icon className={`w-5 h-5 ${s.icon}`} />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-neutral-800">{cat.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
