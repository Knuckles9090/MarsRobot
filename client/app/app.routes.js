(function(){
  'use strict';

  //When a stateChange error occurs, guide the user to error state
  angular.module('imagewallApp').run(function($state, $rootScope) {
    $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
      event.preventDefault();
      $state.get('error').error = error;
      return $state.go('error');
    });
  });

  angular.module('imagewallApp').config(function($resourceProvider) {
    $resourceProvider.defaults.stripTrailingSlashes = true;
  });

  angular.module("imagewallApp").config(function($locationProvider) {
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
  });

  //Defining states for the application
  angular.module('imagewallApp').config(function($stateProvider, $urlRouterProvider) {

  // For any unmatched url, redirect to images state
  $urlRouterProvider.otherwise(function($injector, $location){
    var $state = $injector.get('$state');
    $state.go('images');
  });

    // Set up states/routes
    $stateProvider
    .state('images', {
      url: '/images',
      controller: 'imageController',
      templateUrl: 'app/components/images/images.tmpl.html'
    });
  });
}());