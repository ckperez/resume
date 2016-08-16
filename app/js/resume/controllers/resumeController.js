module.exports = function(app){
  app.controller('ResumeController', ['$http', ResumeController]);
};

function ResumeController($http){
  this.$http = $http;
  this.errorMsg = function(err){
    console.error(`Error getting data : ${err}`);
  };
  this.profile = 'Full-stack developer specializing in MEAN stack. Team leader and full-lifecycle project manager with 5 years of experience in SEO and content marketing.';
  this.skills;
  this.projects;
  this.experience;
  this.education;

  this.getSkills = function(){
    $http.get('/db/skills.json')
      .then((res)=>{
        this.skills = res.data;
      }, this.errorMsg);
  };

  this.getProjects = function(){
    $http.get('/db/projects.json')
      .then((res)=>{
        this.projects = res.data;
      }, this.errorMsg);
  };

  this.getExperience = function(){
    $http.get('/db/experience.json')
      .then((res)=>{
        this.experience = res.data;
      }, this.errorMsg);
  };

  this.getEducation = function(){
    $http.get('/db/education.json')
      .then((res)=>{
        this.education = res.data;
      }, this.errorMsg);
  };
  this.getSkills();
  this.getProjects();
  this.getExperience();
  this.getEducation();
}
