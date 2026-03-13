"use client";

import { createSolution } from "@/lib/appwrite/SmartSolutions";
import { uploadImage } from "@/lib/appwrite/uploadImage";
import { useRef, useState } from "react";

type Props = {
    onSuccess: () => void;
};

const CreateSolutionForm = ({ onSuccess }: Props) => {
    const [form, setForm] = useState({
        title: "", subtitle: "", description: "", features: "", order: ""
    });
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const [uploading, setUploading] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null;
        setImageFile(file);
        if (file) setImagePreview(URL.createObjectURL(file));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            let imageId = null;
            let illustration = null;

            if (imageFile) {
                setUploading(true);
                imageId = await uploadImage(imageFile);
                illustration = `${process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT}/storage/buckets/${process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID}/files/${imageId}/view?project=${process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID}`;
                setUploading(false);
            }

            await createSolution({
                title: form.title,
                subtitle: form.subtitle,
                description: form.description,
                features: form.features,
                order: Number(form.order),
                imageId,
                illustration,
            });

            setForm({ title: "", subtitle: "", description: "", features: "", order: "" });
            setImageFile(null);
            setImagePreview(null);
            onSuccess();
        } catch (error) {
            console.error("Create solution error:", error);
            setUploading(false);
            alert("Something went wrong");
        }
    };

    const inputClass = "w-full px-3 py-2.5 text-sm border border-slate-200 rounded-lg outline-none focus:border-slate-400 focus:ring-2 focus:ring-slate-100 bg-white transition-all";

    return (
        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-7">
            <h2 className="text-base font-bold text-slate-900 mb-5">Create New Solution</h2>

            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                    <div>
                        <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                            Title <span className="text-red-500">*</span>
                        </label>
                        <input type="text" name="title" value={form.title} onChange={handleChange}
                            className={inputClass} placeholder="e.g. Product Engineering" required />
                    </div>

                    <div>
                        <label className="block text-xs font-semibold text-slate-600 mb-1.5">Subtitle</label>
                        <input type="text" name="subtitle" value={form.subtitle} onChange={handleChange}
                            className={inputClass} placeholder="e.g. End-to-End Product Development" />
                    </div>

                    <div className="md:col-span-2">
                        <label className="block text-xs font-semibold text-slate-600 mb-1.5">Description</label>
                        <textarea name="description" value={form.description} onChange={handleChange}
                            rows={3} className={`${inputClass} resize-none`}
                            placeholder="Brief description…" />
                    </div>

                    <div className="md:col-span-2">
                        <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                            Features <span className="text-slate-400 font-normal">(comma-separated)</span>
                        </label>
                        <input type="text" name="features" value={form.features} onChange={handleChange}
                            className={inputClass} placeholder="e.g. Custom Web Apps, UI/UX Development" />
                    </div>

                    <div className="md:col-span-2">
                        <label className="block text-xs font-semibold text-slate-600 mb-1.5">Illustration</label>
                        <input ref={fileInputRef} type="file" accept="image/*"
                            className="hidden" onChange={handleFileChange} />

                        {imagePreview ? (
                            <div className="flex items-center gap-4">
                                <img src={imagePreview} alt="Preview"
                                    className="h-16 w-24 object-cover rounded-lg border border-slate-200" />
                                <div className="flex flex-col gap-1.5">
                                    <p className="text-xs text-slate-400 truncate max-w-xs">{imageFile?.name}</p>
                                    <button type="button" onClick={() => fileInputRef.current?.click()}
                                        className="text-xs font-medium text-slate-700 hover:text-slate-900 transition-colors cursor-pointer text-left">
                                        Replace image
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <button type="button" onClick={() => fileInputRef.current?.click()}
                                className="w-full flex flex-col items-center justify-center gap-2 border-2 border-dashed border-slate-200 rounded-lg py-6 text-slate-400 hover:border-slate-400 hover:text-slate-600 transition-all cursor-pointer bg-slate-50">
                                <span className="text-2xl">🖼️</span>
                                <span className="text-sm font-medium">Click to upload image</span>
                                <span className="text-xs">PNG, JPG, WEBP supported</span>
                            </button>
                        )}
                    </div>

                    <div>
                        <label className="block text-xs font-semibold text-slate-600 mb-1.5">Order</label>
                        <input type="number" name="order" value={form.order} onChange={handleChange}
                            className={inputClass} placeholder="e.g. 1" />
                    </div>

                </div>

                <div className="flex justify-end mt-6 pt-5 border-t border-slate-100">
                    <button type="submit" disabled={uploading}
                        className="px-5 py-2 text-sm font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-700 transition-all disabled:opacity-50 cursor-pointer">
                        {uploading ? "Uploading…" : "Create Solution"}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CreateSolutionForm;