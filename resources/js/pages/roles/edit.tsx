import AppLayout from "@/layouts/app-layout";
import { Head, useForm, usePage, router } from "@inertiajs/react";

interface Permission {
    id: number;
    name: string;
}

export default function Edit() {
    const { role, permissions }: any = usePage().props;

    const { data, setData, put, processing } = useForm({
        name: role.name || "",
        permissions: role.permissions.map((p: Permission) => p.name) || [],
    });

    // 🟢 checkbox toggle
    const handleCheckbox = (permission: string) => {
        if (data.permissions.includes(permission)) {
            setData(
                "permissions",
                data.permissions.filter((p: string) => p !== permission)
            );
        } else {
            setData("permissions", [...data.permissions, permission]);
        }
    };

    // 🚀 submit update
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        put(`/roles/${role.id}`);
    };

    return (
        <AppLayout>
            <Head title="Edit Role" />

            <div className="p-6 max-w-4xl mx-auto">
                <h1 className="text-2xl font-bold mb-6">Edit Role</h1>

                <form
                    onSubmit={handleSubmit}
                    className="bg-white shadow rounded-lg p-6 space-y-6"
                >
                    {/* Role Name */}
                    <div>
                        <label className="block mb-1 font-medium">
                            Role Name
                        </label>
                        <input
                            type="text"
                            value={data.name}
                            onChange={(e) =>
                                setData("name", e.target.value)
                            }
                            className="w-full border rounded px-3 py-2"
                        />
                    </div>

                    {/* Permissions */}
                    <div>
                        <label className="block mb-2 font-medium">
                            Permissions
                        </label>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
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
                            {processing ? "Updating..." : "Update Role"}
                        </button>
                    </div>
                </form>
            </div>
        </AppLayout>
    );
}
