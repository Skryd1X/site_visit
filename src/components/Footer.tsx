export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <div className="grid sm:grid-cols-3 gap-6 items-start">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <div className="h-8 w-8 rounded-lg bg-primary-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">К</span>
              </div>
              <span className="font-bold text-base sm:text-lg tracking-tight">
                КРААС <span className="text-primary-400">ИНЖИНИРИНГ</span>
              </span>
            </div>
          </div>
          <div className="sm:text-center">
            <p className="text-xs sm:text-sm text-neutral-400">Электромонтажные, строительные и инженерные работы</p>
          </div>
          <div className="sm:text-right">
            <p className="text-xs sm:text-sm text-neutral-400">ИНН 7702432413</p>
            <p className="text-xs sm:text-sm text-neutral-400">ОГРН 1187746525955</p>
          </div>
        </div>
        <div className="mt-6 pt-5 border-t border-neutral-800 text-center">
          <p className="text-[11px] sm:text-xs text-neutral-500">&copy; 2026 ООО &laquo;КРААС ИНЖИНИРИНГ&raquo;. Все права защищены. <span className="text-neutral-600">Developed by Skryd1X</span></p>
        </div>
      </div>
    </footer>
  );
}
