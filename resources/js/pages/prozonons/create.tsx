import AppLayout from "@/layouts/app-layout";
import { Head, useForm } from "@inertiajs/react";

export default function Create() {
    const { data, setData, post, processing, errors } = useForm({
        aiYearly: "",
        aiMasik: "",
        aiRepet: "",
        aiownBame: "",
        aiFaName: "",
        aiVill: "",
        aiMobile: "",
        aiGat: "",
        oxeType: "",
        semenType: "",
        aiDate: "",
        expireDate: "",
        preg_test: "",
        remark: "",
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route("prozonons.store"));
    };

    return (
        <AppLayout>
            <Head title="Create AI Record" />

            <div className="max-w-4xl mx-auto p-6 bg-white shadow rounded-lg">
                <h1 className="text-2xl font-bold mb-6">Create AI Record</h1>

                <form
    onSubmit={submit}
    className="bg-white shadow-lg rounded-xl p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-5"
>
    {/* Title */}
    <div className="md:col-span-2 mb-2">
        <h2 className="text-xl font-bold text-gray-800">
            🐄 AI Record Form
        </h2>
        <p className="text-sm text-gray-500">
            Fill all required information carefully
        </p>
    </div>

    {/* AI Yearly */}
    <div>
        <label className="text-sm font-medium text-gray-700">AI Yearly</label>
        <input
            type="text"
            className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            value={data.aiYearly}
            onChange={(e) => setData("aiYearly", e.target.value)}
        />
        {errors.aiYearly && (
            <p className="text-red-500 text-sm mt-1">{errors.aiYearly}</p>
        )}
    </div>

    {/* AI Masik */}
    <div>
        <label className="text-sm font-medium text-gray-700">AI Masik</label>
        <input
            className="mt-1 w-full rounded-lg border px-3 py-2 focus:ring-2 focus:ring-blue-500"
            value={data.aiMasik}
            onChange={(e) => setData("aiMasik", e.target.value)}
        />
    </div>

    {/* AI Repet */}
    <div>
        <label className="text-sm font-medium text-gray-700">AI Repet</label>
        <input
            className="mt-1 w-full rounded-lg border px-3 py-2 focus:ring-2 focus:ring-blue-500"
            value={data.aiRepet}
            onChange={(e) => setData("aiRepet", e.target.value)}
        />
    </div>

    {/* Owner Name */}
    <div>
        <label className="text-sm font-medium text-gray-700">Owner Name</label>
        <input
            className="mt-1 w-full rounded-lg border px-3 py-2 focus:ring-2 focus:ring-blue-500"
            value={data.aiownBame}
            onChange={(e) => setData("aiownBame", e.target.value)}
        />
        {errors.aiownBame && (
            <p className="text-red-500 text-sm mt-1">{errors.aiownBame}</p>
        )}
    </div>

    {/* Father Name */}
    <div>
        <label className="text-sm font-medium text-gray-700">Father Name</label>
        <input
            className="mt-1 w-full rounded-lg border px-3 py-2 focus:ring-2 focus:ring-blue-500"
            value={data.aiFaName}
            onChange={(e) => setData("aiFaName", e.target.value)}
        />
    </div>

    {/* Village */}
    <div>
        <label className="text-sm font-medium text-gray-700">Village</label>
        <input
            className="mt-1 w-full rounded-lg border px-3 py-2 focus:ring-2 focus:ring-blue-500"
            value={data.aiVill}
            onChange={(e) => setData("aiVill", e.target.value)}
        />
    </div>

    {/* Mobile */}
    <div>
        <label className="text-sm font-medium text-gray-700">Mobile</label>
        <input
            className="mt-1 w-full rounded-lg border px-3 py-2 focus:ring-2 focus:ring-blue-500"
            value={data.aiMobile}
            onChange={(e) => setData("aiMobile", e.target.value)}
        />
    </div>

    {/* Gat */}
    <div>
        <label className="text-sm font-medium text-gray-700">Gat</label>
        <input
            className="mt-1 w-full rounded-lg border px-3 py-2 focus:ring-2 focus:ring-blue-500"
            value={data.aiGat}
            onChange={(e) => setData("aiGat", e.target.value)}
        />
    </div>

    {/* Ox Type */}
    <div>
        <label className="text-sm font-medium text-gray-700">Ox Type</label>
        <input
            className="mt-1 w-full rounded-lg border px-3 py-2 focus:ring-2 focus:ring-blue-500"
            value={data.oxeType}
            onChange={(e) => setData("oxeType", e.target.value)}
        />
    </div>

    {/* Semen Type */}
    <div>
        <label className="text-sm font-medium text-gray-700">Semen Type</label>
        <input
            className="mt-1 w-full rounded-lg border px-3 py-2 focus:ring-2 focus:ring-blue-500"
            value={data.semenType}
            onChange={(e) => setData("semenType", e.target.value)}
        />
    </div>

    {/* AI Date */}
    <div>
        <label className="text-sm font-medium text-gray-700">AI Date</label>
        <input
            type="date"
            className="mt-1 w-full rounded-lg border px-3 py-2 focus:ring-2 focus:ring-blue-500"
            value={data.aiDate}
            onChange={(e) => setData("aiDate", e.target.value)}
        />
    </div>

    {/* Expire Date */}
    <div>
        <label className="text-sm font-medium text-gray-700">Expire Date</label>
        <input
            type="date"
            className="mt-1 w-full rounded-lg border px-3 py-2 focus:ring-2 focus:ring-blue-500"
            value={data.expireDate}
            onChange={(e) => setData("expireDate", e.target.value)}
        />
    </div>

    {/* Pregnancy Test */}
    <div>
        <label className="text-sm font-medium text-gray-700">Pregnancy Test</label>
        <input
            className="mt-1 w-full rounded-lg border px-3 py-2 focus:ring-2 focus:ring-blue-500"
            value={data.preg_test}
            onChange={(e) => setData("preg_test", e.target.value)}
        />
    </div>

    {/* Remark */}
    <div className="md:col-span-2">
        <label className="text-sm font-medium text-gray-700">Remark</label>
        <textarea
            rows={3}
            className="mt-1 w-full rounded-lg border px-3 py-2 focus:ring-2 focus:ring-blue-500"
            value={data.remark}
            onChange={(e) => setData("remark", e.target.value)}
        />
    </div>

    {/* Submit */}
    <div className="md:col-span-2 flex justify-end pt-2">
        <button
            type="submit"
            disabled={processing}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg shadow transition"
        >
            {processing ? "Saving..." : "Save Record"}
        </button>
    </div>
</form>
            </div>
        </AppLayout>
    );
}
