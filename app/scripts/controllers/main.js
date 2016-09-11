'use strict';

/**
 * @ngdoc function
 * @name clipboardApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clipboardApp
 */
angular.module('clipboardApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
