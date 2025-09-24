"use client";

import { useState } from "react";
import TextInput from "./components/TextInput";
import LanguageSelector from "./components/LanguageSelector";
import TranslateButton from "./components/TranslateButton";
import TranslationResults from "./components/TranslationResults";

export default function HomePage() {
  const [text, setText] = useState("");
  const [lang, setLang] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const handleTranslate = async () => {
    if (!text) return;
    setLoading(true);

    try {
      const res = await fetch("/api/translate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text, selectedLanguage: lang }),
      });

      const data = await res.json();
      setResults(data.translations || []);
    } catch (error) {
      console.error("Translation failed", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-start p-8">
      <h1 className="text-3xl font-bold mb-6">Doctor–Patient Translator</h1>

      <div className="w-full max-w-2xl space-y-4">
        <TextInput onChange={setText} />
        <LanguageSelector onSelect={setLang} />
        <TranslateButton onClick={handleTranslate} loading={loading} />
        <TranslationResults results={results} />
      </div>
    </main>
  );
}
