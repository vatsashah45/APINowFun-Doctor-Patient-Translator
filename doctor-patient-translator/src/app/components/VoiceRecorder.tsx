"use client";

import { useState, useRef } from "react";

export default function VoiceRecorder({ onTranscript }: { onTranscript: (text: string) => void }) {
  const [listening, setListening] = useState(false);
  const recognitionRef = useRef<SpeechRecognition | null>(null);

  const startListening = () => {
    if (!("webkitSpeechRecognition" in window)) {
      alert("Speech recognition not supported in this browser. Try Chrome.");
      return;
    }

    const SpeechRecognition = (window as any).webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.continuous = true;
    recognition.interimResults = true;

    recognition.onresult = (event: SpeechRecognitionEvent) => {
      let finalTranscript = "";

      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcript = event.results[i][0].transcript;
        if (event.results[i].isFinal) {
          finalTranscript += transcript + " ";
        }
      }

      if (finalTranscript) {
        onTranscript(finalTranscript.trim());
      }
    };

    recognition.onend = () => setListening(false);

    recognition.start();
    recognitionRef.current = recognition;
    setListening(true);
  };

  const stopListening = () => {
    recognitionRef.current?.stop();
    setListening(false);
  };

  return (
    <div className="flex gap-3">
      {!listening ? (
        <button
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
          onClick={startListening}
        >
          🎤 Start Recording
        </button>
      ) : (
        <button
          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
          onClick={stopListening}
        >
          ⏹ Stop Recording
        </button>
      )}
    </div>
  );
}
