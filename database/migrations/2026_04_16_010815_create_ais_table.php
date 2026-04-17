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
        Schema::create('ais', function (Blueprint $table) {
               $table->id();

            // ===== BASIC INFO =====
            $table->string('aiYearly');
            $table->string('aiMasik');
            $table->string('aiRepet')->nullable();

            // ===== OWNER INFO =====
            $table->string('aiownBame');
            $table->string('aiFaName');
            $table->string('aiVill');
            $table->string('aiMobile');

            // ===== CATTLE INFO =====
            $table->string('aiGat');
            $table->string('oxeType')->nullable();
            $table->string('semenType')->nullable();

            // ===== DATES (IMPORTANT FIX) =====
            $table->date('aiDate');
            $table->date('expireDate')->nullable();

            // ===== RESULT INFO =====
            $table->boolean('preg_test')->nullable()->default(null);

            // ===== EXTRA =====
            $table->text('remark')->nullable();

            // ===== RELATION =====
            $table->foreignId('user_id')
                ->constrained('users')
                ->cascadeOnDelete();

            $table->foreignId('technician_id')
                ->nullable()
                ->constrained('users')
                ->nullOnDelete();

            $table->timestamps();

            // Optional index (performance boost)
            $table->index(['technician_id', 'aiDate']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('ais');
    }
};
