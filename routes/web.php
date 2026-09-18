<?php

use Illuminate\Support\Facades\Route;

Route::inertia('/', 'welcome')->name('home');
Route::inertia('/about', 'public/about')->name('about');
Route::inertia('/membership', 'public/membership')->name('membership');
Route::inertia('/programs', 'public/programs')->name('programs');
Route::inertia('/news-events', 'public/news-events')->name('news-events');
Route::inertia('/contact', 'public/contact')->name('contact');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');
});

require __DIR__.'/settings.php';
