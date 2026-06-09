import {
  Zap, Paintbrush, Wrench, FlaskConical, DraftingCompass, Layers,
  Cable, Plug, Lightbulb, ShieldCheck, CircuitBoard, Radio,
  Box, Home, Building, Briefcase, ChevronRight, WrenchIcon,
} from 'lucide-react';
import { useInView } from '../hooks/useInView';

const DIRECTIONS = [
  { icon: Zap, title: 'Электромонтажные работы', description: 'Монтаж и обслуживание электрических систем, электропроводки, щитов, розеток, освещения и сопутствующих инженерных элементов.', color: 'primary' },
  { icon: Paintbrush, title: 'Отделочные строительные работы', description: 'Выполнение отделочных задач для помещений, коммерческих объектов и рабочих зон.', color: 'accent' },
  { icon: Wrench, title: 'Строительное оборудование', description: 'Подбор и поставка строительного оборудования, инструмента и сопутствующих товаров под задачи объекта.', color: 'primary' },
  { icon: FlaskConical, title: 'Электролаборатория', description: 'Проверка, диагностика и испытания электрических систем, оборудования и отдельных элементов.', color: 'accent' },
  { icon: DraftingCompass, title: 'Проектирование', description: 'Подготовка решений для электроснабжения, слаботочных систем и инженерной инфраструктуры.', color: 'primary' },
  { icon: Layers, title: 'Комплексные работы', description: 'Подход под ключ для объектов, где нужно объединить электрику, отделку и техническое оснащение.', color: 'accent' },
];

const SERVICE_LIST = [
  { icon: Cable, label: 'Монтаж СИП' },
  { icon: Zap, label: 'Монтаж электрики' },
  { icon: CircuitBoard, label: 'Замена электрики' },
  { icon: Cable, label: 'Монтаж электропроводки' },
  { icon: CircuitBoard, label: 'Замена электропроводки' },
  { icon: Box, label: 'Сборка электрощита' },
  { icon: Layers, label: 'Монтаж опор ЛЭП' },
  { icon: Plug, label: 'Установка розеток' },
  { icon: Lightbulb, label: 'Установка светильников' },
  { icon: ShieldCheck, label: 'Монтаж молниезащиты' },
  { icon: FlaskConical, label: 'Электролаборатория' },
  { icon: DraftingCompass, label: 'Проектирование' },
  { icon: Radio, label: 'Слаботочные системы' },
  { icon: Box, label: 'Монтаж трансформаторных подстанций' },
  { icon: WrenchIcon, label: 'Услуги электрика' },
  { icon: Home, label: 'Электромонтаж в квартире' },
  { icon: Building, label: 'Электромонтаж в частном доме' },
  { icon: Briefcase, label: 'Электромонтаж под ключ в офисах' },
];

const colorMap: Record<string, { bg: string; icon: string; hover: string }> = {
  primary: { bg: 'bg-primary-50', icon: 'text-primary-600', hover: 'hover:border-primary-200' },
  accent: { bg: 'bg-accent-50', icon: 'text-accent-600', hover: 'hover:border-accent-200' },
};

export default function Services() {
  const { ref: dirRef, isVisible: dirVisible } = useInView();
  const { ref: svcRef, isVisible: svcVisible } = useInView();

  return (
    <section id="services" className="py-14 lg:py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={dirRef} className="mb-14">
          <div className={`text-center mb-10 ${dirVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900 tracking-tight">Основные направления</h2>
            <div className="mt-3 w-12 h-1 bg-primary-500 rounded-full mx-auto" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
            {DIRECTIONS.map((d, i) => {
              const Icon = d.icon;
              const c = colorMap[d.color];
              return (
                <div key={i} className={`bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-neutral-100 shadow-sm transition-all duration-300 hover:shadow-md ${c.hover} group ${dirVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${i * 0.06}s` }}>
                  <div className={`w-11 h-11 rounded-xl ${c.bg} flex items-center justify-center mb-3 group-hover:scale-105 transition-transform duration-300`}>
                    <Icon className={`w-5 h-5 ${c.icon}`} />
                  </div>
                  <h3 className="font-semibold text-neutral-900 text-base sm:text-lg mb-1.5">{d.title}</h3>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">{d.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div ref={svcRef}>
          <div className={`text-center mb-10 ${svcVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900 tracking-tight">Услуги</h2>
            <div className="mt-3 w-12 h-1 bg-primary-500 rounded-full mx-auto" />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-2.5 sm:gap-3">
            {SERVICE_LIST.map((s, i) => {
              const Icon = s.icon;
              return (
                <div key={i} className={`bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-neutral-100 shadow-sm hover:shadow-md hover:border-primary-100 transition-all duration-300 group cursor-default ${svcVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${i * 0.03}s` }}>
                  <div className="w-8 h-8 rounded-lg bg-primary-50 flex items-center justify-center mb-2 group-hover:bg-primary-100 transition-colors">
                    <Icon className="w-4 h-4 text-primary-600" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-neutral-800 leading-snug flex items-center gap-1">
                    {s.label}
                    <ChevronRight className="w-3 h-3 text-neutral-300 group-hover:text-primary-400 transition-colors hidden sm:block" />
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
