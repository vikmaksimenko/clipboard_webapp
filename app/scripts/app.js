'use strict';

/**
 * @ngdoc overview
 * @name clipboardApp
 * @description
 * # clipboardApp
 *
 * Main module of the application.
 */
angular.module('clipboardApp', [
    'ngAnimate',
    'ngMaterial',
    'ngMessages',
    'firebase',
    'firebase.ref',
    'firebase.auth',
    'ui.router'
  ])
  .config(function ($mdThemingProvider, $stateProvider, $urlRouterProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('light-green')
      .accentPalette('orange');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: '../views/clipboard.html',
        controller: 'ClipboardCtrl'
        // resolve: {
        //   requireNoAuth: function($state, Auth){
        //     return Auth.$requireAuth().then(function(auth){
        //       $state.go('home');
        //     }, function(error){
        //       return;
        //     });
        //   }
        // }
      });
      // .state('login', {
      //   url: '/login',
      //   templateUrl: '../views/login.html',
      //   controller: 'AuthCtrl as authCtrl',
      //   resolve: {
      //     requireNoAuth: function($state, Auth){
      //       return Auth.$requireAuth().then(function(auth){
      //         $state.go('home');
      //       }, function(error){
      //         return;
      //       });
      //     }
      //   }
      // })
      // .state('register', {
      //   url: '/register',
      //   templateUrl: '../views/register.html',
      //   controller: 'AuthCtrl as authCtrl',
      //   resolve: {
      //     requireNoAuth: function($state, Auth){
      //       return Auth.$requireAuth().then(function(auth){
      //         $state.go('home');
      //       }, function(error){
      //         return;
      //       });
      //     }
      //   }
      // });
    // .state('profile', {
    //     url: '/profile',
    //     resolve: {
    //         auth: function($state, Users, Auth){
    //             return Auth.$requireAuth().catch(function(){
    //                 $state.go('home');
    //             });
    //         },
    //         profile: function(Users, Auth){
    //             return Auth.$requireAuth().then(function(auth){
    //                 return Users.getProfile(auth.uid).$loaded();
    //             });
    //         }
    //     }
    // });

    $urlRouterProvider.otherwise('/');
  });
