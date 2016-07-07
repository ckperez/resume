module.exports = function(app){
  app.directive('skillsDirective', function(){
    return {
      templateUrl: './templates/skillsDirective.html',
      scope: {
        skills: '='
      }
    };
  });
};
