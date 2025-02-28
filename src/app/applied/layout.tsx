import { Metadata } from "next";

export const metadata: Metadata = {
    title: " النتائج الإمتحانية - الكلية التطبيقية",
    description: "النتائج الإمتحانية الكلية التطبيقية",
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