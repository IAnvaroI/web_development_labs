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
    public function getIds(){
        $puzzles = Puzzle::all();
        $str = "<option selected disabled>Choose ID</option>";
        foreach ($puzzles as $puzzle) {
            $id = $puzzle->puzzleId;
            $str .= "<option value=$id>$id</option>";
        }
        return $str;
    }
    public function getOriginLink(Request $request){
        $puzzles = Puzzle::all();
        $id = $request->input('id');
        foreach ($puzzles as $puzzle) {
            if($id == $puzzle->puzzleId){
                return $puzzle->originLink;
            };
        }
    }
}
