"use client";

export default function LanguageSelector({ onSelect }: { onSelect: (lang: string) => void }) {
  const langs = [
    { code: "es", name: "Spanish" },
    { code: "fr", name: "French" },
    { code: "de", name: "German" },
  ];

  return (
    <select
      className="border p-3 rounded-lg bg-gray-50 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
      onChange={(e) => onSelect(e.target.value)}
    >
      <option value="">Select language</option>
      {langs.map((l) => (
        <option key={l.code} value={l.code}>
          {l.name}
        </option>
      ))}
    </select>
  );
}
