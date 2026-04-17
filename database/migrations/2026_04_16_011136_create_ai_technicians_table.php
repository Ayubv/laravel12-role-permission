<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('ai_technicians', function (Blueprint $table) {
                $table->id();

            // ===== RELATION TO USERS =====
            $table->foreignId('user_id')
                ->constrained('users')
                ->cascadeOnDelete();

            // ULO (manager / supervisor)
            $table->foreignId('ulo_id')
                ->nullable()
                ->constrained('users')
                ->nullOnDelete();

            // ===== TECHNICIAN INFO =====
            $table->string('name');

            $table->string('upazila')->nullable();

            $table->string('designation')->nullable();

            $table->timestamps();

            // Index for performance
            $table->index(['ulo_id', 'user_id']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('ai_technicians');
    }
};
