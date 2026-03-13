"use client";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";

const menu = [
    { name: "Dashboard", path: "/admin/dashboard" },
    { name: "Resources", path: "/admin/resources" },
    { name: "Smart Solution", path: "/admin/solutions" },
    { name: "Career", path: "/admin/jobs" },
    { name: "Join Our Team", path: "/admin/joinTeam" },
];

export default function AdminNavbar() {
    const router = useRouter();
    const pathname = usePathname();

    const handleLogout = () => {
        localStorage.removeItem("isAdmin");
        localStorage.removeItem("cookieFallback");
        router.push("/admin/login");
    };

    return (
        <div className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6">

            <div className="flex items-center gap-8">
                <h2 className="text-lg font-bold text-slate-900">Super Bee</h2>

                <nav className="flex items-center h-16">
                    {menu.map((item) => {
                        const isActive = pathname === item.path;
                        return (
                            <Link
                                key={item.name}
                                href={item.path}
                                className={`relative flex items-center h-full px-4 text-sm font-medium transition-colors ${isActive
                                    ? "text-slate-900"
                                    : "text-slate-500 hover:text-slate-800"
                                    }`}
                            >
                                {item.name}
                                {/* Active underline */}
                                {isActive && (
                                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-slate-900 rounded-full" />
                                )}
                            </Link>
                        );
                    })}
                </nav>
            </div>

            <button
                onClick={handleLogout}
                className="text-black underline cursor-pointer text-md font-medium hover:text-gray-700"
            >
                Logout
            </button>
        </div>
    );
}