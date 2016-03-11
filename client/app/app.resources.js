(function(){
  angular.module('imagewallApp').factory('ImageResource', function($resource, ResourcePath) {
    return $resource(ResourcePath+'/photos', {}, {
      'query': {
        method: 'GET',
        isArray: true
      }
    });
  });  
})();
