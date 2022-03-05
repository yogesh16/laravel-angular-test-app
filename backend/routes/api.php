<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/



Route::group([
    'middleware' => 'api',
    'prefix' => 'auth',
    'namespace' => '\App\Http\Controllers\API'
], function ($router) {
    Route::post('login', 'AuthController@login');
    Route::post('register', 'AuthController@register');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::post('me', 'AuthController@me');
});

Route::group([
    'middleware' => 'api',
    'prefix' => 'student',
    'namespace' => '\App\Http\Controllers\API'
], function ($router) {
    Route::post("test1", "StudentController@test");
    Route::get('index', 'StudentController@index');
    Route::post('create', 'StudentController@create');
    Route::post('edit/{student}', 'StudentController@edit');
    Route::post('delete/{student}', 'StudentController@delete');
});

Route::group([
    'middleware' => 'api',
    'prefix' => 'course',
    'namespace' => '\App\Http\Controllers\API'
], function ($router) {
    Route::get('index', 'CourseController@index');
    Route::post('create', 'CourseController@create');
    Route::post('edit/{course}', 'CourseController@edit');
    Route::post('delete/{course}', 'CourseController@delete');
});
