"use client";
import { useState } from "react";

export default function TextInput({ onChange }: { onChange: (text: string) => void }) {
  const [value, setValue] = useState("");

  return (
    <textarea
      className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none text-gray-800"
      rows={5}
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
        onChange(e.target.value);
      }}
      placeholder="Enter or record text..."
    />
  );
}
