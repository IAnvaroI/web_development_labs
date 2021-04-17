<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthenticationUserController;
use App\Http\Controllers\PuzzlePhotoController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/start-form', function () {
    return view('start_form');
})->name('start-form');

Route::post(
    '/start_form/request',
    [AuthenticationUserController::class, 'authenticationCheck']
)->name('startFormRequest');

Route::get('/puzzle-choosing', function () {
    return view('puzzle_choosing');
})->name('choice');

Route::post(
    '/getPuzzlePhoto',
    [PuzzlePhotoController::class, 'getPhoto']
);

Route::post(
    '/choose_puzzle_form/request',
    [AuthenticationUserController::class, 'create']
)->name('choosePuzzleFormRequest');

Route::get('/731', function () {
    return view('731Puzzle');
})->name('731Puzzle');

Route::get('/732', function () {
    return view('732Puzzle');
})->name('732Puzzle');

Route::get('/27255', function () {
    return view('27255Puzzle');
})->name('27255Puzzle');

Route::get('/731histogram', function () {
    return view('731histogram');
})->name('731histogram');

Route::get('/732histogram', function () {
    return view('732histogram');
})->name('732histogram');

Route::get('/27255histogram', function () {
    return view('27255histogram');
})->name('27255histogram');

Route::get('/test', function () {
    return view('test');
});
