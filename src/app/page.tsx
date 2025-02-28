
import Link from "next/link";
import { BsBuildingsFill } from "react-icons/bs";
import { FaTooth } from "react-icons/fa";
import { FaGears, FaMoneyBillTrendUp, FaOilWell, FaSchoolFlag, FaUserDoctor } from "react-icons/fa6";
import { GiCrane, GiFarmer } from "react-icons/gi";
import { GoLaw } from "react-icons/go";
import { IoMusicalNotes } from "react-icons/io5";
import { LiaHotelSolid } from "react-icons/lia";
import { LuCodeXml } from "react-icons/lu";
import { MdHealthAndSafety, MdMedication, MdScience, MdSettingsApplications } from "react-icons/md";


export default function HomePage() {
    const faculties = [
        {
            name: "كلية الطب البشري",
            path: "/med",
            icon: <FaUserDoctor className="w-8 h-8 text-white" />,
            color: "from-blue-500 to-cyan-500",
            hover: "hover:shadow-blue-500/20"
        },
        {
            name: "كلية طب الأسنان",
            path: "/den",
            icon: <FaTooth className="w-8 h-8 text-white" />,
            color: "from-blue-500 to-cyan-500",
            hover: "hover:shadow-blue-500/20"
        },
        {
            name: "كلية الصيدلة",
            path: "/pharm",
            icon: <MdMedication className="w-8 h-8 text-white" />,
            color: "from-blue-500 to-cyan-500",
            hover: "hover:shadow-blue-500/20"
        },
        {
            name: "كلية الهندسة المعلوماتية",
            path: "/it",
            icon: <LuCodeXml className="w-8 h-8 text-white" />,
            color: "from-blue-500 to-cyan-500",
            hover: "hover:shadow-blue-500/20"
        },
        {
            name: "كلية الهندسة المدنية",
            path: "/civil",
            icon: <GiCrane className="w-8 h-8 text-white" />,
            color: "from-blue-500 to-cyan-500",
            hover: "hover:shadow-blue-500/20"
        },
        {
            name: "كلية الهندسة المعمارية",
            path: "/archi",
            icon: <BsBuildingsFill className="w-8 h-8 text-white" />,
            color: "from-blue-500 to-cyan-500",
            hover: "hover:shadow-blue-500/20"
        },
        {
            name: "كلية الهندسة الكيميائية والبترولية",
            path: "/petro",
            icon: <FaOilWell className="w-8 h-8 text-white" />,
            color: "from-blue-500 to-cyan-500",
            hover: "hover:shadow-blue-500/20"
        },
        {
            name: "كلية الهندسة الميكانيكية و الكهربائية",
            path: "/mec",
            icon: <FaGears className="w-8 h-8 text-white" />,
            color: "from-blue-500 to-cyan-500",
            hover: "hover:shadow-blue-500/20"
        },
        {
            name: "كلية الهندسة الزراعية",
            path: "/agri",
            icon: <GiFarmer className="w-8 h-8 text-white" />,
            color: "from-blue-500 to-cyan-500",
            hover: "hover:shadow-blue-500/20"
        },
        {
            name: "كلية لااقتصاد",
            path: "/economy",
            icon: <FaMoneyBillTrendUp className="w-8 h-8 text-white" />,
            color: "from-blue-500 to-cyan-500",
            hover: "hover:shadow-blue-500/20"
        },
        {
            name: "كلية الحقوق",
            path: "/law",
            icon: <GoLaw className="w-8 h-8 text-white" />,
            color: "from-blue-500 to-cyan-500",
            hover: "hover:shadow-blue-500/20"
        },
        {
            name: "كلية السياحة",
            path: "/tourism",
            icon: <LiaHotelSolid className="w-8 h-8 text-white" />,
            color: "from-blue-500 to-cyan-500",
            hover: "hover:shadow-blue-500/20"
        },
        {
            name: "كلية التربية الثانية",
            path: "/education2",
            icon: <FaSchoolFlag className="w-8 h-8 text-white" />,
            color: "from-blue-500 to-cyan-500",
            hover: "hover:shadow-blue-500/20"
        },
        {
            name: "كلية العلوم",
            path: "/science",
            icon: <MdScience className="w-8 h-8 text-white" />,
            color: "from-blue-500 to-cyan-500",
            hover: "hover:shadow-blue-500/20"
        },
        {
            name: "كلية العلوم الثانية",
            path: "/science2",
            icon: <MdScience className="w-8 h-8 text-white" />,
            color: "from-blue-500 to-cyan-500",
            hover: "hover:shadow-blue-500/20"
        },
        {
            name: "كلية العلوم الصحية",
            path: "/healthy",
            icon: <MdHealthAndSafety className="w-8 h-8 text-white" />,
            color: "from-blue-500 to-cyan-500",
            hover: "hover:shadow-blue-500/20"
        },
        {
            name: "كلية التربية الموسيقية",
            path: "/music",
            icon: <IoMusicalNotes className="w-8 h-8 text-white" />,
            color: "from-blue-500 to-cyan-500",
            hover: "hover:shadow-blue-500/20"
        },
        {
            name: "الكلية التطبيقية",
            path: "/applied",
            icon: <MdSettingsApplications className="w-8 h-8 text-white" />,
            color: "from-blue-500 to-cyan-500",
            hover: "hover:shadow-blue-500/20"
        },
    ];

    return (
        <div className="h-full bg-gray-900 flex flex-col ">
            {/* Header */}
            <header className="pt-5 bg-gradient-to-b from-gray-800 to-transparent">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent mb-4">
                        نظام النتائج الجامعية
                    </h1>
                    <p className="text-lg text-gray-300">جامعة حمص - 2025/2024</p>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-1 flex items-center justify-center my-4  px-4">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {faculties.map((faculty, index) => (
                            <Link
                                key={index}
                                href={faculty.path}
                                className={`group relative rounded-2xl overflow-hidden transition-all duration-300 ${faculty.hover} hover:-translate-y-2`}
                            >
                                <div className={`bg-gradient-to-br ${faculty.color} p-1 h-full`}>
                                    <div className="flex flex-col items-center justify-center bg-gray-800 h-full p-8 rounded-xl gap-4 transition-colors group-hover:bg-gray-700/80">
                                        <div className="p-4 rounded-full bg-gradient-to-br from-black/20 to-transparent">
                                            {faculty.icon}
                                        </div>
                                        <h2 className="text-2xl font-semibold text-center text-white">{faculty.name}</h2>
                                        <div className="mt-4 px-6 py-2 rounded-full bg-gray-700/50 group-hover:bg-gray-600/80 transition-colors text-sm text-white">
                                            عرض النتائج →
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
}