
var aplicacion = angular.module("pokemon", ['ui.router']);

aplicacion.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/");

    $stateProvider
        .state('home', {
            url: "/"
            , templateUrl: "Vistas/Home.html"
            , controller: "HomeCtrl"
        })
        .state('pokemon', {
            url: "/pokemon"
            , templateUrl: "Vistas/Pokemon.html"
            , controller: "PokemonCtrl"
        });
});
