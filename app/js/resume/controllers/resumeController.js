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
      tech: 'Stuff',
      role: '...',
      dates: '...',
      tags: ['Angular', 'Node.js', 'NoSQL', 'Sass']
    },
    {
      title:'PlopJS',
      link: 'http://npmjs.com/package/plopjs',
      description: 'Command line interface for streamlining project setup with easy-to-use boilerplates and templates.',
      tech: 'Built on Node.js using fs-extra for file system manipulation, NodeGit for Git/GitHub interfacing, and vorpal for the CLI framework.',
      role: 'Managed project, built primary functionality, oversaw documentation and testing.',
      dates: 'June 2016',
      tags: ['Node.js', 'Project Management', 'TDD', 'Command Line', 'I/O']
    },
    {
      title:'RepFindr',
      link: 'http://rep-findr.firebaseapp.com',
      description: 'Single-page application for finding elected US officials and their contact information based on user address.',
      tech: 'Built with MVC structure, jQuery, Sass, Handlebars.js for HTML templating, Page.js for client-side routing, Google APIs for public data, and Firebase for deployment and collection of user data.',
      role: 'Managed project, planned API calls and data handling, integrated modals.',
      dates: 'May 2016',
      tags: ['MVC', 'jQuery', 'HTML Templating', 'Project Management', 'AJAX', 'Google Maps', 'Sass']
    }
  ];
  this.skills = ['Node.js', 'Express', 'Angular', 'MongoDB', 'SQL', 'JavaScript', 'jQuery', 'HTML5', 'CSS3', 'Sass', 'AJAX', 'Git/GitHub', 'Command Line', 'MVC', 'Test-Driven Development', 'RESTful Web Services', 'SEO/Content Marketing'];
  this.experience = [
    {
      company: 'Student Experts',
      positions:[
        {
          titles: ['Account Manager, Program Manager'],
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
          titles: ['Senior Project Manager'],
          dates: '1/13 - 6/16',
          responsibilities: [
            'Oversaw content marketing programs for up to 65 clients on a monthly basis',
            'Developed organizational structure and internal career tracks for writers and editors',
            'Collaborated on development of new products and services',
            'Developed a style guide for content marketing in the automotive industry'
          ]
        },
        {
          titles: ['Copywriting Contractor, Head Staff Writer, Copyeditor'],
          dates: '1/13 - 6/16',
          responsibilities: [
            'Copyedited 75,000 words of online marketing content per week',
            'Provided mentoring and training for new writers and led employee development'
          ]
        }
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
