import { useInView } from '../hooks/useInView';

const PRICE_ITEMS = [
  { service: 'Диагностика электропроводки', description: 'Комплексный осмотр и анализ состояния электрической проводки, выявление дефектов и нарушений.', price: 'от 5 000 ₽' },
  { service: 'Проверка УЗО', description: 'Проверка устройств защитного отключения на эффективность работы.', price: 'от 600 ₽' },
  { service: 'Испытания трансформаторов', description: 'Комплексное тестирование силовых трансформаторов на работоспособность и соответствие параметрам.', price: 'от 8 000 ₽' },
  { service: 'Анализ качества электроэнергии', description: 'Исследование параметров электроэнергии электросетей для выявления отклонений и проблем.', price: 'от 12 000 ₽' },
  { service: 'Техническое обслуживание трансформаторов', description: 'Профилактика и ремонт трансформаторов для обеспечения их надежности.', price: 'от 12 000 ₽' },
  { service: 'Диагностика электроснабжения', description: 'Проверка системы электроснабжения на соответствие нормативам, выявление проблем в работе.', price: 'от 6 000 ₽' },
  { service: 'Испытания АВР', description: 'Проверка и наладка автоматических выключателей резерва на корректность работы и фазировку.', price: 'от 5 000 ₽' },
  { service: 'Испытания электроустановок электроизмерительной лабораторией', description: 'Проведение комплексных испытаний для подтверждения надежности и безопасности электрических установок.', price: 'от 7 000 ₽' },
  { service: 'Испытания и проверка высоковольтного кабеля в лаборатории', description: 'Лабораторные испытания силовых кабелей на прочность и устойчивость к условиям эксплуатации.', price: 'от 4 000 ₽' },
  { service: 'Измерение сопротивления изоляции', description: 'Оценка состояния изоляционных материалов кабелей и проводов с помощью метода замера сопротивления.', price: 'от 250 ₽' },
];

export default function PriceList() {
  const { ref, isVisible } = useInView();

  return (
    <section id="price" ref={ref} className="py-14 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-4 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900 tracking-tight">Прайс-лист на основные работы</h2>
          <div className="mt-3 w-12 h-1 bg-primary-500 rounded-full mx-auto" />
        </div>
        <p className={`text-center text-neutral-500 max-w-2xl mx-auto mb-10 text-xs sm:text-sm ${isVisible ? 'animate-fade-in-up delay-100' : 'opacity-0'}`}>
          Стоимость указана ориентировочно. Итоговая цена зависит от объема работ, состояния объекта и технических условий.
        </p>

        {/* Desktop table */}
        <div className={`hidden md:block ${isVisible ? 'animate-fade-in-up delay-200' : 'opacity-0'}`}>
          <div className="bg-white rounded-2xl sm:rounded-3xl border border-neutral-200 shadow-sm overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-neutral-50 border-b border-neutral-100">
                  <th className="text-left px-5 sm:px-6 py-3.5 text-xs sm:text-sm font-semibold text-neutral-700">Услуга</th>
                  <th className="text-left px-5 sm:px-6 py-3.5 text-xs sm:text-sm font-semibold text-neutral-700 hidden lg:table-cell">Описание</th>
                  <th className="text-right px-5 sm:px-6 py-3.5 text-xs sm:text-sm font-semibold text-neutral-700 w-32 sm:w-36">Стоимость</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100">
                {PRICE_ITEMS.map((item, i) => (
                  <tr key={i} className="hover:bg-neutral-50/50 transition-colors">
                    <td className="px-5 sm:px-6 py-3.5 text-xs sm:text-sm font-medium text-neutral-900">
                      {item.service}
                      <p className="text-xs text-neutral-500 mt-1 lg:hidden line-clamp-2">{item.description}</p>
                    </td>
                    <td className="px-5 sm:px-6 py-3.5 text-xs sm:text-sm text-neutral-600 hidden lg:table-cell">{item.description}</td>
                    <td className="px-5 sm:px-6 py-3.5 text-xs sm:text-sm font-semibold text-primary-600 text-right whitespace-nowrap">{item.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile cards */}
        <div className="md:hidden space-y-2.5">
          {PRICE_ITEMS.map((item, i) => (
            <div key={i} className={`bg-white rounded-xl sm:rounded-2xl p-4 border border-neutral-100 shadow-sm ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${i * 0.04}s` }}>
              <div className="flex items-start justify-between gap-2 mb-1.5">
                <h3 className="text-xs sm:text-sm font-semibold text-neutral-900 leading-snug">{item.service}</h3>
                <span className="text-xs sm:text-sm font-bold text-primary-600 whitespace-nowrap flex-shrink-0">{item.price}</span>
              </div>
              <p className="text-[11px] sm:text-xs text-neutral-500 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
