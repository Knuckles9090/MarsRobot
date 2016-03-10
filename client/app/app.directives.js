(function(){
  angular.module("imagewallApp").directive("sidebarControls", function() {
    return {
      restrict: "E",
      templateUrl: 'app/components/partials/sidebar.tmpl.html',
      scope: {
        titleSearch: '=',
        pageItemCount: '='
      }
    };
  });
})();

(function(){
  angular.module("imagewallApp").directive("panelController", function() {
    return {
      restrict: "E",
      templateUrl: 'app/components/partials/panelcontrol.tmpl.html',
      scope: {
        titleSearch: '=',
        pageItemCount: '='
      }
    };
  });
})();

(function(){
  angular.module("imagewallApp").directive("imageWall", function() {
    return {
      restrict: "E",
      templateUrl: 'app/components/partials/imagewall.tmpl.html',
      scope: {
        images: '=',
        titleSearch: '=',
        pageItemCount: '='
      }
    };
  });
})();