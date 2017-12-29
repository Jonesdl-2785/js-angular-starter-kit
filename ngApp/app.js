import angular from 'angular';
import uirouter from 'angular-ui-router';
import ngResource from 'angular-resource';
import uiBootstrap from 'angular-bootstrap-npm';
import {HomeController, AboutController} from './controllers/controllers';
import {todoController} from 'ngApp/controllers/todoController.js';
    angular.module('starterkit', [uirouter, ngResource, uiBootstrap]).config(routing);

    routing.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
    function routing($stateProvider, $urlRouterProvider, $locationProvider) {
      $stateProvider.state('Home', {
           url: '/',
           templateUrl: '/ngApp/views/todo.html',
           controller: ProductListController,
           controllerAs: 'controller'
      }).state('Details', {
           url: '/details/:id',
           templateUrl: '/views/ngApp/details.html',
           controller: ProductDetailsController,
           controllerAs: 'controller'

      }).state('Todo', {
           url: '/todo/:id',
           templateUrl: '/ngApp/views/todo.html',
           controller: todoController,
           controllerAs: 'controller'
      })
          .state('notFound', {
            url: '/notFound',
            templateUrl: '/ngApp/views/notFound.html'
          });
        $urlRouterProvider.otherwise('/notFound');
        $locationProvider.html5Mode(true);
    }
