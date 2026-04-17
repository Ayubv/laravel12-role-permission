<?php

use App\Http\Controllers\AiController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');



 Route::prefix('users')->group(function () {

    Route::get('/', [UserController::class, 'index'])
        ->name('users.index')
        ->middleware('permission:user.view');

    Route::get('/create', [UserController::class, 'create'])
        ->name('users.create')
        ->middleware('permission:user.create');

    Route::get('/{user}', [UserController::class, 'show'])
        ->name('users.show')
        ->middleware('permission:user.view');

    Route::get('/{user}/edit', [UserController::class, 'edit'])
        ->name('users.edit')
        ->middleware('permission:user.edit');

    Route::put('/{user}', [UserController::class, 'update'])
        ->name('users.update')
        ->middleware('permission:user.edit');

    Route::delete('/{user}', [UserController::class, 'destroy'])
        ->name('users.destroy')
        ->middleware('permission:user.delete');
});

// Route::resource('roles', RoleController::class)
// ->only(['create', 'store'])->middleware('permission:roles.create');

// Route::resource('roles', RoleController::class)
// ->only(['edit', 'update'])->middleware('permission:roles.edit');

// Route::resource('roles', RoleController::class)
// ->only(['index','show'])->middleware('permission:roles.view||roles.edit|roles.delete');



Route::middleware('permission:roles.view')->group(function () {
    Route::get('/roles', [RoleController::class, 'index'])->name('roles.index');
    Route::get('/roles/{role}', [RoleController::class, 'show'])->name('roles.show');
});

Route::get('/create', [RoleController::class, 'create'])
    ->name('roles.create')
    ->middleware('permission:roles.create');

Route::middleware('permission:roles.edit')->group(function () {
    Route::get('/roles/{role}/edit', [RoleController::class, 'edit'])->name('roles.edit');
    Route::put('/roles/{role}', [RoleController::class, 'update'])->name('roles.update');
});

Route::middleware('permission:roles.delete')->group(function () {
    Route::delete('/roles/{role}', [RoleController::class, 'destroy'])->name('roles.destroy');
});

//prozonos

Route::resource('prozonons', AiController::class)
    ->middleware('auth');



});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
//afrin@gmail.com
