var mgharbi_ctrl = angular.module('mgharbi.controllers', []);

mgharbi_ctrl.controller("MainController",   ['$scope', 'Projects', function($scope, Projects) {
    var vm       = this;
    vm.firstname = "Michaël";
    vm.lastname  = "Gharbi";
    vm.title     = "Research Scientist - Adobe";
    vm.email     = "mgharbi@adobe.com";
    vm.phone     = "+1 (857)-210-9559";
    vm.github    = "https://github.com/mgharbi";
    vm.facebook  = "https://www.facebook.com/michael.gharbi.5";
    vm.twitter   = "https://twitter.com/m_gharbi";
    vm.linkedin  = "https://www.linkedin.com/in/michaelgharbi";
    vm.map       = "https://goo.gl/maps/Dpp2mXCJHjpRxwHL9";


    // Get project list
    // vm.projects = ["joe"];
    // Projects.get().then(function(response) { 
    //     $scope.projects = response.data;
    // });
    // vm.projects = $scope.projects;
    // console.log("scope ",  vm.projects);

}]);
