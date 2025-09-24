"use client";

export default function TextInput({
  value,
  onChange,
}: {
  value: string;
  onChange: (text: string) => void;
}) {
  return (
    <textarea
      className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none text-gray-800"
      rows={5}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Enter or record text..."
    />
  );
}
