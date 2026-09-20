<?php

use Inertia\Testing\AssertableInertia;

test('public pages render their Inertia component', function (string $route, string $component) {
    $this->get(route($route))
        ->assertOk()
        ->assertInertia(fn (AssertableInertia $page) => $page->component($component));
})->with([
    'home' => ['home', 'welcome'],
    'about' => ['about', 'public/about'],
    'membership' => ['membership', 'public/membership'],
    'programs' => ['programs', 'public/programs'],
    'news & events' => ['news-events', 'public/news-events'],
    'contact' => ['contact', 'public/contact'],
]);

test('the document head carries the brand identity', function () {
    $this->get(route('home'))
        ->assertOk()
        ->assertSee('rel="manifest"', false)
        ->assertSee('/apple-touch-icon.png', false)
        ->assertSee('content="#20305C"', false);
});
