"use client";

export default function DownloadButton({
  transcript,
  results,
}: {
  transcript: string;
  results: any[];
}) {
  const handleDownload = () => {
    let content = "Doctor–Patient Translator Session\n\n";
    content += "Transcript:\n";
    content += transcript + "\n\n";
    content += "Translations:\n";

    results?.forEach((r) => {
      if (r?.language && r?.translation) {
        content += `${r.language.toUpperCase()}: ${r.translation}\n`;
      }
    });

    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "translation-session.txt";
    link.click();

    URL.revokeObjectURL(url);
  };

  return (
    <button
      onClick={handleDownload}
      disabled={!transcript && results.length === 0}
      className="bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded-lg transition disabled:opacity-50"
    >
      Download Transcript
    </button>
  );
}
