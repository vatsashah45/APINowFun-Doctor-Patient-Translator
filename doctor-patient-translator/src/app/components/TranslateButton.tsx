"use client";

export default function TranslateButton({ onClick, loading }: { onClick: () => void; loading: boolean }) {
  return (
    <button
      className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
      onClick={onClick}
      disabled={loading}
    >
      {loading ? "Translating..." : "Translate"}
    </button>
  );
}
