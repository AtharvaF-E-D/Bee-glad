"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getDashboardStats } from "@/lib/services/admin/dashboard.services";

// ================= RING CARD =================
const RingCard = ({
    label,
    value,
    color,
    href,
    sub,
}: {
    label: string;
    value: number;
    color: string;
    href: string;
    sub?: string;
}) => {

    const radius = 20;
    const circumference = 2 * Math.PI * radius;

    const percent = Math.min(
        (value / Math.max(value, 10)) * 75,
        75
    );

    const offset =
        circumference - (percent / 100) * circumference;

    return (
        <Link
            href={href}
            className="group bg-white border border-slate-200 rounded-2xl px-6 py-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-5"
        >

            {/* RING */}
            <div className="relative flex-shrink-0 w-14 h-14 flex items-center justify-center">

                <svg
                    width="56"
                    height="56"
                    className="-rotate-90"
                >

                    {/* BG */}
                    <circle
                        cx="28"
                        cy="28"
                        r={radius}
                        fill="none"
                        stroke="#f1f5f9"
                        strokeWidth="4"
                    />

                    {/* PROGRESS */}
                    <circle
                        cx="28"
                        cy="28"
                        r={radius}
                        fill="none"
                        stroke={color}
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeDasharray={circumference}
                        strokeDashoffset={offset}
                        className="transition-all duration-700"
                    />

                </svg>

                {/* ICON */}
                <div
                    className="absolute inset-0 flex items-center justify-center"
                    style={{ color }}
                >
                    <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <line x1="7" y1="17" x2="17" y2="7" />
                        <polyline points="7 7 17 7 17 17" />
                    </svg>
                </div>

            </div>

            {/* TEXT */}
            <div>
                <p className="text-xs text-slate-400 font-medium mb-0.5">
                    {label}
                </p>

                <p className="text-3xl font-bold text-slate-900 leading-none">
                    {value}
                </p>

                {sub && (
                    <p className="text-xs text-slate-400 mt-1">
                        {sub}
                    </p>
                )}
            </div>

        </Link>
    );
};

export default function Dashboard() {

    const [stats, setStats] = useState({
        totalJobs: 0,
        totalResources: 0,
        totalSolutions: 0,
        totalApplications: 0,
    });

    const [loading, setLoading] = useState(true);

    // ================= FETCH DASHBOARD =================
    useEffect(() => {

        const fetchDashboardStats = async () => {

            try {

                const response =
                    await getDashboardStats();

                if (response?.success) {

                    setStats({
                        totalJobs:
                            response?.data?.totalJobs || 0,

                        totalResources:
                            response?.data?.totalResources || 0,

                        totalSolutions:
                            response?.data?.totalSolutions || 0,

                        totalApplications:
                            response?.data?.totalApplications || 0,
                    });
                }

            } catch (error) {

                console.error(
                    "Dashboard stats error:",
                    error
                );

            } finally {

                setLoading(false);
            }
        };

        fetchDashboardStats();

    }, []);

    return (
        <div className="min-h-screen bg-white p-8">

            <div className="max-w-7xl mx-auto">

                {/* HEADER */}
                <div className="mb-10">

                    <p className="text-xs font-semibold tracking-widest text-slate-400 uppercase mb-1">
                        BeeGlad Admin
                    </p>

                    <h1 className="text-3xl font-bold text-slate-900">
                        Dashboard
                    </h1>

                </div>

                {/* STAT CARDS */}
                {loading ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">

                        {[1, 2, 3, 4].map((i) => (
                            <div
                                key={i}
                                className="border border-slate-200 rounded-2xl p-5 animate-pulse h-24 bg-slate-50"
                            />
                        ))}

                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">

                        <RingCard
                            label="Total Jobs"
                            value={stats.totalJobs}
                            color="#3b82f6"
                            href="/admin/jobs"
                            sub="Published jobs"
                        />

                        <RingCard
                            label="Total Resources"
                            value={stats.totalResources}
                            color="#a855f7"
                            href="/admin/resources"
                            sub="Published resources"
                        />

                        <RingCard
                            label="Smart Solutions"
                            value={stats.totalSolutions}
                            color="#22c55e"
                            href="/admin/solutions"
                            sub="Active modules"
                        />

                        <RingCard
                            label="Applications"
                            value={stats.totalApplications}
                            color="#f97316"
                            href="/admin/joinTeam"
                            sub="Total received"
                        />

                    </div>
                )}

                {/* OVERVIEW */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">

                    {/* JOBS */}
                    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">

                        <div className="flex items-center justify-between mb-4">

                            <p className="text-sm font-bold text-slate-900">
                                Jobs Overview
                            </p>

                            <Link
                                href="/admin/jobs"
                                className="text-xs text-slate-400 hover:text-slate-600 transition-colors"
                            >
                                View all →
                            </Link>

                        </div>

                        <div className="bg-slate-50 rounded-xl p-5 text-center">

                            <p className="text-3xl font-bold text-blue-500">
                                {stats.totalJobs}
                            </p>

                            <p className="text-sm text-slate-400 mt-2">
                                Total Jobs
                            </p>

                        </div>

                    </div>

                    {/* RESOURCES */}
                    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">

                        <div className="flex items-center justify-between mb-4">

                            <p className="text-sm font-bold text-slate-900">
                                Resources Overview
                            </p>

                            <Link
                                href="/admin/resources"
                                className="text-xs text-slate-400 hover:text-slate-600 transition-colors"
                            >
                                View all →
                            </Link>

                        </div>

                        <div className="bg-slate-50 rounded-xl p-5 text-center">

                            <p className="text-3xl font-bold text-purple-500">
                                {stats.totalResources}
                            </p>

                            <p className="text-sm text-slate-400 mt-2">
                                Total Resources
                            </p>

                        </div>

                    </div>

                </div>

                {/* QUICK ACTIONS */}
                <div className="bg-white border border-slate-200 rounded-2xl p-6">

                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">
                        Quick Actions
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">

                        {[
                            {
                                label: "Post a New Job",
                                sub: "Add to careers page",
                                href: "/admin/jobs",
                                icon: "💼",
                            },
                            {
                                label: "Add Resource",
                                sub: "Publish learning content",
                                href: "/admin/resources",
                                icon: "📚",
                            },
                            {
                                label: "New Solution",
                                sub: "Showcase a capability",
                                href: "/admin/solutions",
                                icon: "⚡",
                            },
                            {
                                label: "View Applications",
                                sub: "Review candidates",
                                href: "/admin/joinTeam",
                                icon: "📋",
                            },
                        ].map((action) => (
                            <Link
                                key={action.label}
                                href={action.href}
                                className="group flex items-center gap-4 px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl transition-all duration-200 hover:shadow-sm"
                            >

                                <span className="text-xl">
                                    {action.icon}
                                </span>

                                <div>

                                    <p className="text-sm font-semibold text-slate-800">
                                        {action.label}
                                    </p>

                                    <p className="text-xs text-slate-400">
                                        {action.sub}
                                    </p>

                                </div>

                            </Link>
                        ))}

                    </div>

                </div>

            </div>

        </div>
    );
}