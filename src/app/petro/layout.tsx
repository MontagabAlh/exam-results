import { Metadata } from "next";

export const metadata: Metadata = {
    title: " النتائج الإمتحانية - كلية الهندسة الكيميائية والبترولية",
    description: "النتائج الإمتحانية كلية الهندسة الكيميائية والبترولية",
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