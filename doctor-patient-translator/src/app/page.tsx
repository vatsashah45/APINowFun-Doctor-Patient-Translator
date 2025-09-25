"use client";

import { useState } from "react";
import TextInput from "./components/TextInput";
import LanguageSelector from "./components/LanguageSelector";
import TranslateButton from "./components/TranslateButton";
import TranslationResults from "./components/TranslationResults";
import VoiceRecorder from "./components/VoiceRecorder";
import Header from "./components/Header";
import PatientInfo from "./components/PatientInfo";
import DownloadButton from "./components/DownloadButton";

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
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <div className="bg-white shadow-xl rounded-2xl w-full max-w-5xl">
        {/* Header */}
        <Header />

        <div className="flex flex-col sm:flex-row gap-6 p-6">
          {/* Left: Patient Info */}
          <div className="sm:w-1/3">
            <PatientInfo />
          </div>

          {/* Right: Translator */}
          <div className="sm:w-2/3 space-y-4">
            <h1 className="text-2xl font-bold text-gray-900">
              Doctor - Patient Translator
            </h1>
            <p className="text-gray-500">
              Speak or type, then translate instantly into multiple languages.
            </p>

            <TextInput value={text} onChange={setText} />
            <VoiceRecorder onTranscript={(t) => setText((prev) => prev + " " + t)} />

            <div className="flex gap-3 items-center">
              <LanguageSelector onSelect={setLang} />
              <TranslateButton onClick={handleTranslate} loading={loading} />
            </div>

            <TranslationResults results={results} />
            <DownloadButton transcript={text} results={results} />
          </div>
        </div>
      </div>
    </div>
  );
}
