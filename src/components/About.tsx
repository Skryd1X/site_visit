import { useInView } from '../hooks/useInView';
import { Building2, FileText, User } from 'lucide-react';

const REQUISITES = [
  { label: 'Полное наименование', value: 'Общество с ограниченной ответственностью ООО «КРААС ИНЖИНИРИНГ»' },
  { label: 'ИНН', value: '7702432413' },
  { label: 'КПП', value: '772701001' },
  { label: 'ОГРН', value: '1187746525955' },
  { label: 'Дата регистрации', value: '31 мая 2018 года' },
  { label: 'Уставный капитал', value: '100 000 руб.' },
  { label: 'Юридический адрес', value: '117292, г. Москва, вн. тер. г. муниципальный округ Академический, ул. Шверника, д. 6, к. 1, помещ. 8П' },
  { label: 'Генеральный директор', value: 'Ковалевский Дмитрий Николаевич' },
];

export default function About() {
  const { ref, isVisible } = useInView();

  return (
    <section id="about" ref={ref} className="py-14 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-10 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900 tracking-tight">О компании</h2>
          <div className="mt-3 w-12 h-1 bg-primary-500 rounded-full mx-auto" />
        </div>

        <div className={`max-w-3xl mx-auto mb-10 ${isVisible ? 'animate-fade-in-up delay-100' : 'opacity-0'}`}>
          <div className="bg-neutral-50 rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-neutral-100">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 rounded-xl bg-accent-100 flex items-center justify-center flex-shrink-0">
                <Building2 className="w-5 h-5 text-accent-600" />
              </div>
              <p className="text-neutral-700 leading-relaxed text-sm sm:text-base">
                ООО &laquo;КРААС ИНЖИНИРИНГ&raquo; оказывает услуги по электромонтажным работам,
                отделочным строительным работам и торговле строительным оборудованием. Компания
                работает с задачами для коммерческих, технических и частных объектов, где важны
                аккуратность, понятная организация работ и соблюдение базовых требований безопасности.
              </p>
            </div>
          </div>
        </div>

        <div className={`max-w-4xl mx-auto ${isVisible ? 'animate-fade-in-up delay-200' : 'opacity-0'}`}>
          <div className="bg-white rounded-2xl sm:rounded-3xl border border-neutral-200 shadow-sm overflow-hidden">
            <div className="px-5 sm:px-8 py-4 border-b border-neutral-100 bg-neutral-50 flex items-center gap-3">
              <FileText className="w-5 h-5 text-primary-600" />
              <h3 className="font-semibold text-neutral-900 text-sm sm:text-base">Реквизиты компании</h3>
            </div>
            <div className="divide-y divide-neutral-100">
              {REQUISITES.map((r, i) => (
                <div key={i} className="px-5 sm:px-8 py-3 sm:py-4 flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-6 hover:bg-neutral-50/50 transition-colors">
                  <span className="text-xs sm:text-sm text-neutral-500 font-medium sm:w-48 lg:w-52 flex-shrink-0">{r.label}</span>
                  <span className="text-xs sm:text-sm text-neutral-800 font-medium">
                    {r.label === 'Генеральный директор' ? (
                      <span className="inline-flex items-center gap-2">
                        <User className="w-4 h-4 text-neutral-400" />{r.value}
                      </span>
                    ) : r.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
