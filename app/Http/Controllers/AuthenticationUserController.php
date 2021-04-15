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
            'pass' => 'size:8',
            'comment' => 'min:10|max:12',
//            'birthday' => 'between:15,300',
        ]);

        $user = AuthenticatedUser::where([
            'name' => $request->input('name'),
            'surname' => $request->input('surname'),
            'level' => $request->input('level'),
        ])->first();
        if ($user === NULL) {
            $request->session()->put('name', $request->input('name'));
            $request->session()->put('surname', $request->input('surname'));
            $request->session()->put('level', $request->input('level'));
            $request->session()->save();
            return redirect()->route('choice')->withSuccess('You filled the form successfully!');
        } else {
            $viewName = $user->puzzleId . "Puzzle";
            return redirect()->route($viewName);
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
        $viewName = $user['puzzleId'] . "Puzzle";
        return redirect()->route($viewName);
    }
}
