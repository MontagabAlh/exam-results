"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

interface Result {
  subject: string;
  practical: string;
  theoretical: string;
  final: number;
}

export default function Home() {
  // استدعاء جميع الـ Hooks بشكل ثابت
  const [mounted, setMounted] = useState(false);
  const [studentNumber, setStudentNumber] = useState("");
  const [studentName, setStudentName] = useState("");
  const [results, setResults] = useState<Result[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const fetchResults = async () => {
    if (!studentNumber) {
      alert("يرجى إدخال الرقم الجامعي");
      return;
    }
    setLoading(true);
    try {
      const response = await fetch("/api/proxy", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ number1: studentNumber }),
      });
      const text = await response.text();
      const parser = new DOMParser();
      const doc = parser.parseFromString(text, "text/html");

      // استخراج اسم الطالب
      const studentNameElement = doc.querySelector("td[colspan='4']");
      setStudentName(
        studentNameElement instanceof HTMLElement
          ? studentNameElement.innerText
          : "غير معروف"
      );

      // استخراج النتائج
      const rows = doc.querySelectorAll("table tr");
      const extractedResults: Result[] = [];
      for (let i = 2; i < rows.length; i++) {
        const cells = rows[i].querySelectorAll("td");
        if (cells.length === 4) {
          extractedResults.push({
            subject: cells[0].innerText,
            practical: cells[1].innerText,
            theoretical: cells[2].innerText,
            final: parseInt(cells[3].innerText.trim(), 10),
          });
        }
      }
      setResults(extractedResults);
    } catch (error) {
      console.error("خطأ في جلب البيانات:", error);
      alert("❌ حدث خطأ أثناء جلب النتائج، حاول مرة أخرى.");
    }
    setLoading(false);
  };

  // استخدام شرط العرض داخل الـ JSX فقط (بعد استدعاء كل الـ Hooks)
  if (!mounted) {
    return null;
  }

  return (
    <div className="font-cairo min-h-screen bg-gradient-to-br from-black via-purple-900 to-blue-900 text-white flex flex-col items-center p-6">
      {/* عنوان متحرك بخلفية تدرجية */}
      <h1 className="text-4xl font-extrabold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-yellow-500 animate-pulse">
        النتائج الامتحانية 
      </h1>
      <p className="text-center text-xl text-white pb-5">كلية الطب البشري - جامعة حمص</p>

      <div className="bg-black bg-opacity-60 backdrop-blur-lg p-8 rounded-3xl shadow-2xl w-full max-w-3xl">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <input
            type="text"
            className="w-full p-4 rounded-lg text-gray-800 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
            placeholder="أدخل الرقم الجامعي"
            value={studentNumber}
            onChange={(e) => setStudentNumber(e.target.value)}
          />
          <button
            onClick={fetchResults}
            disabled={loading}
            className="bg-gradient-to-r from-green-400 to-blue-500 px-6 py-4 rounded-lg font-bold hover:from-green-500 hover:to-blue-600 transition disabled:opacity-50"
          >
            {loading ? "جاري البحث..." : "جلب النتائج"}
          </button>
        </div>

        {studentName && (
          <div className="bg-blue-600 bg-opacity-90 p-4 rounded-lg font-bold text-xl text-center mb-6">
            {studentName}
          </div>
        )}

        {results.length > 0 && (
          <div className="overflow-x-auto">
            <table className="w-full text-center border-separate border-spacing-2">
              <thead>
                <tr>
                  <th className="p-4 bg-gray-800 rounded-tl-2xl">اسم المادة</th>
                  <th className="p-4 bg-gray-800">درجة العملي</th>
                  <th className="p-4 bg-gray-800">درجة النظري</th>
                  <th className="p-4 bg-gray-800 rounded-tr-2xl">الدرجة النهائية</th>
                </tr>
              </thead>
              <tbody>
                {results.map((result, index) => (
                  <tr key={index} className="hover:bg-gray-700 transition">
                    <td className="p-4 border border-gray-700">{result.subject}</td>
                    <td className="p-4 border border-gray-700">{result.practical}</td>
                    <td className="p-4 border border-gray-700">{result.theoretical}</td>
                    <td
                      className={`p-4 border border-gray-700 ${
                        result.final >= 60 ? "bg-green-600" : "bg-red-600"
                      }`}
                    >
                      {result.final}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <footer className="mt-8 text-lg text-white">
        <Link href="https://montagab.vercel.app/">Developed with love by <span className="underline underline-offset-2">Montagab</span></Link>
      </footer>
    </div>
  );
}
