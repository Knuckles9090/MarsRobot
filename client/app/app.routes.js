(function(){
  'use strict';

  angular.module('marsRobotApp').config(function($resourceProvider) {
    $resourceProvider.defaults.stripTrailingSlashes = true;
  });

  angular.module('marsRobotApp').config(function($locationProvider) {
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
  });

  //Defining states for the application
  angular.module('marsRobotApp').config(function($stateProvider, $urlRouterProvider) {

  // For any unmatched url, redirect to robot state
  $urlRouterProvider.otherwise(function($injector, $location){
    var $state = $injector.get('$state');
    $state.go('robot');
  });

    // Set up states/routes
    $stateProvider
    .state('robot', {
      url: '/robot',
      controller: 'robotController',
      templateUrl: 'app/components/robot/robot.tmpl.html'
    });
  });
}());