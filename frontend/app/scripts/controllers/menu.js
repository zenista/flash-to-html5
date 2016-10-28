'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:MenuCtrl
 * @description
 * # MenuCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
  .controller('MenuCtrl', function ($scope) {
    $scope.items = [
       {'title': 'WELCOME', 	'href':'#/'}
      ,{'title': 'LESSONS', 	'href':'#/lessons'}
      ,{'title': 'EXERCISES', 	'href':'#/exercises'} 
      ,{'title': 'TESTS', 		'href':'#/tests'} 
      ,{'title': 'PROGRESS', 	'href':'#/progress'} 
      ,{'title': 'MY SETTINGS',	'href':'#/my-settings'} 
    ];

    $scope.activeItem = $scope.items[0];

    $scope.itemClicked = function(item) {
    	$scope.activeItem = item;
    	console.log( 'active item is : ', $scope.activeItem );
    }

    $scope.getItemClass = function(item) {
    	return item.title === $scope.activeItem.title ? 'active' : '';
    }
  });
