"use client";

import { useState } from "react";

import { createJobs } from "@/lib/services/admin/jobs.Services";

type Props = {
    onJobCreated: () => void;
};

const CreateJob = ({ onJobCreated }: Props) => {

    const [formData, setFormData] = useState({
        title: "",
        jobType: "Full-time",
        workMode: "Remote / Hybrid",
        focus: "",
        experience: "",
    });

    const [submitting, setSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            setSubmitting(true);

            const payload = {
                title: formData.title,
                jobType: formData.jobType,
                workMode: formData.workMode,
                focus: formData.focus,
                experience: formData.experience,
            };

            console.log("Create Job Payload:", payload);

            const response = await createJobs(payload);

            console.log("Create Job Response:", response);

            if (response?.success) {

                setFormData({
                    title: "",
                    jobType: "Full-time",
                    workMode: "Remote / Hybrid",
                    focus: "",
                    experience: "",
                });

                onJobCreated();
            }

        } catch (error) {
            console.log("Create job error:", error);
            alert("Failed to create job.");
        } finally {
            setSubmitting(false);
        }
    };

    const inputClass =
        "w-full px-3 py-2.5 text-sm border border-slate-200 rounded-lg outline-none focus:border-slate-400 focus:ring-2 focus:ring-slate-100 bg-white transition-all";

    return (
        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-7">

            <h2 className="text-base font-bold text-slate-900 mb-5">
                Create New Job
            </h2>

            <form onSubmit={handleSubmit}>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                    {/* JOB TITLE */}
                    <div className="md:col-span-2">

                        <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                            Job Title <span className="text-red-500">*</span>
                        </label>

                        <input
                            type="text"
                            placeholder="e.g. Frontend Developer"
                            value={formData.title}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    title: e.target.value,
                                })
                            }
                            className={inputClass}
                            required
                        />
                    </div>

                    {/* JOB TYPE */}
                    <div>

                        <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                            Job Type <span className="text-red-500">*</span>
                        </label>

                        <select
                            value={formData.jobType}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    jobType: e.target.value,
                                })
                            }
                            className={inputClass}
                            required
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

                        <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                            Work Mode
                        </label>

                        <select
                            value={formData.workMode}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    workMode: e.target.value,
                                })
                            }
                            className={inputClass}
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

                        <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                            Focus
                        </label>

                        <input
                            type="text"
                            placeholder="e.g. Performance, UX"
                            value={formData.focus}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    focus: e.target.value,
                                })
                            }
                            className={inputClass}
                        />
                    </div>

                    {/* EXPERIENCE */}
                    <div>

                        <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                            Experience
                        </label>

                        <input
                            type="text"
                            placeholder="e.g. 2+ years"
                            value={formData.experience}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    experience: e.target.value,
                                })
                            }
                            className={inputClass}
                        />
                    </div>

                </div>

                {/* SUBMIT BUTTON */}
                <div className="flex justify-end mt-6 pt-5 border-t border-slate-100">

                    <button
                        type="submit"
                        disabled={submitting}
                        className="px-5 py-2 text-sm font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-700 transition-all disabled:opacity-50 cursor-pointer"
                    >
                        {submitting
                            ? "Creating..."
                            : "Create Job"}
                    </button>

                </div>

            </form>
        </div>
    );
};

export default CreateJob;