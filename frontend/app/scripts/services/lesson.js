'use strict';

/**
 * @ngdoc service
 * @name frontendApp.lesson
 * @description
 * # lesson
 * Service in the frontendApp.
 */
angular.module('frontendApp')
  .service('Lesson', function Lesson($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    this.get = function(id) {
    	switch(id) {
    		case 'demooverview':
    			return $http.get('./lessons/demooverview.xml');
    			break;
    		case 'effectivereadingrate':
    			return $http.get('./lessons/effectivereadingrate.xml');
    			break;
    		case 'programobjective':
    			return $http.get('./lessons/programobjective.xml');
    			break;
    		default:
    			return $http.get('./lessons/notindemo.xml'); 
    	}
	}
});
