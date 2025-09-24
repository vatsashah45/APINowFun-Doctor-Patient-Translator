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
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-xl rounded-2xl w-full max-w-3xl p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2 text-center">
          Doctor–Patient Translator
        </h1>
        <p className="text-gray-500 mb-6 text-center">
          Break language barriers in healthcare with real-time translation.
        </p>

        <div className="space-y-4">
          <TextInput onChange={setText} />
          <div className="flex gap-3 items-center">
            <LanguageSelector onSelect={setLang} />
            <TranslateButton onClick={handleTranslate} loading={loading} />
          </div>
        </div>

        <TranslationResults results={results} />
      </div>
    </div>
  );
}
