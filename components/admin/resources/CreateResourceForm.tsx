"use client";

import { uploadImage, createResource, getAllResources, updateResources, deleteResources } from "@/lib/services/admin/resourceServices";
import { useRef, useState } from "react";

const emptyForm = {
    title: "",
    image: "",
    tags: "",
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

        if (!form.title.trim()) {
            e.title = "Title is required";
        }

        if (!form.image.trim()) {
            e.image = "Image is required";
        }

        return e;
    };

    const handleChange = (field: string, value: string) => {

        setForm((prev) => ({
            ...prev,
            [field]: value,
        }));

        setErrors((prev) => ({
            ...prev,
            [field]: "",
        }));
    };

    const handleImageUpload = async (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {

        const file = e.target.files?.[0];

        if (!file) return;

        setImageUploading(true);

        try {

            const response = await uploadImage(file);

            console.log("UPLOAD RESPONSE", response);

            const imageUrl = response?.data?.[0]?.url;

            if (!imageUrl) {
                throw new Error("Image URL not found");
            }

            setForm((prev) => ({
                ...prev,
                image: imageUrl,
            }));

        } catch (error) {

            console.log(error);
            alert("Image upload failed");

        } finally {

            setImageUploading(false);

        }
    };

    const handleSubmit = async () => {

        const validationErrors = validate();

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setSubmitting(true);

        try {

            const payload = {
                title: form.title,
                image: form.image,
                tags: form.tags
                    .split(",")
                    .map((tag) => tag.trim())
                    .filter((tag) => tag !== ""),
            };

            console.log("RESOURCE PAYLOAD", payload);

            const response = await createResource(payload);

            console.log("CREATE RESOURCE RESPONSE", response);

            alert("Resource created successfully");

            setForm(emptyForm);

            onSuccess?.();

        } catch (error) {

            console.log(error);
            alert("Failed to create resource");

        } finally {

            setSubmitting(false);

        }
    };

    const inputBase =
        "w-full px-3 py-2.5 text-sm border rounded-lg outline-none transition-all bg-white";

    const inputNormal =
        "border-slate-200 focus:border-slate-400 focus:ring-2 focus:ring-slate-100";

    const inputError =
        "border-red-400 bg-red-50";

    return (
        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-7">

            <h2 className="text-base font-bold text-slate-900 mb-5">
                Create New Resource
            </h2>

            <div className="space-y-5">

                {/* TITLE */}
                <div>

                    <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                        Title <span className="text-red-500">*</span>
                    </label>

                    <input
                        type="text"
                        placeholder="Enter title"
                        value={form.title}
                        onChange={(e) =>
                            handleChange("title", e.target.value)
                        }
                        className={`${inputBase} ${errors.title ? inputError : inputNormal}`}
                    />

                    {errors.title && (
                        <p className="text-red-500 text-xs mt-1">
                            {errors.title}
                        </p>
                    )}

                </div>

                {/* TAGS */}
                <div>

                    <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                        Tags
                    </label>

                    <input
                        type="text"
                        placeholder="react, nextjs, nodejs"
                        value={form.tags}
                        onChange={(e) =>
                            handleChange("tags", e.target.value)
                        }
                        className={`${inputBase} ${inputNormal}`}
                    />

                    <p className="text-xs text-slate-400 mt-1">
                        Add comma separated tags
                    </p>

                </div>

                {/* IMAGE */}
                <div>

                    <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                        Image <span className="text-red-500">*</span>
                    </label>

                    <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleImageUpload}
                    />

                    {form.image ? (

                        <div className="flex items-center gap-4">

                            <img
                                src={form.image}
                                alt="Preview"
                                className="w-28 h-20 object-cover rounded-lg border border-slate-200"
                            />

                            <div className="flex flex-col gap-2">

                                <p className="text-xs text-green-600 font-medium">
                                    Image uploaded successfully
                                </p>

                                <button
                                    type="button"
                                    onClick={() => fileInputRef.current?.click()}
                                    disabled={imageUploading}
                                    className="text-sm text-slate-700 hover:text-black cursor-pointer"
                                >
                                    {imageUploading
                                        ? "Uploading..."
                                        : "Replace Image"}
                                </button>

                            </div>

                        </div>

                    ) : (

                        <button
                            type="button"
                            onClick={() => fileInputRef.current?.click()}
                            disabled={imageUploading}
                            className="w-full border-2 border-dashed border-slate-300 rounded-lg py-10 text-sm text-slate-500 hover:border-slate-500 transition-all cursor-pointer"
                        >

                            {imageUploading
                                ? "Uploading..."
                                : "Click to Upload Image"}

                        </button>

                    )}

                    {errors.image && (
                        <p className="text-red-500 text-xs mt-1">
                            {errors.image}
                        </p>
                    )}

                </div>

            </div>

            <div className="flex justify-end mt-6">

                <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={submitting}
                    className="px-5 py-2.5 bg-slate-900 text-white rounded-lg text-sm font-semibold hover:bg-slate-700 transition-all disabled:opacity-50 cursor-pointer"
                >

                    {submitting
                        ? "Creating..."
                        : "Create Resource"}

                </button>

            </div>

        </div>
    );
}