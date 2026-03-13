"use client";

import { getApplications } from "@/lib/appwrite/joinTeam";
import { useEffect, useState } from "react";

const ENDPOINT = process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT ?? "https://sgp.cloud.appwrite.io/v1";
const BUCKET_ID = process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID;
const PROJECT_ID = process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID;

type Props = {
    onRegisterRefresh: (fn: () => void) => void;
};

const Applications = ({ onRegisterRefresh }: Props) => {
    const [applications, setApplications] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    const fetchApplications = async () => {
        setLoading(true);
        try {
            const data = await getApplications();
            setApplications(data);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchApplications();
        onRegisterRefresh(fetchApplications);
    }, []);

    const getResumeUrl = (resumeId: string) =>
        `${ENDPOINT}/storage/buckets/${BUCKET_ID}/files/${resumeId}/view?project=${PROJECT_ID}`;

    return (
        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">

            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
                <div className="flex items-center gap-3">
                    <h2 className="text-sm font-bold text-slate-900">Applications</h2>
                    <span className="bg-slate-100 text-slate-600 text-xs font-bold px-2.5 py-1 rounded-full">
                        {applications.length}
                    </span>
                </div>
            </div>

            {loading ? (
                <div className="p-8 space-y-3">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="h-12 bg-slate-50 rounded-xl animate-pulse" />
                    ))}
                </div>
            ) : applications.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-16 text-slate-400">
                    <span className="text-4xl mb-3">📭</span>
                    <p className="text-sm font-medium">No applications yet</p>
                </div>
            ) : (
                <div className="overflow-x-auto">
                    <table className="min-w-full">
                        <thead>
                            <tr className="bg-slate-50 border-b border-slate-100">
                                {["Applicant", "Contact", "Location", "Role", "Experience", "Links", "Resume", "Applied"].map((h) => (
                                    <th key={h} className="px-5 py-3 text-left text-xs font-semibold text-slate-400 uppercase tracking-wider whitespace-nowrap">
                                        {h}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {applications.map((item) => (
                                <tr key={item.$id} className="hover:bg-slate-50 transition-colors">

                                    <td className="px-5 py-4 whitespace-nowrap">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-600 flex-shrink-0">
                                                {item.firstName?.[0]?.toUpperCase()}{item.lastName?.[0]?.toUpperCase()}
                                            </div>
                                            <div>
                                                <p className="text-sm font-semibold text-slate-900">
                                                    {item.firstName} {item.lastName}
                                                </p>
                                                <p className="text-xs text-slate-400">{item.email}</p>
                                            </div>
                                        </div>
                                    </td>

                                    <td className="px-5 py-4 whitespace-nowrap">
                                        <p className="text-sm text-slate-600">{item.phone || "—"}</p>
                                    </td>

                                    <td className="px-5 py-4 whitespace-nowrap">
                                        <p className="text-sm text-slate-600">{item.location || "—"}</p>
                                    </td>

                                    <td className="px-5 py-4 whitespace-nowrap">
                                        <span className="bg-slate-100 text-slate-700 text-xs font-medium px-2.5 py-1 rounded-full">
                                            {item.jobTitle || "—"}
                                        </span>
                                    </td>

                                    <td className="px-5 py-4 whitespace-nowrap">
                                        <p className="text-sm text-slate-600">
                                            {item.experience ? `${item.experience} yrs` : "—"}
                                        </p>
                                    </td>

                                    <td className="px-5 py-4 whitespace-nowrap">
                                        <div className="flex items-center gap-2">
                                            {item.linkedin ? (
                                                <a href={item.linkedin} target="_blank" rel="noopener noreferrer"
                                                    className="text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 px-2.5 py-1 rounded-lg transition-colors">
                                                    LinkedIn
                                                </a>
                                            ) : null}
                                            {item.portfolio ? (
                                                <a href={item.portfolio} target="_blank" rel="noopener noreferrer"
                                                    className="text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 px-2.5 py-1 rounded-lg transition-colors">
                                                    Portfolio
                                                </a>
                                            ) : null}
                                            {!item.linkedin && !item.portfolio && (
                                                <span className="text-slate-400 text-sm">—</span>
                                            )}
                                        </div>
                                    </td>

                                    <td className="px-5 py-4 whitespace-nowrap">
                                        {item.resumeId ? (
                                            <a
                                                href={getResumeUrl(item.resumeId)}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-xs font-semibold text-green-700 bg-green-50 hover:bg-green-100 px-2.5 py-1 rounded-lg transition-colors"
                                            >
                                                View PDF
                                            </a>
                                        ) : (
                                            <span className="text-slate-400 text-sm">—</span>
                                        )}
                                    </td>

                                    <td className="px-5 py-4 whitespace-nowrap">
                                        <p className="text-xs text-slate-400">
                                            {new Date(item.$createdAt).toLocaleDateString("en-US", {
                                                month: "short", day: "numeric", year: "numeric"
                                            })}
                                        </p>
                                    </td>

                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )
            }
        </div >
    );
};

export default Applications;