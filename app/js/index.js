'use strict';

const angular = require('angular');
const ngRoute = require('angular-route');

const app = angular.module('resumeApp', [ngRoute]);

require('./resume')(app);

app.config(function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: './templates/views/home.html',
    controller: 'ResumeController',
    controllerAs: 'ctrl'
  })
  .when('/projects/:title', {
    templateUrl: './templates/views/project.html',
    controller: 'ResumeController',
    controllerAs: 'ctrl'
  });
});
