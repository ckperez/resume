module.exports = function(app){
  require('./jsonDataService')(app);
  require('./navigationService')(app);
};
