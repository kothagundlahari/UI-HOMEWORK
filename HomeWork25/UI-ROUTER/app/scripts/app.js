'use strict';

/**
 * @ngdoc overview
 * @name uiRouterApp
 * @description
 * # uiRouterApp
 *
 * Main module of the application.
 */
angular
  .module('uiRouterApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router'

  ])
.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/main');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'phome.html'
        })
        
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('about', {
            // we'll get to this in a bit   
            url: '/about'   
            templateUrl: 'pabout.html' 
        });
        
});