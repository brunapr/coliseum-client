<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;
use Auth;

class Event extends Model
{
    use HasFactory;

    public function create(Request $request) {
      $user = Auth::user();
      $user->load('promoter');

      $this->name = $request->name;  
      $this->description = $request->description;  
      $this->price = $request->price;  
      $this->date = $request->date;  
      $this->starts_at = $request->starts_at;  
      $this->city = $request->city;  
      $this->neighborhood = $request->neighborhood;  
      $this->street = $request->street;  
      $this->number = $request->number;  
      $this->latitude = $request->latitude;  
      $this->longitude = $request->longitude;
      $this->user_id = $user->id;  

      $this->save();

      return $this;
    }

    public function updateEvent(Request $request) {
      if($request->name){
        $this->name = $request->name;
      }
      if($request->description){
        $this->description = $request->description;
      }
      if($request->price){
        $this->price = $request->price;
      }
      if($request->date){
        $this->date = $request->date;
      }
      if($request->starts_at){
        $this->starts_at = $request->starts_at;
      }
      if($request->city){
        $this->city = $request->city;
      }
      if($request->neighborhood){
        $this->neighborhood = $request->neighborhood;
      }
      if($request->street){
        $this->street = $request->street;
      }
      if($request->number){
        $this->number = $request->number;
      }
      if($request->latitude){
        $this->latitude = $request->latitude;
      }
      if($request->longitude){
        $this->longitude = $request->longitude;
      }

      $this->save();
      
      return $this;
    }

    public function user() {
      return $this->belongsTo(User::class);
    }
}
