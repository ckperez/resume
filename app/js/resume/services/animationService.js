module.exports = function(app){
  app.factory('animationService', function(){
    const service = {};
    let halfSkill = angular.element(document.querySelector('.half'));

    let blinkSkills = function(cssClass){
      halfSkill.addClass(cssClass);
      setTimeout(halfSkill.removeClass(cssClass), 500);
    };

    service.runBlink = function(cssClass){
      setInterval(blinkSkills(cssClass), 1000);
    };

    return service;
  });
};
