import AppLayout from "@/layouts/app-layout";
import { usePage,  Link } from "@inertiajs/react";

export default function Index() {
    const { aiGroupedData,prozonons, year, month, auth }: any = usePage().props;

    const role = auth?.roles?.[0];

    return (
        <AppLayout>
            <div className="p-6 space-y-6">

                {/* HEADER */}
                <div className="flex justify-between items-center bg-green-600 text-white p-4 rounded-lg shadow">
                    <div className="font-semibold">📅 বছর: {year}</div>
                    <div className="font-semibold">📆 মাস: {month}</div>
                </div>

                {/* CREATE BUTTON (only user / technician) */}
                {(role === "aitechnician") && (
                    <div className="flex justify-end">
                        <Link
                            href={route("prozonons.create")}
                            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg shadow transition"
                        >
                            + Create AI Record
                        </Link>
                    </div>
                )}

                {/* ADMIN / ULO / DDai / Director VIEW */}
                {(role === "ulo" || role === "ddai" || role === "director") && (
                    <div className="space-y-6">
                        {Object.entries(aiGroupedData || {}).map(([year, months]: any) =>
                            Object.entries(months).map(([month, data]: any) => (
                                <div
                                    key={month}
                                    className="overflow-x-auto bg-white rounded-lg shadow"
                                >
                                    <div className="bg-gray-100 px-4 py-2 font-semibold text-gray-700">
                                        📊 {year} - {month}
                                    </div>

                                    <table className="min-w-full text-sm">
                                        <thead className="bg-blue-600 text-white">
                                            <tr>
                                                <th className="p-3 text-left">বাৎসরিক</th>
                                                <th className="p-3 text-left">মাসিক</th>
                                                <th className="p-3 text-left">নাম</th>
                                                <th className="p-3 text-left">মোবাইল</th>
                                                <th className="p-3 text-left">জাত</th>
                                                <th className="p-3 text-left">তারিখ</th>
                                                <th className="p-3 text-left">মন্তব্য</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            {data.data.map((ai: any, i: number) => (
                                                <tr
                                                    key={i}
                                                    className="border-b hover:bg-gray-50 transition"
                                                >
                                                    <td className="p-2">{ai.aiYearly}</td>
                                                    <td className="p-2">{ai.aiMasik}</td>
                                                    <td className="p-2">{ai.aiownBame}</td>
                                                    <td className="p-2">{ai.aiMobile}</td>
                                                    <td className="p-2">{ai.aiGat}</td>
                                                    <td className="p-2">{ai.aiDate}</td>
                                                    <td className="p-2">{ai.remark}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            ))
                        )}
                    </div>
                )}

                {/* USER VIEW */}
                {auth?.roles?.includes("aitechnician") && (
                    <div className="space-y-4">

                        <h2 className="text-xl font-bold text-gray-800">
                            🐄 কৃত্রিম প্রজনন তথ্য
                        </h2>

                        <input
                            type="text"
                            placeholder="Search..."
                            className="w-full border rounded-lg p-3 focus:ring focus:ring-blue-200"
                        />

                        <div className="overflow-x-auto bg-white shadow rounded-lg">
                            <table className="min-w-full text-sm">
                                <thead className="bg-blue-600 text-white">
                                    <tr>
                                        <th className="p-3">বাৎসরিক</th>
                                        <th className="p-3">মাসিক</th>
                                        <th className="p-3">নাম</th>
                                        <th className="p-3">মোবাইল</th>
                                        <th className="p-3">জাত</th>
                                        <th className="p-3">তারিখ</th>
                                        <th className="p-3">মন্তব্য</th>
                                    </tr>
                                </thead>
<tbody>
    {prozonons?.data?.length > 0 ? (
        prozonons.data.map((ai: any, i: number) => (
            <tr key={i} className="border-b hover:bg-gray-50">
                <td className="p-2">{ai.aiYearly}</td>
                <td className="p-2">{ai.aiMasik}</td>
                <td className="p-2">{ai.aiownBame}</td>
                <td className="p-2">{ai.aiMobile}</td>
                <td className="p-2">{ai.aiGat}</td>
                <td className="p-2">{ai.aiDate}</td>
                <td className="p-2">{ai.remark}</td>
            </tr>
        ))
    ) : (
        <tr>
            <td colSpan={7} className="text-center p-4 text-gray-500">
                No data found
            </td>
        </tr>
    )}
</tbody>
                            </table>
                        </div>
                    </div>
                )}
            </div>
        </AppLayout>
    );
}
