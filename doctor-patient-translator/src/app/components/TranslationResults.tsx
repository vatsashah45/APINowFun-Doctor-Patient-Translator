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
  results: any[];
}) {
  if (!results || results.length === 0) return null;

  return (
    <div className="mt-6 space-y-3">
      <h2 className="text-xl font-semibold text-gray-800">Translation Results</h2>
      {results.map((r, i) => {
        const lang = r?.language || r?.lang || "raw";
        const translation = r?.translation || r?.text || (typeof r === "string" ? r : JSON.stringify(r));

        return (
          <div
            key={i}
            className="p-4 border rounded-lg bg-gray-50 shadow-sm flex items-center gap-3"
          >
            <span className="text-2xl">{flags[lang] || "🌐"}</span>
            <div>
              <span className="block font-medium text-gray-700">
                {lang.toUpperCase?.() || "N/A"}
              </span>
              <span className="text-gray-900">{translation}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
