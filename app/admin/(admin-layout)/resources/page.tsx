"use client";

import { useEffect, useState } from "react";
import { deleteResource, getResources, updateResource } from "@/lib/appwrite/resources";
import CreateResourceForm from "@/components/admin/resources/CreateResourceForm";


type Resource = {
    $id: string; Title: string; Slug: string; Image?: string;
    Category?: string; tags?: string; description?: string;
    published: boolean; $createdAt: string;
};

export default function Resources() {
    const [resources, setResources] = useState<Resource[]>([]);
    const [loading, setLoading] = useState(true);
    const [showForm, setShowForm] = useState(false);

    const fetchResources = async () => {
        setLoading(true);
        try {
            const data = await getResources();
            setResources((data as any).documents ?? data);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => { fetchResources(); }, []);

    return (
        <div className="min-h-screen bg-white p-8">
            <div className="max-w-7xl mx-auto">

                <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                        <h1 className="text-2xl font-bold text-slate-900">Resources</h1>
                        <span className="bg-slate-100 text-slate-600 text-xs font-bold px-2.5 py-1 rounded-full">
                            {resources.length}
                        </span>
                    </div>
                    <button
                        onClick={() => setShowForm((v) => !v)}
                        className="flex items-center gap-2 bg-slate-900 hover:bg-slate-700 text-white text-sm font-semibold px-4 py-2.5 rounded-xl transition-all cursor-pointer"
                    >
                        {showForm ? "✕ Cancel" : "+ Create Resource"}
                    </button>
                </div>

                {showForm && (
                    <div className="mb-8">
                        <CreateResourceForm
                            onSuccess={() => {
                                setShowForm(false);
                                fetchResources();
                            }}
                        />
                    </div>
                )}

                {loading ? (
                    <p className="text-slate-400 text-sm">Loading…</p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {resources.map((r) => (
                            <div
                                key={r.$id}
                                className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                            >
                                <div className="h-52 overflow-hidden bg-slate-100">
                                    {r.Image ? (
                                        <img
                                            src={r.Image}
                                            alt={r.Title}
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center text-slate-400 text-sm">
                                            No Image
                                        </div>
                                    )}
                                </div>

                                <div className="p-5">
                                    <div className="flex items-center justify-between mb-3">
                                        <h2 className="text-slate-900 font-semibold text-sm">
                                            {r.Title}
                                        </h2>
                                        <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${r.published
                                                ? "bg-green-100 text-green-600"
                                                : "bg-slate-100 text-slate-500"
                                            }`}>
                                            {r.published ? "Published" : "Draft"}
                                        </span>
                                    </div>

                                    {r.description && (
                                        <p className="text-slate-500 text-xs mb-3 line-clamp-2">
                                            {r.description}
                                        </p>
                                    )}

                                    <div className="flex flex-wrap gap-1.5">
                                        {r.tags?.split(",").map((tag, i) => (
                                            <span
                                                key={i}
                                                className="bg-slate-100 text-slate-600 text-xs font-medium px-2.5 py-1 rounded-md"
                                            >
                                                {tag.trim()}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}