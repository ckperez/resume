module.exports = function(app){
  app.directive('bottomDirective', function(){
    return {
      templateUrl: './templates/bottomDirective.html'
    };
  });
};
