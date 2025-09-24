"use client";
import { useState } from "react";

export default function TextInput({ onChange }: { onChange: (text: string) => void }) {
  const [value, setValue] = useState("");

  return (
    <textarea
      className="w-full p-3 border rounded"
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
