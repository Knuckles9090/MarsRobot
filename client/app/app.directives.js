(function(){
  angular.module('marsRobotApp').directive('worldInput', function() {
    return {
      restrict: 'E',
      templateUrl: 'app/components/partials/worldInput.tmpl.html',
      scope: {
        worldSize: '='
      }
    };
  });
})();

(function(){
  angular.module('marsRobotApp').directive('locationInput', function() {
    return {
      restrict: 'E',
      templateUrl: 'app/components/partials/locationInput.tmpl.html',
      scope: {
        startLocation: '='
      }
    };
  });
})();

(function(){
  angular.module('marsRobotApp').directive('directionsInput', function() {
    return {
      restrict: 'E',
      templateUrl: 'app/components/partials/directionsInput.tmpl.html',
      scope: {
        directions: '='
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