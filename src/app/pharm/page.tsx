"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FiSearch, FiLoader, FiAlertTriangle } from "react-icons/fi";
import { IoIosArrowBack } from "react-icons/io";

interface Result {
  subject: string;
  practical: string;
  theoretical: string;
  final: number;
}

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [studentNumber, setStudentNumber] = useState("");
  const [studentName, setStudentName] = useState("");
  const [results, setResults] = useState<Result[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setMounted(true);
  }, []);

  const fetchResults = async () => {
    if (!studentNumber.trim()) {
      setError("الرجاء إدخال الرقم الجامعي");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/proxy/pharm", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ number1: studentNumber }),
      });

      if (!response.ok) throw new Error("Server Error");

      const text = await response.text();
      const parser = new DOMParser();
      const doc = parser.parseFromString(text, "text/html");

      // استخراج البيانات
      const studentNameElement = doc.querySelector("td[colspan='4']");
      const extractedName = studentNameElement?.textContent?.trim() || "غير معروف";
      setStudentName(extractedName);

      const rows = Array.from(doc.querySelectorAll("table tr")).slice(2);
      const extractedResults = rows.map(row => {
        const cells = Array.from(row.querySelectorAll("td"));
        return {
          subject: cells[0]?.textContent?.trim() || "",
          practical: cells[1]?.textContent?.trim() || "",
          theoretical: cells[2]?.textContent?.trim() || "",
          final: parseInt(cells[3]?.textContent?.trim() || "0", 10)
        };
      });

      setResults(extractedResults);
      if (extractedResults.length === 0) setError("لا توجد نتائج متاحة");
    } catch (err) {
      console.error(err);
      setError("حدث خطأ أثناء جلب النتائج، يرجى المحاولة لاحقًا");
    } finally {
      setLoading(false);
    }
  };

  if (!mounted) return null;

  return (
    <div className="bg-gray-900 text-gray-100 font-droid font-cairo relative">
    {/* الشريط العلوي */}
    <Link href={'/'} className="p-4 rounded-full bg-gradient-to-br from-gray-800 to-transparent absolute top-2 left-1">
      <IoIosArrowBack className="w-6 h-6 text-white"/>
    </Link>

    <main className="container mx-auto px-4 pt-16 pb-8 ">
        <h1 className="text-center text-lg font-bold mb-5">كلية الصيدلة - جامعة حمص </h1>
        <div className="max-w-3xl mx-auto bg-gray-800 rounded-2xl shadow-2xl p-6">
          {/* قسم البحث */}
          <div className="mb-8">
            <div className="relative">
              <div className="flex gap-4">
                <input
                  type="text"
                  value={studentNumber}
                  onChange={(e) => setStudentNumber(e.target.value)}
                  placeholder="الرقم الجامعي"
                  className="w-full bg-gray-700 rounded-lg px-6 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 placeholder-gray-400"
                  onKeyPress={(e) => e.key === 'Enter' && fetchResults()}
                />
                <button
                  onClick={fetchResults}
                  disabled={loading}
                  className={`px-8 rounded-lg flex items-center gap-2 transition-all ${loading
                    ? 'bg-gray-600 cursor-not-allowed'
                    : 'bg-cyan-600 hover:bg-cyan-700'
                    }`}
                >
                  {loading ? (
                    <FiLoader className="animate-spin" />
                  ) : (
                    <FiSearch className="text-xl" />
                  )}
                  <span className="hidden sm:inline">بحث</span>
                </button>
              </div>

              {error && (
                <div className="mt-4 p-3 bg-red-900/50 border border-red-400 rounded-lg flex items-center gap-2 text-red-200">
                  <FiAlertTriangle />
                  {error}
                </div>
              )}
            </div>
          </div>

          {/* نتائج الطالب */}
          {studentName && (
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4 text-cyan-400 text-center">
                {studentName}
              </h2>

              <div className="space-y-4">
                {results.map((result, index) => (
                  <div
                    key={index}
                    className="bg-gray-700/50 p-4 rounded-xl backdrop-blur-sm border border-gray-600/30 hover:border-cyan-500/30 transition-all"
                  >
                    <div className="flex flex-wrap-reverse justify-center items-center gap-4 w-full">
                      <div className="flex items-center gap-10   text-gray-300">
                        <div className={`text-center px-4 py-2 rounded-lg ${result.final >= 60
                          ? 'bg-green-900/50 text-green-300'
                          : 'bg-red-900/50 text-red-300'
                          }`}>
                          <span className="text-sm block mb-1">نهائي</span>
                          <span className="block font-bold">{result.final}</span>
                        </div>

                        <div className="text-center">
                          <span className="text-sm block mb-1">نظري</span>
                          <span className="block">{result.theoretical}</span>
                        </div>
                        <div className="text-center">
                          <span className="text-sm block mb-1">عملي</span>
                          <span className="block">{result.practical}</span>
                        </div>
                      </div>
                      <h3 className=" font-medium flex-1 text-end">
                        {result.subject}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      {/* تذييل الصفحة */}
      {/* <footer className="mt-12 pb-8 text-center text-gray-400">
        <p>كلية الهندسة المعلوماتية - جامعة حمص © {new Date().getFullYear()}</p>
      </footer> */}
    </div>
  );
}