module.exports = function(app){
  app.factory('navigationService', function($location){
    const service = {};

    service.goHome = function(){
      $location.path('/');
    };

    service.goToProject = function(project){
      let urlTitle = project.title.toLowerCase().replace(' ','-');
      $location.path('/projects/' + urlTitle);
    };

    return service;
  });
};
