(function(){
  "use strict";
  angular.module("imagewallApp").directive("thumbnail", function() {
    return {
      restrict: "E",
      templateUrl: "app/components/partials/thumbnail.tmpl.html",
      scope: {
        image: "@image",
        title: "@title"
      },
      link: function(scope, el, attrs) {

      }
    };
  });
}());
