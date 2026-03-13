// TeamJoinForm.tsx
"use client";

import { joinTeam } from "@/lib/appwrite/joinTeam";
import { uploadResume } from "@/lib/appwrite/uploadImage";
import { useRef, useState } from "react";

type Props = {
    onSuccess?: () => void;
};

const TeamJoinForm = ({ onSuccess }: Props) => {
    const [formData, setFormData] = useState({
        firstName: "", lastName: "", email: "", phone: "",
        location: "", linkedin: "", portfolio: "",
        jobTitle: "", experience: "", privacyAccepted: false,
    });
    const [resume, setResume] = useState<File | null>(null);
    const [submitting, setSubmitting] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.privacyAccepted) { alert("Please accept the privacy policy"); return; }
        setSubmitting(true);
        try {
            let resumeId = "";
            if (resume) resumeId = await uploadResume(resume);
            await joinTeam({ ...formData, resumeId });
            setFormData({
                firstName: "", lastName: "", email: "", phone: "",
                location: "", linkedin: "", portfolio: "",
                jobTitle: "", experience: "", privacyAccepted: false,
            });
            setResume(null);
            onSuccess?.();
        } catch (error) {
            console.error("Application error:", error);
            alert("Something went wrong");
        } finally {
            setSubmitting(false);
        }
    };

    const inputClass = "w-full px-3 py-2.5 text-sm border border-slate-200 rounded-lg outline-none focus:border-slate-400 focus:ring-2 focus:ring-slate-100 bg-white transition-all";

    return (
        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-7">
            <h2 className="text-base font-bold text-slate-900 mb-6">New Application</h2>

            <form onSubmit={handleSubmit}>
                {/* Personal Info */}
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">
                    Personal Information
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">

                    <div>
                        <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                            First Name <span className="text-red-500">*</span>
                        </label>
                        <input name="firstName" value={formData.firstName} onChange={handleChange}
                            placeholder="John" className={inputClass} required />
                    </div>

                    <div>
                        <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                            Last Name <span className="text-red-500">*</span>
                        </label>
                        <input name="lastName" value={formData.lastName} onChange={handleChange}
                            placeholder="Doe" className={inputClass} required />
                    </div>

                    <div>
                        <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                            Email <span className="text-red-500">*</span>
                        </label>
                        <input name="email" type="email" value={formData.email} onChange={handleChange}
                            placeholder="john@example.com" className={inputClass} required />
                    </div>

                    <div>
                        <label className="block text-xs font-semibold text-slate-600 mb-1.5">Phone</label>
                        <input name="phone" value={formData.phone} onChange={handleChange}
                            placeholder="+91 98765 43210" className={inputClass} />
                    </div>

                    <div className="md:col-span-2">
                        <label className="block text-xs font-semibold text-slate-600 mb-1.5">Location</label>
                        <input name="location" value={formData.location} onChange={handleChange}
                            placeholder="City, Country" className={inputClass} />
                    </div>

                    <div>
                        <label className="block text-xs font-semibold text-slate-600 mb-1.5">LinkedIn</label>
                        <input name="linkedin" value={formData.linkedin} onChange={handleChange}
                            placeholder="https://linkedin.com/in/..." className={inputClass} />
                    </div>

                    <div>
                        <label className="block text-xs font-semibold text-slate-600 mb-1.5">Portfolio</label>
                        <input name="portfolio" value={formData.portfolio} onChange={handleChange}
                            placeholder="https://yoursite.com" className={inputClass} />
                    </div>
                </div>

                {/* Professional Details */}
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">
                    Professional Details
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">

                    <div>
                        <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                            Job Role <span className="text-red-500">*</span>
                        </label>
                        <input name="jobTitle" value={formData.jobTitle} onChange={handleChange}
                            placeholder="e.g. Frontend Developer" className={inputClass} required />
                    </div>

                    <div>
                        <label className="block text-xs font-semibold text-slate-600 mb-1.5">Experience</label>
                        <input name="experience" value={formData.experience} onChange={handleChange}
                            placeholder="e.g. 2-4 years" className={inputClass} />
                    </div>

                    <div className="md:col-span-2">
                        <label className="block text-xs font-semibold text-slate-600 mb-1.5">Resume</label>
                        <input ref={fileInputRef} type="file" accept=".pdf,.doc,.docx"
                            className="hidden" onChange={(e) => setResume(e.target.files?.[0] || null)} />

                        {resume ? (
                            <div className="flex items-center gap-4 px-4 py-3 border border-slate-200 rounded-lg bg-slate-50">
                                <span className="text-xl">📄</span>
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium text-slate-700 truncate">{resume.name}</p>
                                    <p className="text-xs text-slate-400">{(resume.size / 1024).toFixed(0)} KB</p>
                                </div>
                                <button type="button" onClick={() => fileInputRef.current?.click()}
                                    className="text-xs font-medium text-slate-500 hover:text-slate-800 transition-colors cursor-pointer">
                                    Replace
                                </button>
                            </div>
                        ) : (
                            <button type="button" onClick={() => fileInputRef.current?.click()}
                                className="w-full flex flex-col items-center justify-center gap-2 border-2 border-dashed border-slate-200 rounded-lg py-6 text-slate-400 hover:border-slate-400 hover:text-slate-600 transition-all cursor-pointer bg-slate-50">
                                <span className="text-2xl">📄</span>
                                <span className="text-sm font-medium">Click to upload resume</span>
                                <span className="text-xs">PDF, DOC, DOCX supported</span>
                            </button>
                        )}
                    </div>
                </div>

                {/* Privacy */}
                <div className="flex items-center gap-3 mb-6">
                    <input type="checkbox" name="privacyAccepted" id="privacy"
                        checked={formData.privacyAccepted}
                        onChange={handleChange}
                        className="w-4 h-4 accent-slate-900 cursor-pointer" />
                    <label htmlFor="privacy" className="text-sm text-slate-600 cursor-pointer">
                        I agree to the <span className="font-semibold text-slate-900">privacy policy</span>
                    </label>
                </div>

                <div className="flex justify-end pt-5 border-t border-slate-100">
                    <button type="submit" disabled={submitting}
                        className="px-5 py-2 text-sm font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-700 transition-all disabled:opacity-50 cursor-pointer">
                        {submitting ? "Submitting…" : "Submit Application"}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default TeamJoinForm;