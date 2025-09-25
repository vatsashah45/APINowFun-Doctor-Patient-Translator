"use client";

export default function Header() {
  return (
    <header className="flex items-center justify-between bg-blue-600 text-white px-6 py-4 rounded-t-2xl">
      <div className="flex items-center gap-2">
        <img src="/health-icon.svg" alt="Logo" className="w-6 h-6" />
        <h1 className="text-xl font-semibold">MediTranslate</h1>
      </div>
      <div className="text-sm">Dr. John Smith</div>
    </header>
  );
}
