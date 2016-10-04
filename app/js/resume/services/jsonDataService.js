module.exports = function(app){
  app.factory('jsonDataService', function($http){
    const service = {};

    service.getData = function(section){
      $http.get('/db/' + section + '.json')
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
//someday this will work its way into the code...
