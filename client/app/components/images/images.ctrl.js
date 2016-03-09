//Controller for the images state
(function(){
  'use strict';

  var imageController = function ($scope, ImageResource) {
    $scope.images = [];
    getImages();

    function getImages() {
      $scope.loadingImages = true;
      ImageResource.query().$promise.then(
        function(response) {
          $scope.images = response;
        },
        function(error) {
          $scope.images = [];
          console.log(error);
        }
      ).finally(function(){
        $scope.loadingImages = false;
      });
    }

  };

  imageController.$inject = ['$scope', 'ImageResource'];
  angular.module('imagewallApp').controller('imageController', imageController);

}());