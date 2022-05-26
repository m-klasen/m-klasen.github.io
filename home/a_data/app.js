var mgharbi_app = angular.module('mgharbi', [
    'ngRoute',
    'mgharbi.controllers',
    'mgharbi.services'
]);

mgharbi_app.config(
    function($routeProvider, $locationProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'partials/home.html',
                controller: 'MainController'
            }).
            when('/projects/gaussian', {
                templateUrl: 'partials/project_gaussian.html',
                controller: 'MainController'
            }).
            when('/bio', {
                templateUrl: 'partials/bio.html',
                controller: 'MainController'
            }).
            otherwise({
                redirectTo: ''
            });

        $locationProvider.html5Mode({
            enabled: true
        });
});

$(document).ready(function() {
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    });
});
