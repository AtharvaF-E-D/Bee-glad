"use client";

import { useState } from "react";
import { createJob } from "@/lib/appwrite/jobs";

type Props = {
    onJobCreated: () => void;
};

const CreateJob = ({ onJobCreated }: Props) => {
    const [formData, setFormData] = useState({
        title: "", type: "", workMode: "", focus: "", experience: "",
    });
    const [submitting, setSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitting(true);
        try {
            await createJob({ ...formData, published: true });
            setFormData({ title: "", type: "", workMode: "", focus: "", experience: "" });
            onJobCreated();
        } catch {
            alert("Failed to create job.");
        } finally {
            setSubmitting(false);
        }
    };

    const inputClass = "w-full px-3 py-2.5 text-sm border border-slate-200 rounded-lg outline-none focus:border-slate-400 focus:ring-2 focus:ring-slate-100 bg-white transition-all";

    return (
        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-7">
            <h2 className="text-base font-bold text-slate-900 mb-5">Create New Job</h2>

            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                    <div className="md:col-span-2">
                        <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                            Job Title <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="e.g. Frontend Developer"
                            value={formData.title}
                            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                            className={inputClass}
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                            Job Type <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="e.g. Full-time, Internship"
                            value={formData.type}
                            onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                            className={inputClass}
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                            Work Mode
                        </label>
                        <input
                            type="text"
                            placeholder="e.g. Remote / Hybrid / Onsite"
                            value={formData.workMode}
                            onChange={(e) => setFormData({ ...formData, workMode: e.target.value })}
                            className={inputClass}
                        />
                    </div>

                    <div>
                        <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                            Focus
                        </label>
                        <input
                            type="text"
                            placeholder="e.g. Frontend / Backend"
                            value={formData.focus}
                            onChange={(e) => setFormData({ ...formData, focus: e.target.value })}
                            className={inputClass}
                        />
                    </div>

                    <div>
                        <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                            Experience
                        </label>
                        <input
                            type="text"
                            placeholder="e.g. 1-3 years"
                            value={formData.experience}
                            onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                            className={inputClass}
                        />
                    </div>

                </div>

                <div className="flex justify-end mt-6 pt-5 border-t border-slate-100">
                    <button
                        type="submit"
                        disabled={submitting}
                        className="px-5 py-2 text-sm font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-700 transition-all disabled:opacity-50 cursor-pointer"
                    >
                        {submitting ? "Creating…" : "Create Job"}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CreateJob;