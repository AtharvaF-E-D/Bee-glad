"use client";

import { createResource } from "@/lib/appwrite/resources";
import { uploadImage } from "@/lib/appwrite/uploadImage";
import { useRef, useState } from "react";

function slugify(str: string) {
    return str.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
}

const emptyForm = {
    Title: "", Slug: "", Image: "", tags: "", description: "", published: false, imageId: "",
};

type Props = {
    onSuccess?: () => void;
};

export default function CreateResourceForm({ onSuccess }: Props) {
    const [form, setForm] = useState(emptyForm);
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [submitting, setSubmitting] = useState(false);
    const [imageUploading, setImageUploading] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const validate = () => {
        const e: Record<string, string> = {};
        if (!form.Title.trim()) e.Title = "Title is required";
        if (!form.Slug.trim()) e.Slug = "Slug is required";
        return e;
    };

    const handleChange = (field: string, value: string | boolean) => {
        setForm((f) => {
            const next = { ...f, [field]: value };
            if (field === "Title" && typeof value === "string") next.Slug = slugify(value);
            return next;
        });
        setErrors((e) => ({ ...e, [field]: "" }));
    };

    const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;
        e.target.value = "";
        setImageUploading(true);
        try {
            const fileId = await uploadImage(file);
            const BUCKET_ID = "69afafbf002a973f7da2";
            const PROJECT_ID = process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!;
            const ENDPOINT = process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT ?? "https://cloud.appwrite.io/v1";
            const imageUrl = `${ENDPOINT}/storage/buckets/${BUCKET_ID}/files/${fileId}/view?project=${PROJECT_ID}`;
            setForm((f) => ({ ...f, Image: imageUrl, imageId: fileId }));
        } catch {
            alert("Image upload failed.");
        } finally {
            setImageUploading(false);
        }
    };

    const handleSubmit = async () => {
        const e = validate();
        if (Object.keys(e).length) { setErrors(e); return; }
        setSubmitting(true);
        try {
            await createResource(form);
            onSuccess?.();
        } catch {
            alert("Failed to create resource.");
        } finally {
            setSubmitting(false);
        }
    };

    const inputBase = "w-full px-3 py-2.5 text-sm border rounded-lg outline-none transition-all bg-white";
    const inputNormal = "border-slate-200 focus:border-slate-400 focus:ring-2 focus:ring-slate-100";
    const inputError = "border-red-400 bg-red-50";

    return (
        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-7">
            <h2 className="text-base font-bold text-slate-900 mb-5">Create New Resource</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                        Title <span className="text-red-500">*</span>
                    </label>
                    <input
                        className={`${inputBase} ${errors.Title ? inputError : inputNormal}`}
                        placeholder="e.g. Getting Started Guide"
                        value={form.Title}
                        onChange={(e) => handleChange("Title", e.target.value)}
                    />
                    {errors.Title && <p className="text-red-500 text-xs mt-1">{errors.Title}</p>}
                </div>

                <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                        Slug <span className="text-red-500">*</span>
                    </label>
                    <input
                        className={`${inputBase} font-mono ${errors.Slug ? inputError : inputNormal}`}
                        placeholder="auto-generated"
                        value={form.Slug}
                        onChange={(e) => handleChange("Slug", slugify(e.target.value))}
                    />
                    {errors.Slug && <p className="text-red-500 text-xs mt-1">{errors.Slug}</p>}
                </div>

                <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                        Tags <span className="text-slate-400 font-normal">(comma-separated)</span>
                    </label>
                    <input
                        className={`${inputBase} ${inputNormal}`}
                        placeholder="e.g. beginner, api, docs"
                        value={form.tags}
                        onChange={(e) => handleChange("tags", e.target.value)}
                    />
                </div>

                <div className="md:col-span-2">
                    <label className="block text-xs font-semibold text-slate-600 mb-1.5">Image</label>
                    <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleImageUpload}
                    />
                    {form.Image ? (
                        <div className="flex items-center gap-4">
                            <img
                                src={form.Image}
                                alt="Preview"
                                className="h-16 w-24 object-cover rounded-lg border border-slate-200"
                            />
                            <div className="flex flex-col gap-1.5">
                                <p className="text-xs text-slate-400 font-mono truncate max-w-xs">{form.imageId}</p>
                                <button
                                    type="button"
                                    onClick={() => fileInputRef.current?.click()}
                                    disabled={imageUploading}
                                    className="text-xs font-medium text-slate-700 hover:text-slate-900 transition-colors disabled:opacity-50 cursor-pointer text-left"
                                >
                                    {imageUploading ? "Uploading…" : "Replace image"}
                                </button>
                            </div>
                        </div>
                    ) : (
                        <button
                            type="button"
                            onClick={() => fileInputRef.current?.click()}
                            disabled={imageUploading}
                            className="w-full flex flex-col items-center justify-center gap-2 border-2 border-dashed border-slate-200 rounded-lg py-6 text-slate-400 hover:border-slate-400 hover:text-slate-600 transition-all disabled:opacity-50 cursor-pointer bg-slate-50"
                        >
                            {imageUploading ? (
                                <span className="text-sm font-medium">Uploading…</span>
                            ) : (
                                <>
                                    <span className="text-2xl">🖼️</span>
                                    <span className="text-sm font-medium">Click to upload image</span>
                                    <span className="text-xs">PNG, JPG, WEBP supported</span>
                                </>
                            )}
                        </button>
                    )}
                </div>

                <div className="md:col-span-2">
                    <label className="block text-xs font-semibold text-slate-600 mb-1.5">Description</label>
                    <textarea
                        className={`${inputBase} ${inputNormal} resize-none`}
                        rows={3}
                        placeholder="Brief description…"
                        value={form.description}
                        onChange={(e) => handleChange("description", e.target.value)}
                    />
                </div>

                <div className="md:col-span-2 flex items-center gap-3">
                    <button
                        type="button"
                        onClick={() => handleChange("published", !form.published)}
                        className={`relative w-10 rounded-full transition-colors duration-200 flex-shrink-0 ${form.published ? "bg-slate-900" : "bg-slate-200"
                            }`}
                        style={{ height: "22px" }}
                    >
                        <span className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform duration-200 ${form.published ? "translate-x-[18px]" : "translate-x-0"
                            }`} />
                    </button>
                    <span className="text-sm font-medium text-slate-700">Published</span>
                </div>
            </div>

            <div className="flex justify-end gap-3 mt-6 pt-5 border-t border-slate-100">
                <button
                    onClick={handleSubmit}
                    disabled={submitting}
                    className="px-5 py-2 text-sm font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-700 transition-all disabled:opacity-50 cursor-pointer"
                >
                    {submitting ? "Creating…" : "Create Resource"}
                </button>
            </div>
        </div>
    );
}