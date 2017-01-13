var myApp = angular.module("myApp", ['ui.router']);

myApp.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.when("", "/attack-page");

    $stateProvider
        .state("attack-page", {
            url: "/attack-page",
            templateUrl: "html/attack-page.html"
        })
        .state("task-page", {
            url:"/task-page",
            templateUrl: "html/task-page.html"
        })
        .state("webset-page", {
            url:"/webset-page",
            templateUrl: "html/webset-page.html"
        })
        .state("user-page", {
            url:"/user-page",
            templateUrl: "html/user-page.html"
        });
});