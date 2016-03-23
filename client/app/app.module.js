(function (){
  'use strict';

  //Defining app and adding dependencies
  angular.module('marsRobotApp',
    [
      'ui.router',
      'angularUtils.directives.dirPagination',
      'ngResource',
      'ngAnimate',
      'mgcrea.ngStrap'
    ]
  );
})();