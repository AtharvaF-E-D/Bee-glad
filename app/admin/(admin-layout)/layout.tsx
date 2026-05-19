import AdminNavbar from "@/components/admin/AdminNavbar";

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex flex-col h-screen">

            {/* Navbar */}
            <AdminNavbar />

            {/* Page Content */}
            <main className="p-6 bg-white flex-1 overflow-y-auto">
                {children}
            </main>

        </div>
    );
}