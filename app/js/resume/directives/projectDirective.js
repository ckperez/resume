module.exports = function(app){
  app.directive('projectDirective', function(){
    return {
      templateUrl: './templates/projectDirective.html',
      scope: {
        project: '='
      }
    };
  });
};
