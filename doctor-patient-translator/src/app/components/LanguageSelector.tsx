"use client";

export default function LanguageSelector({ onSelect }: { onSelect: (lang: string) => void }) {
  const langs = [
    { code: "es", name: "Spanish" },
    { code: "fr", name: "French" },
    { code: "de", name: "German" },
  ];

  return (
    <select
      className="border p-2 rounded"
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
