import AppLayout from "@/layouts/app-layout";
import { Head, useForm, usePage, router, Link } from "@inertiajs/react";

interface Role {
    id: number;
    name: string;
}

export default function Create() {
    const { roles, errors }: any = usePage().props;

    const { data, setData, post, processing } = useForm({
        name: "",
        email: "",
        password: "",
        role: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post("/users");
    };

    return (
        <AppLayout>
            <Head title="Create User" />

            <div className="p-4 sm:p-6">
                {/* HEADER */}
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 gap-3">
                    <div>
                        <h1 className="text-xl sm:text-2xl font-bold">
                            Create User
                        </h1>
                        <p className="text-gray-500 text-sm">
                            Add new user with role
                        </p>
                    </div>

                    <Link
                        href={route("users.index")}
                        className="w-full sm:w-auto text-center bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg shadow"
                    >
                        ← Back
                    </Link>
                </div>

                {/* FORM CARD */}
                <div className="max-w-3xl mx-auto">
                    <form
                        onSubmit={handleSubmit}
                        className="bg-white shadow-lg rounded-xl p-4 sm:p-6 space-y-5"
                    >
                        {/* GRID */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

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
                                    placeholder="Enter name"
                                />
                                {errors.name && (
                                    <p className="text-red-500 text-sm">
                                        {errors.name}
                                    </p>
                                )}
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
                                    placeholder="Enter email"
                                />
                                {errors.email && (
                                    <p className="text-red-500 text-sm">
                                        {errors.email}
                                    </p>
                                )}
                            </div>

                            {/* Password */}
                            <div>
                                <label className="block mb-1 font-medium">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    value={data.password}
                                    onChange={(e) =>
                                        setData("password", e.target.value)
                                    }
                                    className="w-full border rounded-lg px-3 py-2 focus:ring focus:ring-blue-200"
                                    placeholder="Enter password"
                                />
                                {errors.password && (
                                    <p className="text-red-500 text-sm">
                                        {errors.password}
                                    </p>
                                )}
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

                                {errors.role && (
                                    <p className="text-red-500 text-sm">
                                        {errors.role}
                                    </p>
                                )}
                            </div>


                        </div>

                        {/* BUTTONS */}
                        <div className="flex flex-col sm:flex-row justify-end gap-3 pt-4">
                            <button
                                type="button"
                                onClick={() => router.visit("/users")}
                                className="w-full sm:w-auto px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
                            >
                                Cancel
                            </button>

                            <button
                                type="submit"
                                disabled={processing}
                                className="w-full sm:w-auto px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                            >
                                {processing ? "Creating..." : "Create User"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </AppLayout>
    );
}
