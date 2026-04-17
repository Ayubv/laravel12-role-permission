import AppLayout from "@/layouts/app-layout";
import { Head, usePage, Link } from "@inertiajs/react";

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

export default function Show() {
    const { user }: any = usePage().props;

    return (
        <AppLayout>
            <Head title="User Details" />

            <div className="p-4 sm:p-6">
                {/* HEADER */}
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 gap-3">
                    <div>
                        <h1 className="text-xl sm:text-2xl font-bold">
                            User Details
                        </h1>
                        <p className="text-gray-500 text-sm">
                            View user information
                        </p>
                    </div>

                    <Link
                        href={route("users.index")}
                        className="w-full sm:w-auto text-center bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg shadow"
                    >
                        ← Back
                    </Link>
                </div>

                {/* CARD */}
                <div className="bg-white shadow-lg rounded-xl overflow-hidden">
                    {/* TABLE (Desktop) */}
                    <div className="hidden md:block overflow-x-auto">
                        <table className="min-w-full text-sm text-left">
                            <thead className="bg-gray-100 text-gray-700 uppercase text-xs">
                                <tr>
                                    <th className="px-4 py-3 border">#</th>
                                    <th className="px-4 py-3 border">Name</th>
                                    <th className="px-4 py-3 border">Email</th>
                                    <th className="px-4 py-3 border">Roles</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr className="hover:bg-gray-50">
                                    <td className="px-4 py-3 border">
                                        {user.id}
                                    </td>
                                    <td className="px-4 py-3 border font-medium">
                                        {user.name}
                                    </td>
                                    <td className="px-4 py-3 border">
                                        {user.email}
                                    </td>
                                    <td className="px-4 py-3 border">
                                        {user.roles?.length > 0
                                            ? user.roles
                                                  .map((r: Role) => r.name)
                                                  .join(", ")
                                            : "No Role"}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* MOBILE VIEW (Card Style) */}
                    <div className="md:hidden p-4 space-y-4">
                        <div className="border rounded-lg p-4 shadow-sm">
                            <p className="text-sm text-gray-500">ID</p>
                            <p className="font-medium">{user.id}</p>
                        </div>

                        <div className="border rounded-lg p-4 shadow-sm">
                            <p className="text-sm text-gray-500">Name</p>
                            <p className="font-medium">{user.name}</p>
                        </div>

                        <div className="border rounded-lg p-4 shadow-sm">
                            <p className="text-sm text-gray-500">Email</p>
                            <p className="font-medium break-all">
                                {user.email}
                            </p>
                        </div>

                        <div className="border rounded-lg p-4 shadow-sm">
                            <p className="text-sm text-gray-500">Roles</p>
                            <p className="font-medium">
                                {user.roles?.length > 0
                                    ? user.roles
                                          .map((r: Role) => r.name)
                                          .join(", ")
                                    : "No Role"}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
