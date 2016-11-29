'use strict';

/**
 * @ngdoc overview
 * @name uiRouterApp
 * @description
 * # uiRouterApp
 *
 * Main module of the application.
 */

/*angular
  .module('uiRouterApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui-router
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
*/


var App = angular.module('routingDemoApp',['ui.router']);
 
App.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
                // For any unmatched url, send to /business
                $urlRouterProvider.otherwise("/business")
                 
                $stateProvider
                        .state('business', {//State demonstrating Nested views
                            url: "/business",
                            templateUrl: "business.html"
                        })
                        .state('business.products', {//nested state [products is the nested state of business state]
                            url: "/products",
                            templateUrl: "products.html",
                            controller: function($scope){
                                $scope.products = ["Computer", "Printers", "Phones", "Bags"];
                            }
                        })
                        .state('business.services', {//nested state [services is the nested state of business state]
                            url: "/services",
                            templateUrl: "services.html",
                            controller: function($scope){
                                $scope.services = ["Selling", "Support", "Delivery", "Reparation"];
                            }
                        })
 
                        .state('portfolio', {//State demonstrating Multiple,named views
                            url: "/portfolio",
                            views: {
                                ""  :    { templateUrl: "portfolio.html" },
                                "view1@portfolio": { template: "Write whatever you want, it's your virtual company." },
                                "view2@portfolio": { templateUrl: "clients.html" ,
                                    controller: function($scope){
                                            $scope.clients = ["HP", "IBM", "MicroSoft"];
                                    }
                                }
                            }
                        })
            }]);