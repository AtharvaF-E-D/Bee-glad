"use client";

import { useEffect, useState } from "react";
import { getJobs } from "@/lib/appwrite/jobs";
import { getResources } from "@/lib/appwrite/resources";
import { getSolutions } from "@/lib/appwrite/SmartSolutions";
import { getApplicationCount } from "@/lib/appwrite/dashboard";
import Link from "next/link";

// Circular progress ring component
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
    // Cap at 100 for visual, show actual number as text
    const percent = Math.min((value / Math.max(value, 10)) * 75, 75);
    const offset = circumference - (percent / 100) * circumference;

    return (
        <Link
            href={href}
            className="group bg-white border border-slate-200 rounded-2xl px-6 py-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-5"
        >
            {/* Ring */}
            <div className="relative flex-shrink-0 w-14 h-14 flex items-center justify-center">
                <svg width="56" height="56" className="-rotate-90">
                    {/* Background circle */}
                    <circle
                        cx="28" cy="28" r={radius}
                        fill="none"
                        stroke="#f1f5f9"
                        strokeWidth="4"
                    />
                    {/* Progress circle */}
                    <circle
                        cx="28" cy="28" r={radius}
                        fill="none"
                        stroke={color}
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeDasharray={circumference}
                        strokeDashoffset={offset}
                        className="transition-all duration-700"
                    />
                </svg>
                {/* Arrow icon in center */}
                <div
                    className="absolute inset-0 flex items-center justify-center"
                    style={{ color }}
                >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="7" y1="17" x2="17" y2="7" />
                        <polyline points="7 7 17 7 17 17" />
                    </svg>
                </div>
            </div>

            {/* Text */}
            <div>
                <p className="text-xs text-slate-400 font-medium mb-0.5">{label}</p>
                <p className="text-3xl font-bold text-slate-900 leading-none">{value}</p>
                {sub && <p className="text-xs text-slate-400 mt-1">{sub}</p>}
            </div>
        </Link>
    );
};

