"use client";

export default function TranslationResults({ results }: { results: { language: string; translation: string }[] }) {
  if (!results || results.length === 0) return null;

  return (
    <div className="mt-4 space-y-2">
      {results.map((r, i) => (
        <div key={i} className="p-2 border rounded bg-gray-50">
          <strong>{r.language}:</strong> {r.translation}
        </div>
      ))}
    </div>
  );
}
