import { Phone, Mail, MapPin } from 'lucide-react';
import { useInView } from '../hooks/useInView';

export default function Contacts() {
  const { ref, isVisible } = useInView();

  return (
    <section id="contacts" ref={ref} className="py-14 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-10 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900 tracking-tight">Контакты</h2>
          <div className="mt-3 w-12 h-1 bg-primary-500 rounded-full mx-auto" />
        </div>

        <div className={`max-w-3xl mx-auto ${isVisible ? 'animate-fade-in-up delay-100' : 'opacity-0'}`}>
          <div className="bg-neutral-50 rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-neutral-100">
            <h3 className="text-lg sm:text-xl font-bold text-neutral-900 mb-5">
              ООО &laquo;КРААС ИНЖИНИРИНГ&raquo;
            </h3>

            <div className="space-y-4">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-primary-50 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-primary-600" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-neutral-500 mb-0.5">Телефон</p>
                  <a href="tel:+79269814305" className="text-base sm:text-lg font-semibold text-neutral-900 hover:text-primary-600 transition-colors">
                    +7 926 981 43 05
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-accent-50 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-accent-600" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-neutral-500 mb-0.5">Email</p>
                  <a href="mailto:oookraasengineering@gmail.com" className="text-sm sm:text-base font-semibold text-neutral-900 hover:text-primary-600 transition-colors break-all">
                    oookraasengineering@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-neutral-100 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-neutral-600" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-neutral-500 mb-0.5">Юридический адрес</p>
                  <p className="text-xs sm:text-sm font-medium text-neutral-800 leading-relaxed">
                    117292, г. Москва, вн. тер. г. муниципальный округ Академический, ул. Шверника, д. 6, к. 1, помещ. 8П
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 mt-6">
              <a href="tel:+79269814305" className="px-5 py-2.5 bg-primary-600 text-white text-sm font-semibold rounded-2xl hover:bg-primary-700 transition-colors duration-200 shadow-sm inline-flex items-center gap-2">
                <Phone className="w-4 h-4" /> Позвонить
              </a>
              <a href="mailto:oookraasengineering@gmail.com" className="px-5 py-2.5 bg-white text-neutral-800 text-sm font-semibold rounded-2xl border border-neutral-200 hover:border-primary-200 hover:text-primary-600 transition-colors duration-200 inline-flex items-center gap-2">
                <Mail className="w-4 h-4" /> Написать на почту
              </a>
            </div>
          </div>

          <div className="mt-5 relative rounded-3xl overflow-hidden border border-neutral-200 h-[280px] sm:h-[380px]">
            <iframe
              src="https://yandex.ru/map-widget/v1/?text=117292%2C%20%D0%B3.%20%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0%2C%20%D1%83%D0%BB.%20%D0%A8%D0%B2%D0%B5%D1%80%D0%BD%D0%B8%D0%BA%D0%B0%2C%20%D0%B4.%206%2C%20%D0%BA.%201&z=16"
              title="Карта: ООО КРААС ИНЖИНИРИНГ, г. Москва, ул. Шверника, д. 6, к. 1"
              loading="lazy"
              className="absolute inset-0 w-full h-full border-0"
              allowFullScreen
            />
            <noscript>
              <div className="absolute inset-0 bg-neutral-100 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-7 h-7 text-neutral-400 mx-auto mb-1.5" />
                  <p className="text-xs sm:text-sm text-neutral-500">г. Москва, ул. Шверника, д. 6, к. 1</p>
                </div>
              </div>
            </noscript>
          </div>
        </div>
      </div>
    </section>
  );
}
