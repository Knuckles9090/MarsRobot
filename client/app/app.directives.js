(function(){
  angular.module('marsRobotApp').directive('sidebarControls', function() {
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
  angular.module('marsRobotApp').directive('panelController', function() {
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
  angular.module('marsRobotApp').directive('thumbnail', function() {
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

(function(){
  angular.module('marsRobotApp').directive('upperCase', function() {
    return {
      require: 'ngModel',
      link: function(scope, element, attrs, modelCtrl) {
        function allCapitalized(modelValue) {
          if(modelValue === undefined) {
            modelValue = '';
          }
          var upperCase = modelValue.toUpperCase();
          if(upperCase !== modelValue) {
            modelCtrl.$setViewValue(upperCase);
            modelCtrl.$render();
          }
          return upperCase;
        }
        modelCtrl.$parsers.push(allCapitalized);
        allCapitalized(scope[attrs.ngModel]);  // capitalize initial value
      }
    };
  });
})();