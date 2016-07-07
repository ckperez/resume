module.exports = function(app){
  app.directive('projectsDirective', function(){
    return {
      templateUrl: './templates/projectsDirective.html',
      scope: {
        projects: '='
      }
    };
  });
};
