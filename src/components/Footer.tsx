import Link from 'next/link'
import React from 'react'

export default function Footer() {
    return (
        <footer className="bg-gray-800 py-6">
            <div className="container mx-auto px-4 text-center text-gray-400">
                <p>
                    طور بواسطة{" "}
                    <Link
                        href="https://montagab.vercel.app/"
                        className="text-cyan-400 hover:text-cyan-300 transition-colors"
                        target="_blank"
                    >
                        Montagab
                    </Link>
                </p>
                <p className="mt-2 text-sm">هذا المشروع هو عمل طلابي لا يهدف إلى الربح وغير تابع لأي منظمة أو جهة رسمية كانت أم غير رسمية</p>
                <p className="mt-2  text-cyan-400 text-lg">انتظروا التحديثات القادمة 🤩</p>
            </div>
        </footer>
    )
}
