import { Metadata } from "next";

export const metadata: Metadata = {
    title: " النتائج الإمتحانية - كلية الهندسة المدنية",
    description: "النتائج الإمتحانية كلية الهندسة المدنية جامعة حمص",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            {children}
        </>
    )
}