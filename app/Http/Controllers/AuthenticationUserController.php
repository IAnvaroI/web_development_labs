<?php


namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\AuthenticatedUser;
use Illuminate\Http\Request;

/**
 * Class AuthenticationUserController
 * @package App\Http\Controllers
 */
class AuthenticationUserController extends Controller
{
    /**
     * @param Request $request
     * @return mixed
     */
    public function authenticationCheck(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|alpha',
            'surname' => 'required|alpha',
            'level' => 'required',
            'pass' => 'max:10',
            'comment' => 'max:300',
        ]);

        $user = AuthenticatedUser::where([
            'name' => $request->input('name'),
            'surname' => $request->input('surname'),
            'level' => $request->input('level'),
        ])->first();
        if ($user === NULL) {
            $arr = ["name" => $request->input('name'), "surname" =>$request->input('surname'), "level" =>$request->input('level')];
            $request->session()->put('data', $arr);
            $request->session()->put('Success', "You filled the form successfully!");
            $request->session()->save();
            return "http://web-dev-labs.loc/puzzle-choosing";
        } else {
            return "http://web-dev-labs.loc/" . $user->puzzleId;
        }
    }

    /**
     * @param Request $request
     */
    public function create(Request $request)
    {
        $validated = $request->validate([
            'puzzleId' => 'required',
        ]);

        $user = new AuthenticatedUser();
        $user->name = $request->session()->get('name');
        $user->surname = $request->session()->get('surname');
        $user->level = $request->session()->get('level');
        $user->puzzleId = $request->input('puzzleId');

        $user->save();
//        echo $request->session()->get('name').$request->session()->get('surname').$request->session()->get('level');
        return "/" . $user['puzzleId'];
    }
}
