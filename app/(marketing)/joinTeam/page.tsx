"use client";

import React, { useEffect, useState } from "react";
import { ChevronDown, Upload, Check } from "lucide-react";
import { createJobApplication } from "@/lib/services/admin/jobApplication.service";
import { getAllJobs } from "@/lib/services/admin/jobs.Services";
import { uploadImage } from "@/lib/services/admin/resourceServices";

const Page = () => {

    const [agreed, setAgreed] = useState(false);

    const [dragging, setDragging] = useState(false);

    const [fileName, setFileName] = useState<string | null>(null);

    const [resumeFile, setResumeFile] = useState<File | null>(null);

    const [jobs, setJobs] = useState<any[]>([]);

    const [loading, setLoading] = useState(false);

    const [form, setForm] = useState({
        jobId: "",
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        currentLocation: "",
        linkedinProfile: "",
        position: "",
        yearsOfExperience: "",
    });

    useEffect(() => {

        const fetchJobs = async () => {

            try {

                const response = await getAllJobs();

                if (response?.success) {

                    setJobs(response?.data || []);

                    if (response?.data?.length > 0) {

                        setForm((prev) => ({
                            ...prev,
                            jobId: response.data[0]._id,
                            position: response.data[0].title,
                        }));
                    }
                }

            } catch (error) {

                console.error(
                    "Jobs fetch error:",
                    error
                );
            }
        };

        fetchJobs();

    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        const { name, value } = e.target;

        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleJobChange = (e: React.ChangeEvent<HTMLSelectElement>) => {

        const selectedJobId = e.target.value;

        const selectedJob = jobs.find(
            (job) => job._id === selectedJobId
        );

        setForm((prev) => ({
            ...prev,
            jobId: selectedJobId,
            position: selectedJob?.title || "",
        }));
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {

        e.preventDefault();

        setDragging(false);

        const file = e.dataTransfer.files[0];

        if (file) {

            setResumeFile(file);

            setFileName(file.name);
        }
    };

    const handleSubmit = async () => {

        try {

            setLoading(true);

            let resumeUrl = "";

            if (resumeFile) {

                const uploadResponse =
                    await uploadImage(resumeFile);

                resumeUrl =
                    uploadResponse?.data?.[0]?.url || "";
            }

            const payload = {
                jobId: form.jobId,
                firstName: form.firstName,
                lastName: form.lastName,
                email: form.email,
                phoneNumber: Number(form.phoneNumber),
                currentLocation: form.currentLocation,
                linkedinProfile: form.linkedinProfile,
                position: form.position,
                yearsOfExperience: form.yearsOfExperience,
                resume: resumeUrl,
            };

            const response =
                await createJobApplication(payload);

            if (response?.success) {

                alert("Application submitted successfully");

                setForm({
                    jobId: jobs?.[0]?._id || "",
                    firstName: "",
                    lastName: "",
                    email: "",
                    phoneNumber: "",
                    currentLocation: "",
                    linkedinProfile: "",
                    position: jobs?.[0]?.title || "",
                    yearsOfExperience: "",
                });

                setResumeFile(null);

                setFileName(null);

                setAgreed(false);
            }

        } catch (error) {

            console.error(
                "Application submit error:",
                error
            );

            alert("Something went wrong");

        } finally {

            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#1a1a1a] text-white font-sans">

            <div className="px-6 pt-5 pb-2 flex items-center gap-2 text-sm text-gray-400">

                <span className="hover:text-white cursor-pointer transition-colors">
                    Career
                </span>

                <ChevronDown className="w-3 h-3 -rotate-90 text-gray-500" />

                <span className="text-white">
                    Join Our Team
                </span>

            </div>

            <div className="max-w-5xl mx-auto px-6 py-6">

                <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-6 items-start">

                    <div className="rounded-xl overflow-hidden h-full min-h-[320px] md:min-h-[500px]">

                        <img
                            src="/joinTeam.png"
                            alt="Team collaborating"
                            className="w-full h-full object-cover"
                        />

                    </div>

                    <div className="bg-[#222222] rounded-xl p-7">

                        <div className="mb-6">

                            <h1 className="text-2xl font-semibold text-white mb-1">
                                Join Our Team
                            </h1>

                            <p className="text-gray-400 text-sm leading-relaxed">
                                Build meaningful digital products with a team that values clarity, creativity, and collaboration.
                            </p>

                        </div>

                        <section className="mb-6">

                            <h2 className="text-base font-semibold text-white mb-3">
                                Personal Information
                            </h2>

                            <div className="space-y-3">

                                <div className="grid grid-cols-2 gap-3">

                                    <input
                                        type="text"
                                        name="lastName"
                                        value={form.lastName}
                                        onChange={handleChange}
                                        placeholder="Last Name"
                                        className="bg-[#2e2e2e] border border-[#3a3a3a] rounded-lg px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#c9a227]"
                                    />

                                    <input
                                        type="text"
                                        name="firstName"
                                        value={form.firstName}
                                        onChange={handleChange}
                                        placeholder="First Name"
                                        className="bg-[#2e2e2e] border border-[#3a3a3a] rounded-lg px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#c9a227]"
                                    />

                                </div>

                                <input
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder="Email"
                                    className="w-full bg-[#2e2e2e] border border-[#3a3a3a] rounded-lg px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#c9a227]"
                                />

                                <input
                                    type="tel"
                                    name="phoneNumber"
                                    value={form.phoneNumber}
                                    onChange={handleChange}
                                    placeholder="Phone Number"
                                    className="w-full bg-[#2e2e2e] border border-[#3a3a3a] rounded-lg px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#c9a227]"
                                />

                                <input
                                    type="text"
                                    name="currentLocation"
                                    value={form.currentLocation}
                                    onChange={handleChange}
                                    placeholder="Current Location"
                                    className="w-full bg-[#2e2e2e] border border-[#3a3a3a] rounded-lg px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#c9a227]"
                                />

                                <input
                                    type="url"
                                    name="linkedinProfile"
                                    value={form.linkedinProfile}
                                    onChange={handleChange}
                                    placeholder="LinkedIn Profile"
                                    className="w-full bg-[#2e2e2e] border border-[#3a3a3a] rounded-lg px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#c9a227]"
                                />

                            </div>

                        </section>

                        <section className="mb-6">

                            <h2 className="text-base font-semibold text-white mb-3">
                                Professional Details
                            </h2>

                            <div className="space-y-3">

                                <div className="relative">

                                    <select
                                        value={form.jobId}
                                        onChange={handleJobChange}
                                        className="w-full bg-[#2e2e2e] border border-[#3a3a3a] rounded-lg px-4 py-2.5 text-sm text-white appearance-none focus:outline-none focus:border-[#c9a227] cursor-pointer"
                                    >

                                        {jobs.map((job) => (
                                            <option
                                                key={job._id}
                                                value={job._id}
                                            >
                                                {job.title}
                                            </option>
                                        ))}

                                    </select>

                                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />

                                </div>

                                <input
                                    type="text"
                                    name="yearsOfExperience"
                                    value={form.yearsOfExperience}
                                    onChange={handleChange}
                                    placeholder="Years of Experience"
                                    className="w-full bg-[#2e2e2e] border border-[#3a3a3a] rounded-lg px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#c9a227]"
                                />

                                <div
                                    onDragOver={(e: React.DragEvent<HTMLDivElement>) => {
                                        e.preventDefault();
                                        setDragging(true);
                                    }}
                                    onDragLeave={() => setDragging(false)}
                                    onDrop={handleDrop}
                                    className={`w-full bg-[#2e2e2e] border-2 border-dashed rounded-lg px-4 py-8 flex flex-col items-center justify-center cursor-pointer transition-colors ${dragging
                                        ? "border-[#c9a227] bg-[#2e2e2e]/80"
                                        : "border-[#3a3a3a] hover:border-[#c9a227]/50"
                                        }`}
                                    onClick={() =>
                                        document
                                            .getElementById("resume-upload")
                                            ?.click()
                                    }
                                >

                                    <input
                                        id="resume-upload"
                                        type="file"
                                        accept=".pdf,.doc,.docx"
                                        className="hidden"
                                        onChange={(e) => {

                                            const file =
                                                e.target.files?.[0];

                                            if (file) {

                                                setResumeFile(file);

                                                setFileName(file.name);
                                            }
                                        }}
                                    />

                                    <Upload className="w-6 h-6 text-gray-400 mb-2" />

                                    {fileName ? (
                                        <p className="text-sm text-[#c9a227] text-center">
                                            {fileName}
                                        </p>
                                    ) : (
                                        <>
                                            <p className="text-sm text-gray-400 text-center">
                                                Upload Resume
                                            </p>

                                            <p className="text-xs text-gray-600 mt-1">
                                                Click or drag & drop
                                            </p>
                                        </>
                                    )}

                                </div>

                            </div>

                        </section>

                        <div className="flex items-center gap-3 mb-5">

                            <button
                                type="button"
                                onClick={() =>
                                    setAgreed(!agreed)
                                }
                                className={`w-4 h-4 rounded flex-shrink-0 border flex items-center justify-center transition-colors ${agreed
                                    ? "bg-[#c9a227] border-[#c9a227]"
                                    : "bg-transparent border-gray-500"
                                    }`}
                            >

                                {agreed && (
                                    <Check className="w-3 h-3 text-black stroke-[3]" />
                                )}

                            </button>

                            <span className="text-xs text-gray-400">
                                I agree to the{" "}

                                <a
                                    href="#"
                                    className="text-[#c9a227] hover:underline"
                                >
                                    privacy policy
                                </a>

                            </span>

                        </div>

                        <button
                            type="button"
                            disabled={!agreed || loading}
                            onClick={handleSubmit}
                            className="w-full bg-[#c9a227] hover:bg-[#d4ad2e] disabled:opacity-50 text-black font-semibold text-sm py-3 rounded-lg transition-colors flex items-center justify-center gap-2 tracking-wide"
                        >

                            {loading
                                ? "Submitting..."
                                : "Submit Application"}

                            <span className="text-base">
                                →
                            </span>

                        </button>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default Page;