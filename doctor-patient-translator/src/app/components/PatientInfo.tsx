"use client";

export default function PatientInfo() {
  return (
    <aside className="bg-gray-50 border rounded-xl p-4 w-full sm:w-64 shadow-sm">
      <h2 className="text-lg font-semibold mb-2 text-gray-800">Patient Info</h2>
      <ul className="space-y-1 text-sm text-gray-700">
        <li><strong>Name:</strong> Jane Doe</li>
        <li><strong>Age:</strong> 42</li>
        <li><strong>ID:</strong> #123456</li>
        <li><strong>Notes:</strong> Diabetes, follow-up check</li>
      </ul>
    </aside>
  );
}
