import { NextResponse } from "next/server";

// دالة لتحويل الأرقام الهندية إلى غربية
function convertHindiToWestern(numberStr: string): string {
  const hindiToWesternMap: { [key: string]: string } = {
    '٠': '0',
    '١': '1',
    '٢': '2',
    '٣': '3',
    '٤': '4',
    '٥': '5',
    '٦': '6',
    '٧': '7',
    '٨': '8',
    '٩': '9',
  };

  return numberStr.replace(/[٠-٩]/g, (match) => hindiToWesternMap[match] || match);
}

// دالة لإرسال طلبين متزامنين وأخذ أول استجابة
async function fetchWithDualRequests(url: string, options: RequestInit, maxRetries = 3, delay = 3000): Promise<Response> {
  let attempt = 0;

  while (attempt < maxRetries) {
    try {
      console.log(`🚀 المحاولة رقم ${attempt + 1}: إرسال طلبين متوازيين...`);

      // إرسال طلبين متزامنين
      const [response] = await Promise.race([
        Promise.all([
          fetch(url, options),
          fetch(url, options),
        ])
      ]);

      if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
      return response;
    } catch (error) {
      console.error(`⚠️ المحاولة رقم ${attempt + 1} فشلت:`, error instanceof Error ? error.message : error);
      attempt++;
      if (attempt < maxRetries) {
        console.log(`⏳ إعادة المحاولة بعد ${delay / 1000} ثواني...`);
        await new Promise((resolve) => setTimeout(resolve, delay)); // تأخير قبل إعادة المحاولة
      }
    }
  }

  throw new Error("❌ فشل في جلب البيانات بعد عدة محاولات.");
}

export async function POST(req: Request) {
  try {
    const { number1: originalNumber, nospy } = await req.json();
    
    if (!originalNumber || !nospy) {
      return NextResponse.json({ error: "❌ الرقم الجامعي مطلوب." }, { status: 400 });
    }

    // تحويل الأرقام الهندية إلى غربية
    const number1 = convertHindiToWestern(originalNumber);

    const formData = new URLSearchParams();
    formData.append("nospy", nospy);
    formData.append("number1", number1);

    // استدعاء `fetchWithDualRequests` لإرسال طلبين معًا
    const response = await fetchWithDualRequests("https://exam.homs-univ.edu.sy/exam-petro/re.php", {
      method: "POST",
      body: formData,
    });

    const text = await response.text();
    return new NextResponse(text);
  } catch (error) {
    console.error("❌ خطأ أثناء جلب البيانات:", error instanceof Error ? error.message : error);
    return NextResponse.json({ error: "❌ حدث خطأ أثناء جلب البيانات، حاول لاحقًا." }, { status: 500 });
  }
}

export const config = {
  runtime: "edge",
};
