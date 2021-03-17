<?php

namespace Database\Factories;

use App\Models\Event;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class EventFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Event::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => $this->faker->sentence($nbWords = 3, $variableNbWords = true),
            'description' => $this->faker->sentence($nbWords = 6, $variableNbWords = true),
            'followers' => $this->faker->numberBetween($min = 0, $max = 1000),
            'participants' => $this->faker->numberBetween($min = 0, $max = 1000),
            'price' => $this->faker->numberBetween($min = 0, $max = 1000),
            'date' => $this->faker->date($format = 'D-m-y', $max = 'now'),
            'starts_at' => $this->faker->numberBetween($min = 1, $max = 24),
            'city' => $this->faker->city,
            'neighborhood' => $this->faker->sentence($nbWords = 1, $variableNbWords = true),
            'street' => $this->faker->streetName,
            'number' => $this->faker->randomDigit,
            'latitude' => $this->faker->latitude($min = -90, $max = 90),
            'longitude' => $this->faker->longitude($min = -180, $max = 180),
        ];
    }
}