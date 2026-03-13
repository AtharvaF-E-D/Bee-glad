"use client";

import CreateJob from "@/components/admin/jobs/createJobs";
import JobsList from "@/components/admin/jobs/JobsList";
import { useState } from "react";

const Page = () => {
    const [showForm, setShowForm] = useState(false);
    const [refresh, setRefresh] = useState(false);

    const handleJobCreated = () => {
        setRefresh(!refresh);
        setShowForm(false);
    };

    return (
        <div className="min-h-screen bg-white p-8">
            <div className="max-w-7xl mx-auto">

                <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                        <h1 className="text-2xl font-bold text-slate-900">Jobs</h1>
                    </div>
                    <button
                        onClick={() => setShowForm(!showForm)}
                        className="bg-slate-900 hover:bg-slate-700 text-white text-sm font-semibold px-4 py-2.5 rounded-xl transition-all cursor-pointer"
                    >
                        {showForm ? "✕ Cancel" : "+ Create Job"}
                    </button>
                </div>

                {showForm && (
                    <div className="mb-8">
                        <CreateJob onJobCreated={handleJobCreated} />
                    </div>
                )}

                <JobsList refresh={refresh} />
            </div>
        </div>
    );
};

export default Page;