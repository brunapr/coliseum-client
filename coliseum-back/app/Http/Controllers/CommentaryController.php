<?php

namespace App\Http\Controllers;

use App\Models\Commentary;
use App\Models\Event;
use Illuminate\Http\Request;
use Auth;

class CommentaryController extends Controller
{   
    /**
     * get all the comments for an event
     * @param int $id
     */
    public function getEventComments($id) {
        $comments = Commentary::where('event_id', $id)->with('user')->get();
        if ($comments == null) {
            return response()->json("no comments found", 404);
        }

        return response()->json($comments, 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $commentary = new Commentary;

        $user = Auth::user();

        $commentary->user_id = $user->id;
        $commentary->event_id = $request->event_id;
        $commentary->commentary = $request->commentary;

        $commentary->save();

        return response()->json($commentary, 200);

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Commentary  $commentary
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Commentary::destroy($id);
        return response()->json("comentario deletado", 200);

    }
}
