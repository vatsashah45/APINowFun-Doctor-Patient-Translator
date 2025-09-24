"use client";

export default function TranslationResults({ results }: { results: { language: string; translation: string }[] }) {
  if (!results || results.length === 0) return null;

  return (
    <div className="mt-6 space-y-3">
      <h2 className="text-xl font-semibold text-gray-800">Translations</h2>
      {results.map((r, i) => (
        <div key={i} className="p-4 border rounded-lg bg-gray-50">
          <span className="font-medium text-gray-700">{r.language.toUpperCase()}:</span>{" "}
          <span className="text-gray-900">{r.translation}</span>
        </div>
      ))}
    </div>
  );
}
