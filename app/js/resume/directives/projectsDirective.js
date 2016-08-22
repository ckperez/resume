module.exports = function(app){
  app.directive('projectsDirective', function(){
    return {
      templateUrl: './templates/projectsDirective.html',
      scope: {
        projects: '='
      },
      require: '^ngController',
      link: function($scope, elem, attr, controller){
        $scope.goToProject = controller.goToProject;
      }
    };
  });
};
