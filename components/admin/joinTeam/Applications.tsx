"use client";

import {
    getJobApplication,
    updateJobApplication,
    deleteJobApplication,
} from "@/lib/services/admin/jobApplication.service";

import { Trash2 } from "lucide-react";

import { useEffect, useState } from "react";

type Props = {
    onRegisterRefresh: (fn: () => void) => void;
};

type Application = {
    _id: string;

    status: string;

    firstName: string;
    lastName: string;

    email: string;

    phoneNumber: string;

    currentLocation: string;

    linkedinProfile: string;

    position: string;

    yearsOfExperience: string;

    resume: string;

    createdAt: string;

    jobId: {
        _id: string;
        title: string;
        jobType: string;
        workMode: string;
        focus: string;
        experience: string;
    };
};

const Applications = ({ onRegisterRefresh }: Props) => {

    const [applications, setApplications] = useState<Application[]>([]);

    const [loading, setLoading] = useState(true);

    // FETCH APPLICATIONS
    const fetchApplications = async () => {

        setLoading(true);

        try {

            const response = await getJobApplication();

            console.log("Applications response:", response);

            if (response?.success) {
                setApplications(response.data || []);
            }

        } catch (error) {

            console.log("Fetch applications error:", error);

        } finally {

            setLoading(false);
        }
    };

    useEffect(() => {

        fetchApplications();

        onRegisterRefresh(fetchApplications);

    }, []);

    // UPDATE STATUS
    const handleStatusChange = async (
        id: string,
        status: string
    ) => {

        try {

            const payload = {
                status: status,
            };

            console.log("Update payload:", payload);

            const response = await updateJobApplication(
                id,
                payload
            );

            console.log("Update response:", response);

            if (response?.success) {
                fetchApplications();
            }

        } catch (error) {

            console.log("Status update error:", error);
        }
    };

    // DELETE APPLICATION
    const handleDelete = async (id: string) => {

        const confirmDelete = confirm(
            "Are you sure you want to delete this application?"
        );

        if (!confirmDelete) return;

        try {

            const response = await deleteJobApplication(id);

            console.log("Delete response:", response);

            if (response?.success) {
                fetchApplications();
            }

        } catch (error) {

            console.log("Delete error:", error);
        }
    };

    return (
        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">

            {/* HEADER */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">

                <div className="flex items-center gap-3">

                    <h2 className="text-sm font-bold text-slate-900">
                        Applications
                    </h2>

                    <span className="bg-slate-100 text-slate-600 text-xs font-bold px-2.5 py-1 rounded-full">
                        {applications.length}
                    </span>

                </div>

            </div>

            {/* LOADING */}
            {loading ? (

                <div className="p-8 space-y-3">

                    {[1, 2, 3].map((i) => (
                        <div
                            key={i}
                            className="h-12 bg-slate-50 rounded-xl animate-pulse"
                        />
                    ))}

                </div>

            ) : applications.length === 0 ? (

                <div className="flex flex-col items-center justify-center py-16 text-slate-400">

                    <span className="text-4xl mb-3">
                        📭
                    </span>

                    <p className="text-sm font-medium">
                        No applications yet
                    </p>

                </div>

            ) : (

                <div className="overflow-x-auto">

                    <table className="w-full">

                        <thead>

                            <tr className="bg-slate-50 border-b border-slate-100">

                                {[
                                    "Applicant",
                                    "Contact",
                                    "Location",
                                    "Position",
                                    "Experience",
                                    "Job Details",
                                    "Status",
                                    "Links",
                                    "Resume",
                                    "Applied",
                                    "Action",
                                ].map((h) => (

                                    <th
                                        key={h}
                                        className="px-4 py-3 text-left text-xs font-semibold text-slate-400 uppercase tracking-wider whitespace-nowrap"
                                    >
                                        {h}
                                    </th>

                                ))}

                            </tr>

                        </thead>

                        <tbody className="divide-y divide-slate-100">

                            {applications.map((item) => (

                                <tr
                                    key={item._id}
                                    className="hover:bg-slate-50 transition-colors"
                                >

                                    {/* APPLICANT */}
                                    <td className="px-4 py-4 whitespace-nowrap">

                                        <div className="flex items-center gap-3">

                                            <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-600 flex-shrink-0">

                                                {item.firstName?.[0]?.toUpperCase()}
                                                {item.lastName?.[0]?.toUpperCase()}

                                            </div>

                                            <div>

                                                <p className="text-sm font-semibold text-slate-900">

                                                    {item.firstName} {item.lastName}

                                                </p>

                                                <p className="text-xs text-slate-400">
                                                    {item.email}
                                                </p>

                                            </div>

                                        </div>

                                    </td>

                                    {/* CONTACT */}
                                    <td className="px-4 py-4 whitespace-nowrap">

                                        <p className="text-sm text-slate-600">
                                            {item.phoneNumber || "—"}
                                        </p>

                                    </td>

                                    {/* LOCATION */}
                                    <td className="px-4 py-4 whitespace-nowrap">

                                        <p className="text-sm text-slate-600">
                                            {item.currentLocation || "—"}
                                        </p>

                                    </td>

                                    {/* POSITION */}
                                    <td className="px-4 py-4 whitespace-nowrap">

                                        <span className="bg-slate-100 text-slate-700 text-xs font-medium px-2.5 py-1 rounded-full">

                                            {item.position || "—"}

                                        </span>

                                    </td>

                                    {/* EXPERIENCE */}
                                    <td className="px-4 py-4 whitespace-nowrap">

                                        <p className="text-sm text-slate-600">

                                            {item.yearsOfExperience || "—"}

                                        </p>

                                    </td>

                                    {/* JOB DETAILS */}
                                    <td className="px-4 py-4">

                                        <div className="space-y-1">

                                            <p className="text-sm font-medium text-slate-800">
                                                {item.jobId?.title}
                                            </p>

                                            <p className="text-xs text-slate-500">
                                                {item.jobId?.jobType}
                                            </p>

                                            <p className="text-xs text-slate-500">
                                                {item.jobId?.workMode}
                                            </p>

                                        </div>

                                    </td>

                                    {/* STATUS */}
                                    <td className="px-4 py-4 whitespace-nowrap">

                                        <select
                                            value={item.status}
                                            onChange={(e) =>
                                                handleStatusChange(
                                                    item._id,
                                                    e.target.value
                                                )
                                            }
                                            className="border border-slate-200 rounded-lg px-3 py-2 text-xs outline-none bg-white"
                                        >

                                            <option value="Pending">
                                                Pending
                                            </option>

                                            <option value="Reviewed">
                                                Reviewed
                                            </option>

                                            <option value="Shortlisted">
                                                Shortlisted
                                            </option>

                                            <option value="Rejected">
                                                Rejected
                                            </option>

                                        </select>

                                    </td>

                                    {/* LINKS */}
                                    <td className="px-4 py-4 whitespace-nowrap">

                                        {item.linkedinProfile ? (

                                            <a
                                                href={item.linkedinProfile}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 px-2.5 py-1 rounded-lg transition-colors"
                                            >
                                                LinkedIn
                                            </a>

                                        ) : (

                                            <span className="text-slate-400 text-sm">
                                                —
                                            </span>

                                        )}

                                    </td>

                                    {/* RESUME */}
                                    <td className="px-4 py-4 whitespace-nowrap">

                                        {item.resume ? (

                                            <a
                                                href={item.resume}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-xs font-semibold text-green-700 bg-green-50 hover:bg-green-100 px-2.5 py-1 rounded-lg transition-colors"
                                            >
                                                View Resume
                                            </a>

                                        ) : (

                                            <span className="text-slate-400 text-sm">
                                                —
                                            </span>

                                        )}

                                    </td>

                                    {/* DATE */}
                                    <td className="px-4 py-4 whitespace-nowrap">

                                        <p className="text-xs text-slate-400">

                                            {new Date(
                                                item.createdAt
                                            ).toLocaleDateString("en-US", {
                                                month: "short",
                                                day: "numeric",
                                                year: "numeric",
                                            })}

                                        </p>

                                    </td>

                                    {/* ACTION */}
                                    <td className="px-4 py-4 whitespace-nowrap">

                                        <button
                                            onClick={() =>
                                                handleDelete(item._id)
                                            }
                                            className="w-9 h-9 rounded-lg bg-red-50 hover:bg-red-100 flex items-center justify-center transition-colors"
                                        >

                                            <Trash2
                                                size={16}
                                                className="text-red-600"
                                            />

                                        </button>

                                    </td>

                                </tr>
                            ))}

                        </tbody>

                    </table>

                </div>
            )}
        </div>
    );
};

export default Applications;