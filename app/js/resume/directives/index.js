module.exports = function(app){
  require('./profileDirective')(app);
  require('./projectsDirective')(app);
  require('./skillsDirective')(app);
  require('./experienceDirective')(app);
  require('./educationDirective')(app);
  require('./topDirective')(app);
  //require('./contactDirective')(app);
  require('./bottomDirective')(app);
};
