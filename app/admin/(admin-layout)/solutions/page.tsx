"use client";

import CreateSolutionForm from "@/components/admin/solutions/CreateSolutionForm";
import { getSmartSolutions } from "@/lib/services/admin/smartSolution.service";
import { useState, useEffect } from "react";

type Solution = {
    _id: string;
    title: string;
    subtitle: string;
    description: string;
    features: string[];
    illustration: string | null;
    order: number;
    createdAt: string;
    updatedAt: string;
};

const SmartSolutions = () => {
    const [solutions, setSolutions] = useState<Solution[]>([]);
    const [loading, setLoading] = useState(true);
    const [showForm, setShowForm] = useState(false);

    const fetchSolutions = async () => {
        try {
            setLoading(true);

            const response = await getSmartSolutions();

            if (response?.success) {
                setSolutions(response.data || []);
            } else {
                setSolutions([]);
            }
        } catch (error) {
            console.error("Error fetching smart solutions:", error);
            setSolutions([]);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchSolutions();
    }, []);

    return (
        <div className="min-h-screen bg-white p-8">
            <div className="max-w-7xl mx-auto">

                <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                        <h1 className="text-2xl font-bold text-slate-900">
                            Smart Solutions
                        </h1>

                        <span className="bg-slate-100 text-slate-600 text-xs font-bold px-2.5 py-1 rounded-full">
                            {solutions.length}
                        </span>
                    </div>

                    <button
                        onClick={() => setShowForm((v) => !v)}
                        className="flex items-center gap-2 bg-slate-900 hover:bg-slate-700 text-white text-sm font-semibold px-4 py-2.5 rounded-xl transition-all cursor-pointer"
                    >
                        {showForm ? "✕ Cancel" : "+ Create Solution"}
                    </button>
                </div>

                {showForm && (
                    <div className="mb-8">
                        <CreateSolutionForm
                            onSuccess={() => {
                                setShowForm(false);
                                fetchSolutions();
                            }}
                        />
                    </div>
                )}

                {loading ? (
                    <p className="text-slate-400 text-sm">Loading...</p>
                ) : solutions.length === 0 ? (
                    <div className="flex items-center justify-center h-60 border border-dashed border-slate-300 rounded-2xl">
                        <p className="text-slate-400 text-sm">
                            No smart solutions found
                        </p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {solutions.map((s) => (
                            <div
                                key={s._id}
                                className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                            >
                                <div className="h-48 overflow-hidden bg-slate-100">
                                    {s.illustration ? (
                                        <img
                                            src={s.illustration}
                                            alt={s.title}
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center text-slate-400 text-sm">
                                            No Image
                                        </div>
                                    )}
                                </div>

                                <div className="p-5">

                                    {s.subtitle && (
                                        <span className="text-xs text-slate-500 font-semibold uppercase tracking-widest">
                                            {s.subtitle}
                                        </span>
                                    )}

                                    <h2 className="text-slate-900 font-bold text-lg mt-1 mb-2">
                                        {s.title}
                                    </h2>

                                    <p className="text-slate-500 text-sm line-clamp-2">
                                        {s.description}
                                    </p>

                                    {s.features?.length > 0 && (
                                        <div className="flex flex-wrap gap-2 mt-3">
                                            {s.features.map((feature, i) => (
                                                <span
                                                    key={i}
                                                    className="bg-slate-100 text-slate-600 text-xs px-2.5 py-1 rounded-full"
                                                >
                                                    {feature}
                                                </span>
                                            ))}
                                        </div>
                                    )}

                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default SmartSolutions;