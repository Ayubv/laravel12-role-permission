<?php

namespace App\Http\Controllers;

use App\Models\Ai;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;

class AiController extends Controller
{
    /**
     * Display list
     */
    public function index()
    {
        $ais = Ai::where('technician_id', Auth::id())
            ->latest()
            ->paginate(10);
           

        return Inertia::render('prozonons/index', [
            'prozonons' => $ais
        ]);
    }

    /**
     * Show create form
     */
    public function create()
    {
        return Inertia::render('prozonons/create');
    }

    /**
     * Store data
     */
    public function store(Request $request)
    {


        $request->validate([
            'aiYearly'   => 'required',
            'aiMasik'    => 'required',
            'aiownBame'  => 'required',
            'aiFaName'   => 'required',
            'aiVill'     => 'required',
            'aiMobile'   => 'required',
            'aiGat'      => 'required',
            'aiDate'     => 'required|date',
        ]);

        Ai::create([
            'user_id'       => Auth::id(),
            'technician_id' => Auth::id(),
            'aiYearly'      => $request->aiYearly,
            'aiMasik'       => $request->aiMasik,
            'aiRepet'       => $request->aiRepet,
            'aiownBame'     => $request->aiownBame,
            'aiFaName'      => $request->aiFaName,
            'aiVill'        => $request->aiVill,
            'aiMobile'      => $request->aiMobile,
            'aiGat'         => $request->aiGat,
            'semenType'     => $request->semenType,
            'oxeType'       => $request->oxeType,
            'aiDate'        => $request->aiDate,
            'expireDate'    => Carbon::now()->addDays(279),
            'remark'        => $request->remark,
        ]);

        return redirect()->route('prozonons.index')
            ->with('success', 'Data created successfully');
    }

    /**
     * Show single (optional)
     */
    public function show(string $id)
    {
        $ai = Ai::findOrFail($id);

        return Inertia::render('prozonons/show', [
            'ai' => $ai
        ]);
    }

    /**
     * Edit form
     */
    public function edit(string $id)
    {
        $ai = Ai::findOrFail($id);

        return Inertia::render('prozonons/edit', [
            'ai' => $ai
        ]);
    }

    /**
     * Update
     */
    public function update(Request $request, string $id)
    {
        $ai = Ai::findOrFail($id);

        $request->validate([
            'aiYearly'  => 'required',
            'aiMasik'   => 'required',
            'aiownBame' => 'required',
            'aiMobile'  => 'required',
        ]);

        $ai->update($request->all());

        return redirect()->route('prozonons.index')
            ->with('success', 'Data updated successfully');
    }

    /**
     * Delete
     */
    public function destroy(string $id)
    {
        $ai = Ai::findOrFail($id);
        $ai->delete();

        return back()->with('success', 'Deleted successfully');
    }
}
