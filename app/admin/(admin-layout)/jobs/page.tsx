"use client";

import { useEffect, useState } from "react";

import CreateJob from "@/components/admin/jobs/createJobs";

import {
    getAllJobs,
    updateJobs,
    deleteJobs,
} from "@/lib/services/admin/jobs.Services";

type Job = {
    _id: string;
    title: string;
    jobType: string;
    workMode: string;
    focus: string;
    experience: string;
    createdAt: string;
    updatedAt: string;
};

const Page = () => {

    const [showForm, setShowForm] = useState(false);

    const [jobs, setJobs] = useState<Job[]>([]);

    const [loading, setLoading] = useState(true);

    const [editingJob, setEditingJob] = useState<Job | null>(null);

    const [editForm, setEditForm] = useState({
        title: "",
        jobType: "Full-time",
        workMode: "Remote / Hybrid",
        focus: "",
        experience: "",
    });

    // FETCH JOBS
    const fetchJobs = async () => {
        try {
            setLoading(true);

            const response = await getAllJobs();

            console.log("Jobs response:", response);

            if (response?.success) {
                setJobs(response.data || []);
            }

        } catch (error) {
            console.log("Fetch jobs error:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchJobs();
    }, []);

    // AFTER CREATE JOB
    const handleJobCreated = () => {
        fetchJobs();
        setShowForm(false);
    };

    // DELETE JOB
    const handleDelete = async (id: string) => {

        const confirmDelete = confirm(
            "Are you sure you want to delete this job?"
        );

        if (!confirmDelete) return;

        try {

            const response = await deleteJobs(id);

            console.log("Delete response:", response);

            if (response?.success) {
                fetchJobs();
            }

        } catch (error) {
            console.log("Delete job error:", error);
        }
    };

    // UPDATE JOB
    const handleUpdate = async () => {

        if (!editingJob) return;

        try {

            const payload = {
                title: editForm.title,
                jobType: editForm.jobType,
                workMode: editForm.workMode,
                focus: editForm.focus,
                experience: editForm.experience,
            };

            console.log("Update payload:", payload);

            const response = await updateJobs(
                editingJob._id,
                payload
            );

            console.log("Update response:", response);

            if (response?.success) {

                setEditingJob(null);

                setEditForm({
                    title: "",
                    jobType: "Full-time",
                    workMode: "Remote / Hybrid",
                    focus: "",
                    experience: "",
                });

                fetchJobs();
            }

        } catch (error) {
            console.log("Update job error:", error);
        }
    };

    return (
        <div className="min-h-screen bg-white p-8">

            <div className="max-w-7xl mx-auto">

                {/* HEADER */}
                <div className="flex items-center justify-between mb-8">

                    <div className="flex items-center gap-3">

                        <h1 className="text-2xl font-bold text-slate-900">
                            Jobs
                        </h1>

                        <span className="bg-slate-100 text-slate-600 text-xs font-bold px-2.5 py-1 rounded-full">
                            {jobs.length}
                        </span>

                    </div>

                    <button
                        onClick={() => setShowForm(!showForm)}
                        className="bg-slate-900 hover:bg-slate-700 text-white text-sm font-semibold px-4 py-2.5 rounded-xl transition-all cursor-pointer"
                    >
                        {showForm
                            ? "✕ Cancel"
                            : "+ Create Job"}
                    </button>

                </div>

                {/* CREATE FORM */}
                {showForm && (
                    <div className="mb-8">
                        <CreateJob
                            onJobCreated={handleJobCreated}
                        />
                    </div>
                )}

                {/* EDIT MODAL */}
                {editingJob && (

                    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">

                        <div className="bg-white w-full max-w-xl rounded-2xl p-6">

                            <h2 className="text-xl font-bold mb-5">
                                Edit Job
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                                {/* TITLE */}
                                <div className="md:col-span-2">

                                    <label className="text-sm font-medium block mb-2">
                                        Job Title
                                    </label>

                                    <input
                                        type="text"
                                        value={editForm.title}
                                        onChange={(e) =>
                                            setEditForm({
                                                ...editForm,
                                                title: e.target.value,
                                            })
                                        }
                                        className="w-full border border-slate-300 rounded-xl px-4 py-3 outline-none"
                                    />
                                </div>

                                {/* JOB TYPE */}
                                <div>

                                    <label className="text-sm font-medium block mb-2">
                                        Job Type
                                    </label>

                                    <select
                                        value={editForm.jobType}
                                        onChange={(e) =>
                                            setEditForm({
                                                ...editForm,
                                                jobType: e.target.value,
                                            })
                                        }
                                        className="w-full border border-slate-300 rounded-xl px-4 py-3 outline-none"
                                    >
                                        <option value="Full-time">
                                            Full-time
                                        </option>

                                        <option value="Part-time">
                                            Part-time
                                        </option>

                                        <option value="Internship">
                                            Internship
                                        </option>

                                        <option value="Contract">
                                            Contract
                                        </option>
                                    </select>

                                </div>

                                {/* WORK MODE */}
                                <div>

                                    <label className="text-sm font-medium block mb-2">
                                        Work Mode
                                    </label>

                                    <select
                                        value={editForm.workMode}
                                        onChange={(e) =>
                                            setEditForm({
                                                ...editForm,
                                                workMode: e.target.value,
                                            })
                                        }
                                        className="w-full border border-slate-300 rounded-xl px-4 py-3 outline-none"
                                    >
                                        <option value="Remote">
                                            Remote
                                        </option>

                                        <option value="Hybrid">
                                            Hybrid
                                        </option>

                                        <option value="Onsite">
                                            Onsite
                                        </option>

                                        <option value="Remote / Hybrid">
                                            Remote / Hybrid
                                        </option>
                                    </select>

                                </div>

                                {/* FOCUS */}
                                <div>

                                    <label className="text-sm font-medium block mb-2">
                                        Focus
                                    </label>

                                    <input
                                        type="text"
                                        value={editForm.focus}
                                        onChange={(e) =>
                                            setEditForm({
                                                ...editForm,
                                                focus: e.target.value,
                                            })
                                        }
                                        className="w-full border border-slate-300 rounded-xl px-4 py-3 outline-none"
                                    />
                                </div>

                                {/* EXPERIENCE */}
                                <div>

                                    <label className="text-sm font-medium block mb-2">
                                        Experience
                                    </label>

                                    <input
                                        type="text"
                                        value={editForm.experience}
                                        onChange={(e) =>
                                            setEditForm({
                                                ...editForm,
                                                experience: e.target.value,
                                            })
                                        }
                                        className="w-full border border-slate-300 rounded-xl px-4 py-3 outline-none"
                                    />
                                </div>

                            </div>

                            {/* BUTTONS */}
                            <div className="flex items-center justify-end gap-3 mt-6">

                                <button
                                    onClick={() => {
                                        setEditingJob(null);

                                        setEditForm({
                                            title: "",
                                            jobType: "Full-time",
                                            workMode: "Remote / Hybrid",
                                            focus: "",
                                            experience: "",
                                        });
                                    }}
                                    className="px-4 py-2 rounded-xl bg-slate-200 text-slate-700"
                                >
                                    Cancel
                                </button>

                                <button
                                    onClick={handleUpdate}
                                    className="px-4 py-2 rounded-xl bg-slate-900 text-white"
                                >
                                    Update Job
                                </button>

                            </div>

                        </div>
                    </div>
                )}

                {/* LOADING */}
                {loading ? (

                    <p className="text-slate-400 text-sm">
                        Loading jobs...
                    </p>

                ) : jobs.length === 0 ? (

                    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-10 text-center">

                        <p className="text-slate-500">
                            No jobs found
                        </p>

                    </div>

                ) : (

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

                        {jobs.map((job) => (

                            <div
                                key={job._id}
                                className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all"
                            >

                                {/* TITLE */}
                                <h2 className="text-lg font-bold text-slate-900 mb-3">
                                    {job.title}
                                </h2>

                                {/* DETAILS */}
                                <div className="space-y-2">

                                    <div className="flex items-center justify-between">

                                        <span className="text-sm text-slate-500">
                                            Job Type
                                        </span>

                                        <span className="text-sm font-medium text-slate-800">
                                            {job.jobType}
                                        </span>

                                    </div>

                                    <div className="flex items-center justify-between">

                                        <span className="text-sm text-slate-500">
                                            Work Mode
                                        </span>

                                        <span className="text-sm font-medium text-slate-800">
                                            {job.workMode}
                                        </span>

                                    </div>

                                    <div className="flex items-center justify-between">

                                        <span className="text-sm text-slate-500">
                                            Experience
                                        </span>

                                        <span className="text-sm font-medium text-slate-800">
                                            {job.experience}
                                        </span>

                                    </div>

                                </div>

                                {/* FOCUS */}
                                <div className="mt-4">

                                    <p className="text-sm text-slate-500 mb-1">
                                        Focus
                                    </p>

                                    <p className="text-sm text-slate-800">
                                        {job.focus}
                                    </p>

                                </div>

                                {/* DATE */}
                                <div className="mt-5 pt-4 border-t border-slate-100">

                                    <p className="text-xs text-slate-400">
                                        Created on{" "}
                                        {new Date(
                                            job.createdAt
                                        ).toLocaleDateString()}
                                    </p>

                                </div>

                                {/* ACTION BUTTONS */}
                                <div className="flex items-center gap-2 mt-5">

                                    {/* EDIT */}
                                    <button
                                        onClick={() => {

                                            setEditingJob(job);

                                            setEditForm({
                                                title: job.title || "",
                                                jobType: job.jobType || "Full-time",
                                                workMode: job.workMode || "Remote / Hybrid",
                                                focus: job.focus || "",
                                                experience: job.experience || "",
                                            });
                                        }}
                                        className="bg-blue-600 hover:bg-blue-700 text-white text-xs px-3 py-2 rounded-lg"
                                    >
                                        Edit
                                    </button>

                                    {/* DELETE */}
                                    <button
                                        onClick={() =>
                                            handleDelete(job._id)
                                        }
                                        className="bg-red-600 hover:bg-red-700 text-white text-xs px-3 py-2 rounded-lg"
                                    >
                                        Delete
                                    </button>

                                </div>

                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Page;