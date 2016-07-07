module.exports = function(app){
  app.directive('profileDirective', function(){
    return {
      templateUrl: './templates/profileDirective.html',
      scope: {
        profile: '='
      }
    };
  });
};
