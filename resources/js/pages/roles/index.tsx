import AppLayout from "@/layouts/app-layout";
import { Head, usePage, router, Link } from "@inertiajs/react";
import can from "@/lib/can";
interface Permission {
    id: number;
    name: string;
}

interface Role {
    id: number;
    name: string;
    permissions: Permission[];
}

export default function Index() {
    const { roles, flash }: any = usePage().props;

    // 🔴 delete role
    const handleDelete = (id: number) => {
        if (confirm("Are you sure?")) {
            router.delete(`/roles/${id}`);
        }
    };

    return (
        <AppLayout>
            <Head title="Roles" />

            <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                    <h1 className="text-2xl font-bold">Role Management</h1>
                    {can("roles.create") && (
                        <Link
                            href={route("roles.create")}
                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                        >
                            + Create Role
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
                                <th className="px-4 py-3 border">Role Name</th>
                                <th className="px-4 py-3 border">Permissions</th>
                                <th className="px-4 py-3 border text-center">Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {roles.map((role: Role, index: number) => (
                                <tr key={role.id} className="hover:bg-gray-50">
                                    <td className="px-4 py-2 border">
                                        {index + 1}
                                    </td>

                                    <td className="px-4 py-2 border font-semibold">
                                        {role.name}
                                    </td>

                                    {/* Permissions list */}
                                    <td className="px-4 py-2 border">
                                        <div className="flex flex-wrap gap-1">
                                            {role.permissions.length > 0 ? (
                                                role.permissions.map((perm) => (
                                                    <span
                                                        key={perm.id}
                                                        className="bg-gray-200 text-xs px-2 py-1 rounded"
                                                    >
                                                        {perm.name}
                                                    </span>
                                                ))
                                            ) : (
                                                <span className="text-gray-400">
                                                    No Permission
                                                </span>
                                            )}
                                        </div>
                                    </td>

                                    {/* Actions */}
                                    <td className="px-4 py-2 border text-center">
                                        <div className="flex justify-center gap-2">
                                            {can("roles.edit") && (
                                                <button
                                                    type="button"
                                                    onClick={() => router.visit(route("roles.edit", role.id))}
                                                    className="bg-yellow-400 px-3 py-1 rounded text-white hover:bg-yellow-500"
                                                >
                                                    Edit
                                                </button>
                                            )}
                                            {can("roles.delete") && (
                                                <button
                                                    onClick={() =>
                                                        handleDelete(role.id)
                                                    }
                                                    className="bg-red-500 px-3 py-1 rounded text-white hover:bg-red-600"
                                                >
                                                    Delete
                                                </button>
                                            )}
                                        </div>
                                    </td>
                                </tr>
                            ))}

                            {roles.length === 0 && (
                                <tr>
                                    <td
                                        colSpan={4}
                                        className="text-center py-4 text-gray-500"
                                    >
                                        No roles found
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
