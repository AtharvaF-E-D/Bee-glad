"use client";

import { useEffect, useState } from "react";
import { getJobs } from "@/lib/appwrite/jobs";

type Job = {
    $id: string;
    title: string;
    type: string;
    workMode?: string;
    experience?: string;
    focus?: string;
    published?: boolean;
};

const JobsList = ({ refresh }: { refresh: boolean }) => {
    const [jobs, setJobs] = useState<Job[]>([]);

    const fetchJobs = async () => {
        const data = await getJobs();
        setJobs(data);
    };

    useEffect(() => {
        fetchJobs();
    }, [refresh]);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {jobs.map((job) => (
                <div
                    key={job.$id}
                    className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow relative"
                >
                    {/* Published badge */}
                    {job.published !== undefined && (
                        <span className={`absolute top-4 right-4 text-xs font-semibold px-2.5 py-1 rounded-full ${job.published
                                ? "bg-green-100 text-green-600"
                                : "bg-slate-100 text-slate-500"
                            }`}>
                            {job.published ? "Published" : "Draft"}
                        </span>
                    )}

                    {/* Title */}
                    <h3 className="text-slate-900 text-xl font-semibold mb-3 pr-24">
                        {job.title}
                    </h3>

                    {/* Badges */}
                    <div className="flex flex-wrap gap-2 mb-4">
                        {job.type && (
                            <span className="bg-slate-100 text-slate-700 text-xs font-medium px-3 py-1 rounded-full">
                                {job.type}
                            </span>
                        )}
                        {job.workMode && (
                            <span className="bg-slate-100 text-slate-700 text-xs font-medium px-3 py-1 rounded-full">
                                {job.workMode}
                            </span>
                        )}
                    </div>

                    {/* Details */}
                    <div className="text-slate-500 text-sm space-y-1">
                        {job.focus && <p>Focus: {job.focus}</p>}
                        {job.experience && <p>Experience: {job.experience}</p>}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default JobsList;