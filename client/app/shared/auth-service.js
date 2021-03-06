(function(){

  angular.module('trApp')
    .factory('AuthService', ['$http', AuthService]);

  function AuthService($http){

    var profile = {};

    profile.check = function(){
      return $http({
        method: 'GET',
        url: '/auth/profile/check'
      });
    };

    profile.update = function(user){
      return $http({
        method: 'POST',
        url: '/auth/profile/update',
        data: user
      });
    }

    return profile;
  }

})();
