<?php

use Illuminate\Http\Request;

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

Route::post('/register', 'API\AuthController@register');
Route::post('/login', 'API\AuthController@login');

Route::middleware('auth:api')->group(function () {
    Route::post('/logout', 'API\AuthController@logout');
});

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//   return $request->user();
// });

// Route::group(['middleware' => 'guest:api'], function () {
//   Route::post('login', 'Auth\LoginController@login');
//   Route::post('register', 'Auth\RegisterController@register');
//   Route::post('password/email', 'Auth\ForgotPasswordController@sendResetLinkEmail');
//   Route::post('password/reset', 'Auth\ResetPasswordController@reset');
//
//   Route::post('oauth/{driver}', 'Auth\OAuthController@redirectToProvider');
//   Route::get('oauth/{driver}/callback', 'Auth\OAuthController@handleProviderCallback')->name('oauth.callback');
// });
