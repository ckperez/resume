module.exports = function(app){
  app.directive('contactDirective', function(){
    return {
      templateUrl: './templates/contactDirective.html',
      scope: {
        profile: '='
      }
    };
  });
};
