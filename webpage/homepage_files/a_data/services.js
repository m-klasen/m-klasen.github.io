/* Services */

var mgharbi_services = angular.module('mgharbi.services', []);

mgharbi_services.factory('Projects', function($http) { 
    return {
        get:  
            function(){
                return $http.get('data/projects.json'); // this will return a promise to controller
            }
    };
});


// and in controller

