<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\Puzzle;

class PuzzlePhotoController extends Controller
{
    /**
     * @param Request $request
     * @return string
     */
    public function getPhoto(Request $request){
        $puzzles = Puzzle::all();
        $id = $request->input('id');
        foreach ($puzzles as $puzzle) {
            if($id == $puzzle->puzzleId){
                return $puzzle->photoLink;

            };
        }
    }
}
