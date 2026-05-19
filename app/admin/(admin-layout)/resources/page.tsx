"use client";

import { useEffect, useState } from "react";

import CreateResourceForm from "@/components/admin/resources/CreateResourceForm";

import {
    getAllResources,
    updateResources,
    deleteResources,
    uploadImage,
} from "@/lib/services/admin/resourceServices";

type Resource = {
    _id: string;
    title: string;
    image?: string;
    tags?: string[];
    createdAt: string;
    updatedAt: string;
};

export default function Resources() {
    const [resources, setResources] = useState<Resource[]>([]);
    const [loading, setLoading] = useState(true);
    const [showForm, setShowForm] = useState(false);

    const [editingResource, setEditingResource] =
        useState<Resource | null>(null);

    const [uploadingImage, setUploadingImage] = useState(false);

    const [editForm, setEditForm] = useState({
        title: "",
        image: "",
        tags: "",
    });

    // FETCH RESOURCES
    const fetchResources = async () => {
        setLoading(true);

        try {
            const response = await getAllResources();

            if (response?.success) {
                setResources(response.data || []);
            }
        } catch (error) {
            console.log("Error fetching resources:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchResources();
    }, []);

    // DELETE RESOURCE
    const handleDelete = async (id: string) => {
        const confirmDelete = confirm(
            "Are you sure you want to delete this resource?"
        );

        if (!confirmDelete) return;

        try {
            const response = await deleteResources(id);

            if (response?.success) {
                fetchResources();
            }
        } catch (error) {
            console.log("Delete error:", error);
        }
    };

    // IMAGE UPLOAD
    const handleImageUpload = async (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const file = e.target.files?.[0];

        if (!file) return;

        try {
            setUploadingImage(true);

            const response = await uploadImage(file);

            console.log("Upload response:", response);

            // GET ONLY URL
            const imageUrl = response?.data?.[0]?.url;

            if (imageUrl) {
                setEditForm((prev) => ({
                    ...prev,
                    image: imageUrl,
                }));
            }
        } catch (error) {
            console.log("Image upload error:", error);
        } finally {
            setUploadingImage(false);
        }
    };

    // UPDATE RESOURCE
    const handleUpdate = async () => {
        if (!editingResource) return;

        try {
            const payload = {
                title: editForm.title,
                image: editForm.image,
                tags: editForm.tags
                    .split(",")
                    .map((tag) => tag.trim()),
            };

            const response = await updateResources(
                editingResource._id,
                payload
            );

            if (response?.success) {
                setEditingResource(null);

                setEditForm({
                    title: "",
                    image: "",
                    tags: "",
                });

                fetchResources();
            }
        } catch (error) {
            console.log("Update error:", error);
        }
    };

    return (
        <div className="min-h-screen bg-white p-8">
            <div className="max-w-7xl mx-auto">

                {/* HEADER */}
                <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                        <h1 className="text-2xl font-bold text-slate-900">
                            Resources
                        </h1>

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

                {/* CREATE FORM */}
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

                {/* EDIT MODAL */}
                {editingResource && (
                    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
                        <div className="bg-white w-full max-w-lg rounded-2xl p-6">

                            <h2 className="text-xl font-bold mb-5">
                                Edit Resource
                            </h2>

                            <div className="space-y-4">

                                {/* TITLE */}
                                <div>
                                    <label className="text-sm font-medium block mb-2">
                                        Title
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

                                {/* IMAGE UPLOAD */}
                                <div>
                                    <label className="text-sm font-medium block mb-2">
                                        Upload Image
                                    </label>

                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={handleImageUpload}
                                        className="w-full border border-slate-300 rounded-xl px-4 py-3 outline-none"
                                    />

                                    {uploadingImage && (
                                        <p className="text-sm text-blue-600 mt-2">
                                            Uploading image...
                                        </p>
                                    )}

                                    {/* IMAGE PREVIEW */}
                                    {editForm.image && (
                                        <div className="mt-4">
                                            <img
                                                src={editForm.image}
                                                alt="Preview"
                                                className="w-full h-48 object-cover rounded-xl border border-slate-200"
                                            />
                                        </div>
                                    )}
                                </div>

                                {/* TAGS */}
                                <div>
                                    <label className="text-sm font-medium block mb-2">
                                        Tags
                                    </label>

                                    <input
                                        type="text"
                                        value={editForm.tags}
                                        onChange={(e) =>
                                            setEditForm({
                                                ...editForm,
                                                tags: e.target.value,
                                            })
                                        }
                                        placeholder="web, mobile, strategy"
                                        className="w-full border border-slate-300 rounded-xl px-4 py-3 outline-none"
                                    />
                                </div>

                            </div>

                            {/* BUTTONS */}
                            <div className="flex items-center justify-end gap-3 mt-6">

                                <button
                                    onClick={() => {
                                        setEditingResource(null);

                                        setEditForm({
                                            title: "",
                                            image: "",
                                            tags: "",
                                        });
                                    }}
                                    className="px-4 py-2 rounded-xl bg-slate-200 text-slate-700"
                                >
                                    Cancel
                                </button>

                                <button
                                    onClick={handleUpdate}
                                    disabled={uploadingImage}
                                    className="px-4 py-2 rounded-xl bg-slate-900 text-white disabled:opacity-50"
                                >
                                    {uploadingImage
                                        ? "Uploading..."
                                        : "Update Resource"}
                                </button>

                            </div>
                        </div>
                    </div>
                )}

                {/* LOADING */}
                {loading ? (
                    <p className="text-slate-400 text-sm">
                        Loading...
                    </p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

                        {resources.map((r) => (
                            <div
                                key={r._id}
                                className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                            >

                                {/* IMAGE */}
                                <div className="h-52 overflow-hidden bg-slate-100">
                                    {r.image ? (
                                        <img
                                            src={r.image}
                                            alt={r.title}
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center text-slate-400 text-sm">
                                            No Image
                                        </div>
                                    )}
                                </div>

                                {/* CONTENT */}
                                <div className="p-5">

                                    {/* TITLE */}
                                    <h2 className="text-slate-900 font-semibold text-sm mb-3">
                                        {r.title}
                                    </h2>

                                    {/* TAGS */}
                                    <div className="flex flex-wrap gap-1.5 mb-4">
                                        {r.tags?.map((tag, i) => (
                                            <span
                                                key={i}
                                                className="bg-slate-100 text-slate-600 text-xs font-medium px-2.5 py-1 rounded-md"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* DATE */}
                                    <p className="text-xs text-slate-400 mb-4">
                                        {new Date(
                                            r.createdAt
                                        ).toLocaleDateString()}
                                    </p>

                                    {/* ACTION BUTTONS */}
                                    <div className="flex items-center gap-2">

                                        {/* EDIT */}
                                        <button
                                            onClick={() => {
                                                setEditingResource(r);

                                                setEditForm({
                                                    title: r.title || "",
                                                    image: r.image || "",
                                                    tags:
                                                        r.tags?.join(", ") || "",
                                                });
                                            }}
                                            className="bg-blue-600 hover:bg-blue-700 text-white text-xs px-3 py-2 rounded-lg"
                                        >
                                            Edit
                                        </button>

                                        {/* DELETE */}
                                        <button
                                            onClick={() =>
                                                handleDelete(r._id)
                                            }
                                            className="bg-red-600 hover:bg-red-700 text-white text-xs px-3 py-2 rounded-lg"
                                        >
                                            Delete
                                        </button>

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