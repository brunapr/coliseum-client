<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\Promoter;
use App\Models\Commentary;
use App\Models\Event;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //cria 10 usuários e um número randômico (max 5) de posts e comentários. Associa cada post a uma quantidade de tags
        $users = User::factory()->count(5)->create()->each(function($user){
            Promoter::factory()->count(1)->make()->each(function($promoter) use($user){
                $user->promoter()->save($promoter);
            });
            $events = Event::factory()->count(5)->make()->each(function($event) use($user){
                $user->event()->save($event);
                $user->role = 'promoter';
                $user->save();
                Commentary::factory()->count(rand(0,5))->make()->each(function($comment) use($event){
                    $event->comments()->save($comment);
                });
            });
        });  
    }
}
