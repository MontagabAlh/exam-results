import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { number1, nospy } = await req.json();
    if (!number1 || !nospy) {
      return NextResponse.json({ error: "❌ الرقم الجامعي مطلوب." }, { status: 400 });
    }

    const formData = new URLSearchParams();
    formData.append("nospy", nospy);
    formData.append("number1", number1);

    const response = await fetch("https://exam.homs-univ.edu.sy/exam-civil/re.php", {
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
