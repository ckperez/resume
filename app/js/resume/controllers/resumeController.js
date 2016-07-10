module.exports = function(app){
  app.controller('ResumeController', [ResumeController]);
};

function ResumeController(){
  this.profile = 'Full-stack developer with 5 years\' experience in...';
  this.projects = [
    {
      title:'Ping Pong Thing',
      link: 'http...',
      description: 'Ladder...',
      contributions:[],
      dates: '...',
      tags: ['Angular', 'Node.js', 'NoSQL', 'Sass']
    },
    {
      title:'PlopJS',
      link: 'http://npmjs.com/package/plopjs',
      description: 'Command line interface for streamlining project setup with easy-to-use boilerplates and templates.',
      contributions:['Built primary functionality with Node.js and various NPM packages for file system manipulation and Git/GitHub integration', 'Oversaw testing with Mocha framework and Chai assertion library', 'Directed documentation in GitHub-flavor markdown'],
      dates: 'June 2016',
      tags: ['Node.js', 'Project Management', 'TDD', 'Command Line', 'I/O']
    },
    {
      title:'RepFindr',
      link: 'http://rep-findr.firebaseapp.com',
      description: 'Single-page application for finding elected US officials and their contact information based on user address.',
      contributions:['Archtected project according to MVC principles', 'Used jQuery and Sass for UX/UI', 'Implemented HTML templating with Handlebars.js and client-side routing with Page.js', 'Leveraged Google Maps and Civic Data APIs and managed data programmatically', 'Created Firebase persistence layer to collect user data'],
      dates: 'May 2016',
      tags: ['MVC', 'jQuery', 'HTML Templating', 'Project Management', 'AJAX', 'Google Maps', 'Sass']
    }
  ];
  this.skills = ['Node.js', 'Express', 'Angular', 'MongoDB', 'SQL', 'JavaScript', 'jQuery', 'HTML5', 'CSS3', 'Sass', 'AJAX', 'Git/GitHub', 'Command Line', 'MVC', 'Test-Driven Development', 'RESTful Web Services', 'SEO/Content Marketing'];
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
      dates: '1/13 - 6/16',
      responsibilities: [
        'Oversaw content marketing programs for up to 65 clients on a monthly basis',
        'Developed organizational structure and internal career tracks for writers and editors',
        'Collaborated on development of new products and services',
        'Developed a style guide for content marketing in the automotive industry'
      ]
    },
    {
      company: 'Student Experts',
      titles: 'Copywriting Contractor, Head Staff Writer, Copyeditor',
      dates: '1/13 - 6/16',
      responsibilities: [
        'Copyedited 75,000 words of online marketing content per week',
        'Provided mentoring and training for new writers and led employee development'
      ]
    }
  ];
  this.education = [
    {
      school: 'Code Fellows',
      certificate: 'Certificate',
      concentration: 'Advanced JavaScript Development',
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
