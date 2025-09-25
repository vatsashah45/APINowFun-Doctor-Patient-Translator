"use client";

const flags: Record<string, string> = {
  es: "🇪🇸",
  fr: "🇫🇷",
  de: "🇩🇪",
  en: "🇺🇸",
};

export default function TranslationResults({
  results,
}: {
  results: { language: string; translation: string }[];
}) {
  if (!results || results.length === 0) return null;

  return (
    <div className="mt-6 space-y-3">
      <h2 className="text-xl font-semibold text-gray-800">Translation Results</h2>
      {results.map((r, i) => (
        <div
          key={i}
          className="p-4 border rounded-lg bg-gray-50 shadow-sm flex items-center gap-3"
        >
          <span className="text-2xl">{flags[r.language] || "🌐"}</span>
          <div>
            <span className="block font-medium text-gray-700">
              {r.language.toUpperCase()}
            </span>
            <span className="text-gray-900">{r.translation}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
