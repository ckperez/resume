module.exports = function(app){
  app.directive('topDirective', function(){
    return {
      templateUrl: './templates/topDirective.html'
    };
  });
};
