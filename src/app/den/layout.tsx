import { Metadata } from "next";

export const metadata: Metadata = {
    title: " النتائج الإمتحانية - كلية طب الأسنان",
    description: "النتائج الإمتحانية كلية طب الأسنان جامعة حمص",
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