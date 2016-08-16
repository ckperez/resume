module.exports = function(app){
  app.factory('jsonDataService', function($http){
    const service = {};

    service.getData = function(resource){
      let url = '/db/' + resource + '.json';
      $http.get(url)
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
