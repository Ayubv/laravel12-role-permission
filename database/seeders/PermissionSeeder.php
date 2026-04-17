<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\PermissionRegistrar;

class PermissionSeeder extends Seeder
{
    public function run(): void
    {
        // reset cached roles and permissions
        app()[PermissionRegistrar::class]->forgetCachedPermissions();

        $permissions = [
  // user management
            'user.view',
            'user.create',
            'user.edit',
            'user.delete',


 // role management
            'role.view',
            'role.create',
            'role.edit',
            'role.delete',


            // Prozonon / Production
            'prozonon.view',
            'prozonon.create',
            'prozonon.edit',
            'prozonon.delete',

            // Semen
            'semen.view',
            'semen.create',
            'semen.edit',
            'semen.delete',

            // Cow
            'cow.view',
            'cow.create',
            'cow.edit',
            'cow.delete',

            // Foder
            'foder.view',
            'foder.create',
            'foder.edit',
            'foder.delete',

            // Aifee
            'aifee.view',
            'aifee.create',
            'aifee.edit',
            'aifee.delete',

            // Consumable
            'consumable.view',
            'consumable.create',
            'consumable.edit',
            'consumable.delete',

            // Non-Consumable
            'nonconsumable.view',
            'nonconsumable.create',
            'nonconsumable.edit',
            'nonconsumable.delete',

            // Liquid Nitrogen
            'liquidnitrogen.view',
            'liquidnitrogen.create',
            'liquidnitrogen.edit',
            'liquidnitrogen.delete',

            // Oxe
            'oxe.view',
            'oxe.create',
            'oxe.edit',
            'oxe.delete',

            // Semen Type
            'sementype.view',
            'sementype.create',
            'sementype.edit',
            'sementype.delete',
        ];

        foreach ($permissions as $permission) {
            Permission::firstOrCreate([
                'name' => $permission,
                'guard_name' => 'web',
            ]);
        }
    }
}
