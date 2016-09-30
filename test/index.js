var test = require('tape');
var resumeToPDF = require('../');

var resumeJson = {
  "bio":
    {
      "firstName": "Adam",
      "lastName": "Moon",
      "email": {
        "personal": "adammoon.career@gmail.com"
      },
      "phone": {
        "personal": "(214) 600-3604"
      },
    "label": "Full Stack Developer",
    "summary": "I am a full stack developer who enjoys working in an agile environment with a collaborative team. I am passionate about creating modular, scalable, smart looking web apps. I enjoy balancing the need for test driven and benchmark driven development, modern creative design, and task completion efficiency and quality. I specialize in .NET and node.js full stack development.",
    "location": {
      "postalCode": "75230",
      "city": "Dallas",
      "countryCode": "US",
      "region": "Texas"
    },
    "profiles":
      {
        "twitter": "jstestabul",
        "github": "adamjmoon",
        "codepen": "cmpunk",

      },
    "gravatar": "//www.gravatar.com/avatar/6e47c6fb701636270812a7e99cf708cc?s=60&r=pg&d=404"

  },
  "work": [
    {
      "company": "defi SOLUTIONS Inc",
      "position": "Senior Software Engineer",
      "website": "http://defisolutions.com",
      "startDate": "2015-11-03",
      "summary": "defi SOLUTIONS provides flexible loan origination system for auto lenders.",
      "highlights": [
        "developed several pages using angular, scss, babel & es2015",
        "implemented a proper js/css build system with gulp",
        "introduced the use of scss, flexbox, material design, mocha and karma for unit testing, babel for es2015, eslint",
        "currently working and rearchitecting core app to allow independent js/css/img deployment, and new implementation with react with redux and redux-sagas, react material-ui, and webpack"
        ]
    },
    {
      "company": "One Technologies, L.P.",
      "position": "Senior Software Engineer II, Lead Web Developer",
      "website": "http://onetechnologies.net",
      "startDate": "2009-04-06",
      "summary": "One Technologies is a credit monitoring service company offering such online products as NATIONALCREDITREPORT.com, SCORESENSE.com, and CREDITCHECKPLUS.CO.UK",
      "highlights": [
        "Designed and developed Single Page Enrollment Platform to enhance product enrollment experience while allowing full A to B testing. The design focus was small footprint, force js component modular testability, complete design flexibility, and easy path extensibility. Avoided large SPA framewoks to keep size down. Utilized knockout.js, async.js, when.js (promises), and require.js. For path optimization, Only one .css and one .js represented a path utilizing r.js (require.js optimizer). Each path optimization allowed for small footprint of less than 150k gzipped. Created serveral knockout custom bindings and compenents to keep ui component modularity and DOM manipulation separate from business logic. Platform replaced a VB.NET ASP.NET Forms App. I introduced direct automated path deployment to Akamai cdn to allow easy deployment of single path or project including multiple paths.",
        "Implementated multiple ASP.NET Web APIs in effort to move to Microservice Architecture. Used SimpleInjector for Dependency Injection and Dapper for ORM / Stored Procedures",
        "Helped develop Single Page Product Portal converting from .NET MVC Web App.  Designed to support easy brand extension and flexibility.",
        "Full stack development on team that created a redesigned Angular 1.4 SPA Customer Care Portal replacing old .NET MVC app. Utilized Google Material Design with the Angular Material directives for UI. Also implemented many fullstack features including Authentication, Role Management, Call Management and Customer Offers and Cancellation.",
        "Created Productivity Web App for saving, sharing, executing useful SQL Queries for any DB against any environment.  Created c# JSONTable Library for automatic dynamic mapping of muliple SQL Query results to a JSON format consumable by frontend for automatic HTML Table generation for Query results.  Outstanding performance considering no Type mapping to JSON. Allowed for better experience than SQL Server Management Studio.",
        "Created Productivity enhancer tool to allow a one command git repos synchronization and bootstrapping of all web app, business apis, and DBs. With a microserivce architechture, you have several git repos for individual REST Business APIs which can be a pain to keep in sync with latest code. Utilized node async.js npm module to allow easy parallel processing of each project repos .NET Compilation, DB Creation, Web and Service startup.  The dev environment bootstrapping only took as long as the longest individual task. Very freeing result when developers and non developers could keep a clean local env with one command."
      ]
    },
    {
      "company": "Publishing Concepts, L.P.",
      "position": "Software Developer",
      "website": "www.publishingconcepts.com",
      "startDate": "2007-09-01",
      "endDate": "2009-04-01",
      "summary": "Publishing Concepts provides college alumni print, website, and data services",
      "highlights": [
        "Supported and developed on a College Alumni Website product that supported Profile Updating, Alumni Search, Alumni Giving Processing, and Alumni Events Listing and Processing. Single-page site design with multiple .NET user controls. Ex: perunanet.net (SMU alumni site)",
        "Helped upgrade and convert the Web Project from the .NET 1.1 Framework to the .NET 2.0/3.5 Framework.",
        "Introduced and Implemented CruiseControl.NET to provide a Continuous Integration Solution for code builds to the Staging Environment. Utilized a combination of CruiseControl.NET built in tasks and NANT scripts to complete the build process.",
        "Implemented multiple Single Sign-On solutions. Integrated .NET Forms Authentication with multiple SSO authentication protocols. Including LDAP, CAS, Shibboleth, Facebook Auth"
      ]
    },
    {
      "company": "Crozier & Henderson Productions Inc.",
      "position": "Software Developer",
      "website": "https://www.hotonhomes.com",
      "startDate": "2005-01-01",
      "endDate": "2007-01-01",
      "highlights": [
        "ASP.NET Template-based website product marketed to homebuilders designed to support multiple builder websites using a shared source code and database.  Provided Administration Website to each builder for Content Management and Website Traffic Reporting.",
        "Developed admin content management pages allowing for CRUD functionalities for builder data and media content",
        "Prepared system for migration to new data center where apps were to be load balanced across three web servers"
      ]
    }
  ],
  "education": [
    {
      "institution": "Southern Methodist University",
      "area": "Computer Engineering",
      "studyType": "Bachelor of Science",
      "startDate": "2001-08-15",
      "endDate": "2004-12-15",
      "gpa": "3.7"
    }
  ],
  "publications": [],
  "languages": [],
  "skills": [
    {
      "name": "Languages",
      "keywords": [
        "C#",
        "Ruby",
        "C++",
        "go",
        "Javascript"
      ]
    },
    {
      "name": "Javascript Precompilers",
      "keywords": [
        "Coffeescript",
        "TypeScript",
        "ES6 with Babel"
      ]
    },
    {
      "name": "Javascript App Development",
      "keywords": [
        "angular",
        "durandal",
        "meteor"
      ]
    },
    {
      "name": "Javascript Module Systems",
      "keywords": [
        "AMD - require.js",
        "CommonJS - Node.js, Browserify",
        "ES6 or ECMAScript Module import",
        "System.js - supports AMD, UMD, ES6"
      ]
    },
    {
      "name": "Javascript Frameworks",
      "keywords": [
        "knockout.js",
        "backbone.js",
        "hammer.js",
        "async.js",
        "when.js",
        "lodash.js",
        "react.js",
        "react-redux",
        "redux-sagas",
        "Immutable.js",
        "RxJS",
        "d3"
      ]
    },
    {
      "name": "Javascript Unit Testing / Benchmarking",
      "keywords": [
        "frameworks: mocha, jest, jasmine",
        "mock: sinon",
        "bdd: chai",
        "coverage: istanbul",
        "CI runner: karma",
        "benchmarkjs"
      ]
    },
    {
      "name": "CSS & HTML",
      "keywords": [
        "css3",
        "less",
        "scss",
        "Template Engines: jade, mustache"
      ]
    },
    {
      "name": "UI Automation Frameworks",
      "keywords": [
        "selenium",
        "capybara",
        "phantomjs",
        "casperjs"
      ]
    },
    {
      "name": "Build Tools",
      "keywords": [
        "nant",
        "rake",
        "grunt",
        "gulp",
        "jake",
        "make"
      ]
    },
    {
      "name": "Revision Control Systems",
      "keywords": [
        "CVS",
        "subversion",
        "git"
      ]
    },
    {
      "name": "Continuous Integration Tools",
      "keywords": [
        "CruiseControl",
        "TeamCity",
        "Travis",
        "Bamboo",
        "Jenkins"
      ]
    },
    {
      "name": "REST APIs",
      "keywords": [
        "ASP.NET Web API",
        "NodeJS: Express, Sails.js"
      ]
    },
    {
      "name": "C# Unit Test",
      "keywords": [
        "nunit",
        "nspec",
        "Machine.Specifications",
        "Moq",
        "RhinoMocks"
      ]
    },
    {
      "name": "IOC and Dependency Injection",
      "keywords": [
        "Ninject",
        "SimpleInjector",
        "StructureMap",
        "Autofac"
      ]
    },
    {
      "name": "Database & ORMs",
      "keywords": [
        "TSQL",
        "Stored Procs",
        "SQL Server 2005,2008,2012",
        "MongoDB",
        "NHibernate",
        "Entity Framework",
        "Dapper"
      ]
    },
    {
      "name": "Package Managers",
      "keywords": [
        "nuget",
        "webpack",
        "npm",
        "bower",
        "RubyGems"
      ]
    }
  ],
  "languages": [

  ],
  "publications": [

  ],
  "awards" : [

  ],
  "references" : [

  ],
  "volunteer" : [

  ],
  "interests": [
    {
      "name": "Languages",
      "keywords": [
        "elm",
        "JS ES201*",
        "go",
        "c# 6"
      ]
    },
    {
      "name": "Web Component Library",
      "keywords": [
        "angular-material",
        "material-ui",
        "material-design-light",
        "materialize"
      ]
    },
    {
      "name": "App Development",
      "keywords": [
        "iOS",
        "react-native"
      ]
    },
    {
      "name": "Web Component Frameworks",
      "keywords": [
        "React",
        "Angular 2"
      ]
    },
    {
      "name": "Javascript App Architecture",
      "keywords": [
        "redux",
        "redux-sagas",
        "ImmutableJS"
      ]
    },
    {
      "name": "Javascript Unit Test Frameworks",
      "keywords": [
        "mocha, sinon & chai",
        "ava",
        "jest",
        "jasmine"
      ]
    },
    {
      "name": "Javascript Benchmarking",
      "keywords": [
        "benchmarkjs",
        "itchcork"
      ]
    },
    {
      "name": "Focus",
      "keywords": [
        ".NET Core 1.0",
        "Node.js V6",
        "Isomorphic Apps",
        "redux",
        "redux-sagas"
      ]
    }

  ]
};

test('Test converter on resume.json.', function(t) {
    resumeToPDF(resumeJson, function(err, buffer) {
    t.plan(1);
    t.notOk(err, 'no error');
    });
});
