"use client";

import Applications from "@/components/admin/joinTeam/Applications";
import TeamJoinForm from "@/components/admin/joinTeam/TeamJoinForm";
import { useState, useRef } from "react";

const Page = () => {
    const [showForm, setShowForm] = useState(false);
    const refreshRef = useRef<() => void>(() => { });

    const handleSuccess = () => {
        setShowForm(false);
        refreshRef.current();
    };

    return (
        <div className="min-h-screen bg-white p-8">
            <div className="max-w-7xl mx-auto">

                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h1 className="text-2xl font-bold text-slate-900">Join Team</h1>
                        <p className="text-slate-400 text-sm mt-1">Manage job applications</p>
                    </div>
                    {/* <button
                        onClick={() => setShowForm((v) => !v)}
                        className="bg-slate-900 hover:bg-slate-700 text-white text-sm font-semibold px-4 py-2.5 rounded-xl transition-all cursor-pointer"
                    >
                        {showForm ? "✕ Cancel" : "+ New Application"}
                    </button> */}
                </div>

                {showForm && (
                    <div className="mb-8">
                        <TeamJoinForm onSuccess={handleSuccess} />
                    </div>
                )}

                <Applications onRegisterRefresh={(fn) => (refreshRef.current = fn)} />
            </div>
        </div>
    );
};

export default Page;