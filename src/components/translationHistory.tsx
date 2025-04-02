/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default function TranslationHistory() {
  const { data: session } = useSession();
  const [history, setHistory] = useState([]);

  useEffect(() => {
    if (session?.user) {
      fetch("/api/history")
        .then((res) => res.json())
        .then((data) => setHistory(data));
    }
  }, [session]);

  if (!session) {
    return null;
  }

  return (
    <div className="mt-4">
      <h2 className="text-xl font-semibold mb-4">Translation History</h2>
      <div className="space-y-4">
        {history.map((item: any) => (
          <div key={item._id} className="border p-4 rounded-lg">
            <div className="flex justify-between text-sm text-gray-500">
              <span>
                {item.sourceLanguage} → {item.targetLanguage}
              </span>
              <span>{new Date(item.timestamp).toLocaleDateString()}</span>
            </div>
            <p className="mt-2">{item.sourceText}</p>
            <p className="mt-2 text-blue-600">{item.translatedText}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
