'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:LessonCtrl
 * @description
 * # LessonCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
  .controller('LessonCtrl', function ($scope, Lesson) {
    $scope.items = [
        {'title':'Demo Overview', 			'id':'demooverview'}
       ,{'title':'Program Objective', 		'id':'programobjective'}
       ,{'title':'Effective Reading Rate', 	'id':'effectivereadingrate'}
       ,{'title':'Recognition Training', 	'id':'recognitiontraining'}
       ,{'title':'Speed Reading Myths',		'id':'speedreadingmyths'}
    ];

    $scope.getItemClass = function(item) {
    	return (item.id === $scope.activeItem.id) ? 'active': '';
    }

    $scope.setItemActive = function(item) {
  		$scope.activeItem = item;

    	Lesson.get($scope.activeItem.id).
		   	success(function(data, status, headers, config){
	    			$scope.itemText = data;
		   	}).
		   	error(function(data, status, headers, config) {
	    			$scope.itemText = data;
		  	});
    }

    $scope.setItemActive($scope.items[0]);
  });
