<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class CommentarySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\Commentary::factory()->count(20)->create();
    }
}
