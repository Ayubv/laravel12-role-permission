import AppLayout from "@/layouts/app-layout";
import { Head, usePage, Link, router } from "@inertiajs/react";
import { useState } from "react";
import can from "@/lib/can";

interface Role {
    id: number;
    name: string;
}

interface User {
    id: number;
    name: string;
    email: string;
    roles: Role[];
}

export default function Index() {
    const { users, roles, flash }: any = usePage().props;

    const [selectedRole, setSelectedRole] = useState<{ [key: number]: string }>({});

    // 🟢 assign role
    const handleAssignRole = (userId: number) => {
        const role = selectedRole[userId];

        if (!role) {
            alert("Please select a role first!");
            return;
        }


    };
    // 🔴 delete user
    const handleDelete = (id: number) => {
        if (confirm("Are you sure?")) {
            router.delete(route("users.destroy", id));
        }
    };

    return (
        <AppLayout>
            <Head title="Users" />

            <div className="p-6">
                <h1 className="text-2xl font-bold mb-4">User Management</h1>

                <div className="flex justify-between items-center mb-6">
                    <div>

                        <p className="text-gray-500 text-sm">
                            Manage users, roles and permissions
                        </p>
                    </div>

                    {can("user.create") && (
                        <Link
                            href={route("users.create")}
                            className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-lg shadow"
                        >
                            + Create User
                        </Link>
                    )}
                </div>

                {/* Flash Message */}
                {flash?.success && (
                    <div className="mb-4 p-3 bg-green-100 text-green-700 rounded">
                        {flash.success}
                    </div>
                )}

                <div className="overflow-x-auto bg-white shadow rounded-lg">
                    <table className="min-w-full text-sm text-left">
                        <thead className="bg-gray-100 text-gray-700 uppercase text-xs">
                            <tr>
                                <th className="px-4 py-3 border">#</th>
                                <th className="px-4 py-3 border">Name</th>
                                <th className="px-4 py-3 border">Email</th>
                                <th className="px-4 py-3 border">Role</th>

                                <th className="px-4 py-3 border text-center">Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {users.map((user: User, index: number) => (
                                <tr key={user.id} className="hover:bg-gray-50">
                                    <td className="px-4 py-2 border">
                                        {index + 1}
                                    </td>

                                    <td className="px-4 py-2 border font-medium">
                                        {user.name}
                                    </td>

                                    <td className="px-4 py-2 border">
                                        {user.email}
                                    </td>

                                    {/* Current Role */}
                                    <td className="px-4 py-2 border">
                                        {user.roles?.length > 0
                                            ? user.roles.map((r) => r.name).join(", ")
                                            : "No Role"}
                                    </td>



                                    {/* Actions */}
                                    <td className="px-4 py-2 border text-center">
                                        <div className="flex justify-center gap-2">

                                            <Link
                                                href={route("users.show", user.id)}
                                                className="bg-green-400 px-3 py-1 rounded text-white hover:bg-green-500"
                                            >
                                                View
                                            </Link>
                                            {can("user.edit") && (
                                                <Link
                                                    href={route("users.edit", user.id)}
                                                    className="bg-yellow-400 px-3 py-1 rounded text-white hover:bg-yellow-500"
                                                >
                                                    Edit
                                                </Link>
                                            )}
                                            {can("user.delete") &&
                                                <button
                                                    onClick={() => {
                                                        if (confirm("Are you sure?")) {
                                                            router.delete(route("users.destroy", user.id));
                                                        }
                                                    }}
                                                    className="bg-red-500 px-3 py-1 rounded text-white hover:bg-red-600"
                                                >
                                                    Delete
                                                </button>
                                            }


                                        </div>
                                    </td>
                                </tr>
                            ))}

                            {users.length === 0 && (
                                <tr>
                                    <td
                                        colSpan={6}
                                        className="text-center py-4 text-gray-500"
                                    >
                                        No users found
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </AppLayout>
    );
}
