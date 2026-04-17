<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Spatie\Permission\Models\Role;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    /**
     * Display user list
     */
    public function index()
    {
        return Inertia::render('users/index', [
            'users' => User::with('roles')->latest()->get(),
            'roles' => Role::all(),
        ]);
    }

    /**
     * Show create form
     */
    public function create()
    {
        return Inertia::render('users/create', [
            'roles' => Role::all(),



        ]);


    }

    /**
     * Store new user
     */
    public function store(Request $request)
    {


        $request->validate([
            'name'     => 'required',
            'email'    => 'required|email|unique:users,email',
            'password' => 'required',
            //'role'     => 'nullable|string|exists:roles,name',
        ]);

      $user = User::create([
    'name'     => $request->name,
    'email'    => $request->email,
    'password' => Hash::make($request->password),
]);

    if ($request->roles) {
        $user->syncRoles($request->roles);
    }

    return to_route('users.index')
        ->with('success', 'User created successfully');
}

    /**
     * Show single user
     */
    public function show(User $user)
    {
        return Inertia::render('users/show', [
            'user' => $user->load('roles'),
        ]);

        $user->syncRoles($request->roles);
    }

    /**
     * Show edit form
     */
    public function edit(User $user)
    {
        return Inertia::render('users/edit', [
            'user'  => $user->load('roles'),
            'roles' => Role::all(),
        ]);
        $user->syncRoles($request->roles);
    }

    /**
     * Update user
     */
    public function update(Request $request, User $user)
    {
        $request->validate([
            'name'  => 'required',
            'email' => 'required',
            'role'  => 'nullable|string|exists:roles,name',
        ]);

        $user->update([
            'name'  => $request->name,
            'email' => $request->email,
        ]);

        // update role
        $user = User::find($user->id);
        $user->name= $request->name;
        $user->email= $request->email;

        if($request->filled('password')){
            $user->password= Hash::make($request->password);

        }

        $user->syncRoles($request->roles);
        $user->save();


        // 🔥 ROLE ASSIGN FIX
    if ($request->role) {
        $user->syncRoles([$request->role]);
    }

        return redirect()->route('users.index')
            ->with('success', 'User updated successfully');
    }

    /**
     * Delete user
     */
    public function destroy(User $user)
    {
        $user->delete();

        return to_route('users.index')
            ->with('success', 'User created successfully');
    }
}