export default function Dashboard() {
    const [stats, setStats] = useState({
        jobs: { total: 0, published: 0, draft: 0 },
        resources: { total: 0, published: 0, draft: 0 },
        solutions: { total: 0 },
        applications: { total: 0 },
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAll = async () => {
            try {
                const [jobsData, resourcesData, solutionsData, applicationCount] = await Promise.all([
                    getJobs(),
                    getResources(),
                    getSolutions(),
                    getApplicationCount(),
                ]);
                const resources = (resourcesData as any).documents ?? resourcesData;
                setStats({
                    jobs: {
                        total: jobsData.length,
                        published: jobsData.filter((j: any) => j.published).length,
                        draft: jobsData.filter((j: any) => !j.published).length,
                    },
                    resources: {
                        total: resources.length,
                        published: resources.filter((r: any) => r.published).length,
                        draft: resources.filter((r: any) => !r.published).length,
                    },
                    solutions: { total: solutionsData.length },
                    applications: { total: applicationCount },
                });
            } finally {
                setLoading(false);
            }
        };
        fetchAll();
    }, []);

    return (
        <div className="min-h-screen bg-white p-8">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="mb-10">
                    <p className="text-xs font-semibold tracking-widest text-slate-400 uppercase mb-1">
                        BeeGlad Admin
                    </p>
                    <h1 className="text-3xl font-bold text-slate-900">Dashboard</h1>
                </div>

                {/* Stat Cards */}
                {loading ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="border border-slate-200 rounded-2xl p-5 animate-pulse h-24 bg-slate-50" />
                        ))}
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
                        <RingCard
                            label="Total Jobs"
                            value={stats.jobs.total}
                            color="#3b82f6"
                            href="/admin/jobs"
                            sub={`${stats.jobs.published} published`}
                        />
                        <RingCard
                            label="Total Resources"
                            value={stats.resources.total}
                            color="#a855f7"
                            href="/admin/resources"
                            sub={`${stats.resources.published} published`}
                        />
                        <RingCard
                            label="Smart Solutions"
                            value={stats.solutions.total}
                            color="#22c55e"
                            href="/admin/solutions"
                            sub="Active modules"
                        />
                        <RingCard
                            label="Applications"
                            value={stats.applications.total}
                            color="#f97316"
                            href="/admin/joinTeam"
                            sub="Total received"
                        />
                    </div>
                )}

                {/* Detail Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">

                    {/* Jobs breakdown */}
                    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                        <div className="flex items-center justify-between mb-4">
                            <p className="text-sm font-bold text-slate-900">Jobs Overview</p>
                            <Link href="/admin/jobs" className="text-xs text-slate-400 hover:text-slate-600 transition-colors">
                                View all →
                            </Link>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="flex-1 bg-slate-50 rounded-xl p-4 text-center">
                                <p className="text-2xl font-bold text-green-500">{stats.jobs.published}</p>
                                <p className="text-xs text-slate-400 mt-1 font-medium">Published</p>
                            </div>
                            <div className="flex-1 bg-slate-50 rounded-xl p-4 text-center">
                                <p className="text-2xl font-bold text-slate-400">{stats.jobs.draft}</p>
                                <p className="text-xs text-slate-400 mt-1 font-medium">Draft</p>
                            </div>
                            <div className="flex-1 bg-slate-50 rounded-xl p-4 text-center">
                                <p className="text-2xl font-bold text-blue-500">{stats.jobs.total}</p>
                                <p className="text-xs text-slate-400 mt-1 font-medium">Total</p>
                            </div>
                        </div>
                    </div>

                    {/* Resources breakdown */}
                    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                        <div className="flex items-center justify-between mb-4">
                            <p className="text-sm font-bold text-slate-900">Resources Overview</p>
                            <Link href="/admin/resources" className="text-xs text-slate-400 hover:text-slate-600 transition-colors">
                                View all →
                            </Link>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="flex-1 bg-slate-50 rounded-xl p-4 text-center">
                                <p className="text-2xl font-bold text-green-500">{stats.resources.published}</p>
                                <p className="text-xs text-slate-400 mt-1 font-medium">Published</p>
                            </div>
                            <div className="flex-1 bg-slate-50 rounded-xl p-4 text-center">
                                <p className="text-2xl font-bold text-slate-400">{stats.resources.draft}</p>
                                <p className="text-xs text-slate-400 mt-1 font-medium">Draft</p>
                            </div>
                            <div className="flex-1 bg-slate-50 rounded-xl p-4 text-center">
                                <p className="text-2xl font-bold text-purple-500">{stats.resources.total}</p>
                                <p className="text-xs text-slate-400 mt-1 font-medium">Total</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="bg-white border border-slate-200 rounded-2xl p-6">
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">
                        Quick Actions
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
                        {[
                            { label: "Post a New Job", sub: "Add to careers page", href: "/admin/jobs", icon: "💼", accent: "group-hover:bg-slate-900 group-hover:text-white group-hover:border-slate-900" },
                            { label: "Add Resource", sub: "Publish learning content", href: "/admin/resources", icon: "📚", accent: "group-hover:bg-yellow-400 group-hover:border-yellow-400" },
                            { label: "New Solution", sub: "Showcase a capability", href: "/admin/solutions", icon: "⚡", accent: "group-hover:bg-slate-100" },
                            { label: "View Applications", sub: "Review candidates", href: "/admin/joinTeam", icon: "📋", accent: "group-hover:bg-green-50 group-hover:border-green-200" },
                        ].map((action) => (
                            <Link
                                key={action.label}
                                href={action.href}
                                className={`group flex items-center gap-4 px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl transition-all duration-200 ${action.accent}`}
                            >
                                <span className="text-xl">{action.icon}</span>
                                <div>
                                    <p className="text-sm font-semibold text-slate-800">{action.label}</p>
                                    <p className="text-xs text-slate-400">{action.sub}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}