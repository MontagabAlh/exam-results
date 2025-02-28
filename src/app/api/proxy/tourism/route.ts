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

export async function POST(req: Request) {
  try {
    const { number1 : originalNumber, nospy } = await req.json();
    if (!originalNumber || !nospy) {
      return NextResponse.json({ error: "❌ الرقم الجامعي مطلوب." }, { status: 400 });
    }

    // تحويل الأرقام الهندية إلى غربية
    const number1 = convertHindiToWestern(originalNumber);

    const formData = new URLSearchParams();
    formData.append("nospy", nospy);
    formData.append("number1", number1);

    const response = await fetch("https://exam.homs-univ.edu.sy/exam-tourism/re.php", {
      method: "POST",
      body: formData,
    });
    
    

    const text = await response.text();
    return new NextResponse(text);
  } catch (error) {
        console.error("خطأ أثناء جلب البيانات:", error instanceof Error ? error.message : error);
    return NextResponse.json({ error: "❌ حدث خطأ أثناء جلب البيانات، حاول لاحقًا." }, { status: 500 });
  }
}

export const config = {
  runtime: "edge",
};
