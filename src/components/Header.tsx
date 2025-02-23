import Link from 'next/link'
import React from 'react'

export default function Header() {
    return (
        <header className="bg-gray-800 shadow-xl">
            <div className="container mx-auto px-4 py-6 flex items-center justify-between">
                <Link href={'/'} className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    نتائج الامتحانات
                </Link>
                <nav>
                    <Link
                        href="https://montagab.vercel.app/"
                        className="hover:text-cyan-400 transition-colors flex items-center gap-2 text-white"
                        target="_blank"
                        rel="noopener"
                    >
                        <span className="hidden sm:inline ">مطور بواسطة</span> Montagab
                    </Link>
                </nav>
            </div>
        </header>
    )
}
