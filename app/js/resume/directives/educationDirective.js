module.exports = function(app){
  app.directive('educationDirective', function(){
    return {
      templateUrl: './templates/educationDirective.html',
      scope: {
        education: '='
      }
    };
  });
};
