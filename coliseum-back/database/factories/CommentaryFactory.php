<?php

namespace Database\Factories;

use App\Models\Commentary;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class CommentaryFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Commentary::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'commentary' => $this->faker->sentence($nbWords = 6, $variableNbWords = true),
            'user_id' => User::factory()->create()->id,
        ];
    }
}
