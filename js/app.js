// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic','uiGmapgoogle-maps','starter.LoginControl','starter.MainControl','starter.historyCtrl','starter.CameraCtrl'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
    Parse.initialize("0ekcDIcYCDRfF3rLy4yo5JVmqdOxPe7o4fyMCYCh", "HXaKOjKo77cU6SnC8tYdm5uECwDAqPbUPiAiOytd");
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  
  $stateProvider

  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/sidemenu/SideMenu.html',
  })
  .state('Login', {
    url: '/Login',
    templateUrl: 'templates/member/Login.html',
    controller: 'LoginControl'
  })
  .state('SignUp', {
    url: '/SignUp',
    templateUrl: 'templates/member/SignUp.html',
    controller: 'LoginControl'
  })
  .state('Verification', {
    url: '/Verification',
    templateUrl: 'templates/member/Verification.html',
    controller: 'LoginControl'
  })
  .state('app.MainPage', {
    url: '/MainPage',
    views: {
        'menuContent': {
        templateUrl: 'templates/map/MainPage.html',
        controller: 'MainControl'
      }
    }
  })
  .state('app.friends', {
    url: '/friends',
    views: {
        'menuContent': {
        templateUrl: 'templates/sidemenu/friends.html',
        //controller: 'MainControl'
      }
    }
  })
  .state('app.settings', {
    url: '/settings',
    views: {
        'menuContent': {
        templateUrl: 'templates/sidemenu/settings.html',
        //controller: 'MainControl'
      }
    }
  })
  .state('app.history', {
    url: '/history',
    views: {
        'menuContent': {
        templateUrl: 'templates/sidemenu/history.html',
        controller: 'historyCtrl'
      }
    }
  })
  .state('app.profile', {
    url: '/profile',
    views: {
        'menuContent': {
        templateUrl: 'templates/sidemenu/profile.html',
      }
    }
  })
  .state('upload_picture', {
    url: '/upload_picture',
    templateUrl: 'templates/member/upload_picture.html',
    controller: 'CameraCtrl'
  })


  $urlRouterProvider.otherwise("/Login");
})
