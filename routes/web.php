<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| This file is where you may define all of the routes that are handled
| by your application. Just tell Laravel the URIs it should respond
| to using a Closure or controller method. Build something great!
|
*/

Route::get('/', function () {
    return view('frontend/index');
});

// API Routes

// get menu list
Route::get('/api/menu', 'ProductCategoryController@getMenuList');

Route::get('/admin', function () {
   return view('backend/index');
});

