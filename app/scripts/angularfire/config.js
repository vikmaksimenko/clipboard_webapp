angular.module('firebase.config', [])
  .constant('FBURL', 'http://chat-9aaf5.firebaseio.com')
  .constant('SIMPLE_LOGIN_PROVIDERS', ['password'])

  .constant('loginRedirectPath', '/login');
