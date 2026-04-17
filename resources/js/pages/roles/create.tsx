import AppLayout from "@/layouts/app-layout";
import { Head, useForm, usePage, router } from "@inertiajs/react";
import { useState } from "react";

interface Permission {
    id: number;
    name: string;
}

export default function Create() {
    const { permissions, errors }: any = usePage().props;

    const { data, setData, post, processing } = useForm({
        name: "",
        permissions: [] as string[],
    });

    // 🟢 handle checkbox
    const handleCheckbox = (permission: string) => {
        if (data.permissions.includes(permission)) {
            setData(
                "permissions",
                data.permissions.filter((p) => p !== permission)
            );
        } else {
            setData("permissions", [...data.permissions, permission]);
        }
    };

    // 🚀 submit form
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post("/roles");
    };

    return (
        <AppLayout>
            <Head title="Create Role" />

            <div className="p-6 max-w-3xl mx-auto">
                <h1 className="text-2xl font-bold mb-4">Create Role</h1>

                <form
                    onSubmit={handleSubmit}
                    className="bg-white shadow rounded-lg p-6"
                >
                    {/* Role Name */}
                    <div className="mb-4">
                        <label className="block mb-1 font-medium">
                            Role Name
                        </label>
                        <input
                            type="text"
                            value={data.name}
                            onChange={(e) =>
                                setData("name", e.target.value)
                            }
                            className="w-full border rounded px-3 py-2 focus:ring focus:ring-blue-200"
                            placeholder="Enter role name"
                        />

                        {errors.name && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.name}
                            </p>
                        )}
                    </div>

                    {/* Permissions */}
                    <div className="mb-6">
                        <label className="block mb-2 font-medium">
                            Permissions
                        </label>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                            {permissions.map((perm: Permission) => (
                                <label
                                    key={perm.id}
                                    className="flex items-center gap-2 border p-2 rounded hover:bg-gray-50"
                                >
                                    <input
                                        type="checkbox"
                                        checked={data.permissions.includes(
                                            perm.name
                                        )}
                                        onChange={() =>
                                            handleCheckbox(perm.name)
                                        }
                                    />
                                    <span className="text-sm">
                                        {perm.name}
                                    </span>
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-end gap-2">
                        <button
                            type="button"
                            onClick={() => router.get("/roles")}
                            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            disabled={processing}
                            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                        >
                            {processing ? "Saving..." : "Create Role"}
                        </button>
                    </div>
                </form>
            </div>
        </AppLayout>
    );
}
