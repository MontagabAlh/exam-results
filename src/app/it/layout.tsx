import { Metadata } from "next";

export const metadata: Metadata = {
    title: " النتائج الإمتحانية - كلية الهندسة المعلوماتية",
    description: "النتائج الإمتحانية كلية الهندسة المعلوماتية",
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