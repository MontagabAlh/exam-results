import { Metadata } from "next";

export const metadata: Metadata = {
    title: " النتائج الإمتحانية - كلية الهندسة الميكانيكية و الكهربائية",
    description: "النتائج الإمتحانية كلية الهندسة الميكانيكية و الكهربائية",
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