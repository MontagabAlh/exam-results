import { Metadata } from "next";

export const metadata: Metadata = {
    title: " النتائج الإمتحانية - كلية العلوم",
    description: "النتائج الإمتحانية كلية العلوم جامعة حمص",
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