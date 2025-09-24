"use client";

export default function TranslateButton({ onClick, loading }: { onClick: () => void; loading: boolean }) {
  return (
    <button
      className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition disabled:opacity-50"
      onClick={onClick}
      disabled={loading}
    >
      {loading ? "Translating..." : "Translate"}
    </button>
  );
}
