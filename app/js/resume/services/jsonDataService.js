module.exports = function(app){
  app.factory('jsonDataService', function($http){
    const service = {};

    service.getSkills = function(){
      $http.get('/db/skills.json')
        .then((res)=>{
          console.log('service', res.data);
          return res.data;
        }, (err)=>{
          console.error(`Error getting data : ${err}`);
        });
    };

    return service;
  });
};
