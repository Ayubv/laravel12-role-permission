import AppLayout from "@/layouts/app-layout";
import { Head, useForm, usePage, router, Link } from "@inertiajs/react";

interface Role {
    id: number;
    name: string;
}

export default function Edit() {
    const { user, roles }: any = usePage().props;

    const { data, setData, put, processing } = useForm({
        name: user.name || "",
        email: user.email || "",
        password: "",
        role: user.roles?.[0]?.name || "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        put(`/users/${user.id}`);
    };

    return (
        <AppLayout>
            <Head title="Edit User" />

            <div className="p-4 sm:p-6">
                {/* HEADER */}
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 gap-3">
                    <h1 className="text-2xl font-bold">Edit User</h1>

                    <Link
                        href={route("users.index")}
                        className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg shadow text-center"
                    >
                        ← Back
                    </Link>
                </div>

                {/* MAIN CARD */}
                <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-xl p-6">
                    <form onSubmit={handleSubmit}>
                        {/* GRID LAYOUT */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                            {/* LEFT SIDE */}
                            <div className="space-y-5">
                                {/* Name */}
                                <div>
                                    <label className="block mb-1 font-medium">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        value={data.name}
                                        onChange={(e) =>
                                            setData("name", e.target.value)
                                        }
                                        className="w-full border rounded-lg px-3 py-2 focus:ring focus:ring-blue-200"
                                    />
                                </div>

                                {/* Email */}
                                <div>
                                    <label className="block mb-1 font-medium">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        value={data.email}
                                        onChange={(e) =>
                                            setData("email", e.target.value)
                                        }
                                        className="w-full border rounded-lg px-3 py-2 focus:ring focus:ring-blue-200"
                                    />
                                </div>
                            </div>

                            {/* RIGHT SIDE */}
                            <div className="space-y-5">
                                {/* Password */}
                                <div>
                                    <label className="block mb-1 font-medium">
                                        Password (optional)
                                    </label>
                                    <input
                                        type="password"
                                        value={data.password}
                                        onChange={(e) =>
                                            setData("password", e.target.value)
                                        }
                                        className="w-full border rounded-lg px-3 py-2 focus:ring focus:ring-blue-200"
                                        placeholder="Leave empty if no change"
                                    />
                                </div>

                                {/* Role */}
                                <div>
                                    <label className="block mb-1 font-medium">
                                        Role
                                    </label>
                                    <select
                                        value={data.role}
                                        onChange={(e) =>
                                            setData("role", e.target.value)
                                        }
                                        className="w-full border rounded-lg px-3 py-2 focus:ring focus:ring-blue-200"
                                    >
                                        <option value="">Select Role</option>
                                        {roles.map((role: Role) => (
                                            <option
                                                key={role.id}
                                                value={role.name}
                                            >
                                                {role.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* BUTTONS */}
                        <div className="flex justify-end gap-3 mt-8">
                            <button
                                type="button"
                                onClick={() => router.visit("/users")}
                                className="px-5 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
                            >
                                Cancel
                            </button>

                            <button
                                type="submit"
                                disabled={processing}
                                className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                            >
                                {processing ? "Updating..." : "Update User"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </AppLayout>
    );
}
