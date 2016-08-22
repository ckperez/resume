module.exports = function(app){
  require('./jsonDataService')(app);
  require('./animationService')(app);
  require('./navigationService')(app);
};
