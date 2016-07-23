module.exports = function(app){
  app.controller('ResumeController', [ResumeController]);
};

function ResumeController(){
  this.profile = 'Full-stack developer specializing in MEAN stack. Team leader and full-lifecycle project manager with 5 years of experience in SEO and content marketing.';
  this.projects = [
    {
      title:'Pong Fellows',
      link: 'https://pongfellows.herokuapp.com/#/',
      description: 'Angular.js web app for recording and facilitating intra-office ping pong competitions.',
      contributions:['Designed schemas for storing competitor information and game data in MongoDB.', 'Built REST API with authentication and authorization to access persisted competitor and game data with Express.js.', 'Devised controller methods and services for efficiently updating the database and front-end leaderboard.', 'Architected client-side routing with ngRoute.'],
      dates: 'July 2016',
      tags: ['Angular.js', 'Node.js', 'NoSQL', 'CSS', 'Heroku', 'Rest APIs', 'Algorithms']
    },
    {
      title:'PlopJS',
      link: 'http://npmjs.com/package/plopjs',
      description: 'Command line interface for streamlining project setup with boilerplates and templates.',
      contributions:['Built primary functionality with Node.js and various NPM packages for file system manipulation and Git/GitHub integration', 'Oversaw testing with Mocha framework and Chai assertion library', 'Directed documentation in GitHub-flavor markdown'],
      dates: 'June 2016',
      tags: ['Node.js', 'Project Management', 'TDD', 'Command Line', 'I/O']
    },
    {
      title:'RepFindr',
      link: 'http://rep-findr.firebaseapp.com',
      description: 'Single-page app for finding US elected officials\' contact information.',
      contributions:['Archtected project according to MVC principles', 'Used jQuery and Sass for UX/UI', 'Implemented HTML templating with Handlebars.js and client-side routing with Page.js', 'Leveraged Google Maps and Civic Data APIs and managed data programmatically', 'Created Firebase persistence layer to collect user data'],
      dates: 'May 2016',
      tags: ['MVC', 'jQuery', 'HTML Templating', 'Project Management', 'AJAX', 'Google Maps', 'Sass']
    }
  ];
  this.skills = ['Node.js', 'Express.js', 'Angular.js', 'MongoDB', 'SQL', 'JavaScript', 'jQuery', 'HTML5', 'CSS3', 'Sass', 'AJAX', 'Git/GitHub', 'Command Line', 'MVC', 'TDD', 'REST', 'SEO', 'Gulp/Build Tools'];
  this.experience = [
    {
      company: 'Student Experts',
      titles: 'Account Manager, Program Manager',
      dates: '1/13 - 6/16',
      responsibilities: [
        'Developed and implemented new content marketing products and services, and negotiated contract terms',
        'Conferred with clients about the direction and execution of new content marketing strategies',
        'Managed campaigns and products through lifecycle - concept, development, distribution, reworking, renewal, etc',
        'Oversaw creative direction and brand consistency for clients with local and nationwide presence',
        'Managed a rotating team of copywriters and marketers, selecting personnel to suit projects',
        'Reported directly to CEO, interviewed job applicants, conducted performance reviews, implemented improvement plans'
      ]
    },
    {
      company: 'Student Experts',
      titles: 'Senior Project Manager',
      dates: '3/12 - 1/13',
      responsibilities: [
        'Oversaw content marketing programs for up to 65 clients on a monthly basis',
        'Developed organizational structure and internal career tracks for writers and editors',
        'Collaborated on development of new products and services',
        'Developed a style guide for content marketing in the automotive industry'
      ]
    },
    {
      company: 'Student Experts',
      titles: 'Copyeditor',
      dates: '5/11 - 3/12',
      responsibilities: [
        'Copyedited 75,000 words of online marketing content per week',
        'Provided mentoring and training for new writers and led employee development'
      ]
    }
  ];
  this.education = [
    {
      school: 'Code Fellows - Seattle',
      certificate: 'Certificate',
      concentration: 'Advanced JavaScript',
      dates: '2016'
    },
    {
      school: 'The University of Arizona',
      certificate: 'Bachelor of Arts',
      concentration: 'Formal Linguistics',
      dates: '2010'
    }
  ];
}
