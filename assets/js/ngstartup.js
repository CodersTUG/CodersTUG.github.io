(function(angular) {
  'use strict';

  angular
    .module('ctug', ['ngAnimate'])
    .controller('sliderController', ['$scope', function($scope) {
      $scope.hello = "hello";
    }]);

})(window.angular);