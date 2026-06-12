export default function Preloader() {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-white transition-opacity duration-300"
      role="status"
      aria-live="polite"
      aria-label="Загрузка сайта"
    >
      <div className="flex flex-col items-center gap-3">
        <div className="h-10 w-10 rounded-full border-2 border-neutral-200 border-t-primary-600 preloader-spinner" />
        <p className="text-xs font-semibold tracking-wide text-neutral-500">КРААС ИНЖИНИРИНГ</p>
      </div>
    </div>
  );
}
