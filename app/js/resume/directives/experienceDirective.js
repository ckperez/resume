module.exports = function(app){
  app.directive('experienceDirective', function(){
    return {
      templateUrl: './templates/experienceDirective.html',
      scope: {
        experience: '='
      }
    };
  });
};
