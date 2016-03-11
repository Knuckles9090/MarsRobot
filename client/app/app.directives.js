(function(){
  angular.module('imagewallApp').directive('sidebarControls', function() {
    return {
      restrict: 'E',
      templateUrl: 'app/components/partials/sidebar.tmpl.html',
      scope: {
        titleSearch: '=',
        pageItemCount: '='
      }
    };
  });
})();

(function(){
  angular.module('imagewallApp').directive('panelController', function() {
    return {
      restrict: 'E',
      templateUrl: 'app/components/partials/panelcontrol.tmpl.html',
      scope: {
        titleSearch: '=',
        pageItemCount: '='
      }
    };
  });
})();

(function(){
  angular.module('imagewallApp').directive('thumbnail', function() {
    return {
      restrict: 'E',
      templateUrl: 'app/components/partials/image.tmpl.html',
      scope: {
        thumbnailUrl: '=',
        title: '='
      }
    };
  });
})();