(function (){
  'use strict';

  //Defining app and adding dependencies
  angular.module('imagewallApp',
    [
      "ui.router",
      "angularUtils.directives.dirPagination",
      "ngResource",
      "ngAnimate"
    ]
  );
})();