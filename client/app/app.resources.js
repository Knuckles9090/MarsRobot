(function(){
  angular.module('marsRobotApp').factory('ImageResource', function($resource, ResourcePath) {
    return $resource(ResourcePath+'/photos', {}, {
      'query': {
        method: 'GET',
        isArray: true
      }
    });
  });  
})();
