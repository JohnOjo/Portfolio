(this["webpackJsonpportfolio-fe"]=this["webpackJsonpportfolio-fe"]||[]).push([[0],{26:function(A,e,t){},27:function(A,e,t){},28:function(A,e,t){},29:function(A,e,t){},36:function(A,e,t){},37:function(A,e,t){},38:function(A,e,t){"use strict";t.r(e);var i=t(1),n=t.n(i),a=t(20),s=t.n(a),o=(t(26),t(6)),r=t(7),c=t(9),d=t(8),l=(t(27),t(12)),g=t(2),u=(t(28),"Bio"),h="My Work",p="Tricks Up My Sleeve",m=t(14),j=(t(29),t.p+"static/media/mobile-nav-dropdown.607fe35f.svg"),v=t.p+"static/media/mobile-close-dropdown.e7a5514a.svg",b=t(0),B=[u,p,h],I=function(A){Object(c.a)(t,A);var e=Object(d.a)(t);function t(A){var i;return Object(o.a)(this,t),(i=e.call(this,A)).state={isDesktop:!1,dropdownOpen:!1},i.updatePredicate=i.updatePredicate.bind(Object(m.a)(i)),i}return Object(r.a)(t,[{key:"componentDidMount",value:function(){this.updatePredicate(),window.addEventListener("resize",this.updatePredicate)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updatePredicate)}},{key:"updatePredicate",value:function(){this.setState({isDesktop:window.innerWidth>704}),window.innerWidth>704&&this.setState({dropdownOpen:!1})}},{key:"renderHeaderButton",value:function(A){var e=this;return Object(b.jsxs)("div",{className:"header-text header-button",onClick:function(){return e.handleClick(A)},children:[Object(b.jsx)("div",{className:"header-item-text",children:A}),Object(b.jsx)("div",{className:"header-underline"})]},A)}},{key:"renderHeaderButtons",value:function(){var A=this;return B.map((function(e){return A.renderHeaderButton(e)}))}},{key:"handleClick",value:function(A){switch(A){case u:window.scrollTo({top:0,left:0,behavior:"smooth"});break;case p:window.scrollTo({top:500,left:0,behavior:"smooth"});break;case h:window.scrollTo({top:1400,left:0,behavior:"smooth"})}}},{key:"handleMobileDropdown",value:function(){this.setState({dropdownOpen:!this.state.dropdownOpen})}},{key:"renderMobileHeaderButtons",value:function(){var A=this;return B.map((function(e){return A.renderMobileHeaderButton(e)}))}},{key:"renderMobileHeaderButton",value:function(A){var e=this;return Object(b.jsxs)("div",{className:"header-text mobile-header-button",onClick:function(){return e.handleClick(A)},children:[Object(b.jsx)("div",{className:"header-item-text",children:A}),Object(b.jsx)("div",{className:"header-underline"})]},A)}},{key:"render",value:function(){var A=this,e=this.state.isDesktop;return Object(b.jsxs)("div",{className:"header",children:[Object(b.jsx)("div",{className:"header-text-container",onClick:function(){return A.handleClick(u)},children:Object(b.jsx)("div",{className:"header-text header-title typed-out",children:"John Ojo"})}),Object(b.jsx)("div",{className:"f-1"}),!e&&!this.state.dropdownOpen&&Object(b.jsx)("img",{className:"dropdown",src:j,alt:"dropdown",onClick:function(){return A.handleMobileDropdown()}}),e&&this.renderHeaderButtons(),!e&&this.state.dropdownOpen&&Object(b.jsxs)("div",{className:"mobile-header-buttons",children:[!e&&this.state.dropdownOpen&&Object(b.jsx)("img",{className:"dropdown-close",src:v,alt:"dropdown",onClick:function(){return A.handleMobileDropdown()}}),this.renderMobileHeaderButtons()]})]})}}]),t}(i.Component),M=Object(g.f)(I),x=(t(36),function(A){Object(c.a)(t,A);var e=Object(d.a)(t);function t(){return Object(o.a)(this,t),e.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){return Object(b.jsx)("div",{className:"footnote-container",children:Object(b.jsxs)("div",{className:"footnote-ends",children:["Privacy policy ","\xa0\xa0\xa0"," @2022","\xa0",Object(b.jsx)("div",{className:"footnote-end"}),Object(b.jsx)("div",{className:"footnote-middle",children:"JOHN OJO"}),". All rights reserved\r"]})})}}]),t}(i.Component)),f=Object(g.f)(x),E=t.p+"static/media/angular.3f781d91.svg",Q=t.p+"static/media/amazon_web_services.cc38dbe9.svg",C=t.p+"static/media/nodejs.dd47e26e.svg",w=t.p+"static/media/net_core.e2aac1c9.svg",D=t.p+"static/media/react.928f956d.svg",O=t.p+"static/media/postgresql.29aef667.svg",G=t.p+"static/media/mongo_db.4d0524e8.svg",k=t.p+"static/media/html.cf51b387.svg",y=t.p+"static/media/typescript.fccb6f0f.svg",Y=t.p+"static/media/javacript.61c1fa6b.svg",N=t.p+"static/media/csharp.fc430729.png",S=t.p+"static/media/css.6854789a.svg",J=t.p+"static/media/git.c62d7c4a.svg",P=t.p+"static/media/docker.6d1afdb4.png",T=t.p+"static/media/prismic.829a7bc1.svg",R=t.p+"static/media/name_in_code.4fb45664.svg",U=t.p+"static/media/john_image.938b8f9f.svg",H=t.p+"static/media/tan_ellipse.1b3118c0.svg",F=t.p+"static/media/brown_ellipse.34e65961.svg",z=(t(37),t.p+"static/media/heroku.76a583ed.svg"),W=function(A){Object(c.a)(t,A);var e=Object(d.a)(t);function t(A){var i;return Object(o.a)(this,t),(i=e.call(this,A)).state={showFavouriteProjects:!0},i}return Object(r.a)(t,[{key:"generateProjects",value:function(A){var e=this;if((null===A||void 0===A?void 0:A.length)>0)return A.map((function(A,t){return e.renderProject(A,t)}))}},{key:"renderProject",value:function(A,e){return Object(b.jsx)("div",{className:"other-project-container",children:Object(b.jsxs)("div",{className:"project-container",children:[Object(b.jsxs)("div",{className:"project-card-container",children:[Object(b.jsx)("div",{className:"project-card-chips-container",children:this.generateChips(null===A||void 0===A?void 0:A.chips)}),Object(b.jsxs)("div",{className:"project-card-content slide",children:[Object(b.jsx)("div",{className:"project-technologies-used-list-container",children:this.generateProjectTechnologies(null===A||void 0===A?void 0:A.technologiesUsedImages)}),Object(b.jsx)("div",{className:"project-card-title",children:null===A||void 0===A?void 0:A.title})]})]}),Object(b.jsxs)("div",{className:"project-text-container",children:[this.generateProjectInfo(null===A||void 0===A?void 0:A.body),(null===A||void 0===A?void 0:A.extraProjectInfo)&&Object(b.jsxs)("div",{className:"project-text-container",children:[this.generateProjectInfo(null===A||void 0===A?void 0:A.extraProjectInfo),Object(b.jsx)("br",{}),this.generateLinks(null===A||void 0===A?void 0:A.links)]})]})]},e)},e)}},{key:"generateProjectInfo",value:function(A){if((null===A||void 0===A?void 0:A.length)>0)return A.map((function(A,e){return Object(b.jsx)("li",{className:"list",children:Object(b.jsx)("span",{className:"list-span",children:A})},e)}))}},{key:"generateProjectTechnologies",value:function(A){if((null===A||void 0===A?void 0:A.length)>0)return A.map((function(A,e){return Object(b.jsx)("img",{className:"project-technologies-used bounce-"+e,src:A,alt:"technology"},e)}))}},{key:"generateLinks",value:function(A){if((null===A||void 0===A?void 0:A.length)>0)return A.map((function(A,e){return Object(b.jsxs)("div",{className:"link-container",children:[Object(b.jsxs)("div",{className:"link-info",children:[null===A||void 0===A?void 0:A.info,"\xa0"]}),Object(b.jsx)("a",{className:"link",href:null===A||void 0===A?void 0:A.link,target:"_blank",rel:"noopener noreferrer",children:null===A||void 0===A?void 0:A.link})]},e)}))}},{key:"handleChipClick",value:function(A){this.setState({showFavouriteProjects:A})}},{key:"generateChips",value:function(A){if((null===A||void 0===A?void 0:A.length)>0)return A.map((function(A,e){return Object(b.jsx)("div",{className:"chip-flexible-width",children:A},e)}))}},{key:"render",value:function(){var A=this,e=this.state.showFavouriteProjects,t=[{title:"Bookings and Claims Project",body:["Description: An office and events bookings,  as well as claims web application, following a microservices architecture. ","Role: Technical Team Lead, Managed 32 graduates","Tasks: Drew up solution architecture, setup cloud environment, deployments , setup server, managed team, scoped out project features, reviewed pull requests.","Tech: Angular 12, .NET 5, PostgreSQL, AWS (EC2, S3, RDS, ELB, Route53, Certificate Manager), Docker","Worked in a team environment"],technologiesUsedImages:[E,w,O,Q,P],chips:["Angular 12",".NET 5","PostgreSQL","AWS","Docker"],extraProjectInfo:["What I loved about this project is that it encompassed everything it takes to build an application and be a software developer. Development, hosting, working in a large team, thinking of cost implications, project management, project scoping, solution architecture, weighing up which method would give the most optimal solution, sharing information so the graduates can learn more and mentoring them. I saw a different side to being a software developer other than just tech. You can learn any technology online or through a course, but learning to manage and understand people is a whole other different skill. It was a really great experience being on the project and the best part was seeing the graduates learn and grow into capable developers."]},{title:"Designer's Portfolio",body:["Description: Created a web application of a designer's portfolio to showcase their designs and experience.","Role: Fullstack developer.","Tasks: Setup cloud environment, setup CI/CD pipelines, developed fronted, developed backend, mobile responsiveness, setup email server.","Tech: React (jsx), NodeJS (javascript), Express.js, SendGrid, Github Pages, Github Actions, Heroku","Worked as sole developer."],links:[{info:"Link to website:",link:"https://alfonzo28.github.io/ARL/#/"},{info:"Github repo (source code):",link:"https://github.com/Alfonzo28/ARL"}],chips:["React","NodeJS","SendGrid","Heroku"],technologiesUsedImages:[D,C,"data:image/png;base64,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",z],extraProjectInfo:["What I enjoyed about this project was the amount of things I had to learn and figure out by myself as the sole developer. Having to build the front-end and back-end from scratch, having to host the application, having to set up CI/CD pipelines and other tasks. I had to solve problems by myself in terms of performance and what technologies would be most suitable. I had to take ownership and more responsibility in every aspect of the system. The experience really added to my skills and pushed me to keep on expanding my knowledge and continuously improve."]}],i=[{title:"Medical Project",body:["Description: Medical application that stored patient appointments and data and allowed researchers and doctors to view patient information.","Tasks: Builded up CMS, wrote automated tests, created APIs to get, update and add patient data and created dynamic frontend to handle CMS content, edit patient data and view patient data.","Tech: React-Redux, NodeJs (TypeScript), Express.js, Postgresql, TypeORM, AWS S3, Prismic","Worked in a team environment."],chips:["React","NodeJS","Postgresql","AWS","Prismic"],technologiesUsedImages:[D,C,O,Q,T]},{title:"Security/Auditing Project",body:["Description: Report system for benchmarking, assessing and auditing, through the use of a generic front-end UI builder.","Tasks: Setup server, created APIs to save and retrieve data, created data filtering functionality, wrote automated tests and created dynamic UI components.","Tech: Angular 9, NodeJs (javascript), Express.js, MongoDB, Mongoose, Jenkins, Redis","Worked in a team environment."],chips:["React","NodeJS","MongoDB","AWS"],technologiesUsedImages:[E,C,G,Q]},{title:"Mining Project",body:["Description: Opportunity application system for applying to projects provided by the mining sector.","Tasks: Created front-end components and pages, created file upload and download functionality, setup server and created APIs to save and retrieve data.","Tech: Angular 9, NodeJs (JavaScript), Express.js, Postgresql, Sequelize, AWS S3","Worked in a team environment."],chips:["Angular","NodeJS","Postgresql","AWS"],technologiesUsedImages:[E,C,O,Q]},{title:"Financial Project",body:["Description: Advertisment website for electronic safe that printed operational data and allowed users to store and dispense cash.","Tasks: Search engine optimisation, created web application to describe application and created forms to capture specifications of safe and user details.","Tech: React","Worked in a team environment"],chips:["React"],technologiesUsedImages:[D]},{title:"Reporting Project ",body:["Description: Reporting system to view historical and forecasted data of a sector/industry given a scenario to measure the growth or decline of the sector/industry. Application is in English and Arabic (right to left reading).","Tasks: Created front-end components and pages, created GeoMap and plotted boundaries on communities, created light and dark mode, created graph filters and queries, wrote automated tests, created email server, created script to translate english to arabic and created APIs to save and retrieve data.","Tech: Angular 11, NodeJs (JavaScript), Express.js, Postgresql, Sequelize, MongoDB, Mongoose, CubeJs","Worked in a team environment."],chips:["Angular","NodeJS","Postgresql","MongoDB"],technologiesUsedImages:[E,C,O,G]},{title:"Security/Auditing Project",body:["Description: Assessment system to assess controls in a system and view statistical data on the assessed controls.","Tasks: Setup server, created APIs to save and retrieve data, created file upload and download functionality, created data filtering functionality, wrote automated tests and created dynamic UI components.","Tech: Angular 9, NodeJs (JavaScript), Express.js, MongoDB, Mongoose, AWS S3","Worked in a team environment."],chips:["Angular","NodeJS","MongoDB","AWS"],technologiesUsedImages:[E,C,G,Q]}];return Object(b.jsxs)("div",{className:"projects-container",children:[Object(b.jsx)("div",{className:"projects-title",children:"Portfolio"}),Object(b.jsx)("div",{className:"my-work-title",children:h}),Object(b.jsxs)("div",{className:"chip-container",children:[Object(b.jsx)("div",{className:e?"chip":"chip chip-shade",onClick:function(){return A.handleChipClick(!0)},children:"Favourite Projects"}),Object(b.jsx)("div",{className:e?"chip chip-shade":"chip",onClick:function(){return A.handleChipClick(!1)},children:"Other Projects"})]}),Object(b.jsx)("div",{className:"projects-title",children:e?"Favourite Projects":"Other Projects"}),this.generateProjects(e?t:i)]})}}]),t}(i.Component),q=Object(g.f)(W),K=function(A){Object(c.a)(t,A);var e=Object(d.a)(t);function t(){return Object(o.a)(this,t),e.apply(this,arguments)}return Object(r.a)(t,[{key:"generateTechnologies",value:function(A){if((null===A||void 0===A?void 0:A.length)>0)return A.map((function(A,e){return Object(b.jsx)("img",{className:"technologies-used",src:A,alt:"technology"},e)}))}},{key:"render",value:function(){var A=[E,D,C,w,Q,O,G,P,T,"data:image/png;base64,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",y,Y,N,k,S,J];return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(M,{}),Object(b.jsxs)("div",{className:"about-me-container",children:[Object(b.jsxs)("div",{className:"about-me-bio",children:[Object(b.jsx)("img",{className:"name-in-code",src:R,alt:"name"}),Object(b.jsx)("div",{className:"about-me-title",children:"Hi! I'm John Ojo and I solve problems"}),Object(b.jsxs)("div",{className:"about-me-subtitle",children:[Object(b.jsxs)("div",{className:"about-me-subtitle-start",children:["Intermediate Software Developer |","\xa0"]}),Object(b.jsx)("div",{className:"about-me-subtitle-end",children:"Master's Student | AWS Certified"})]}),Object(b.jsx)("div",{className:"about-me-body",children:"The thing I love the most about my field is that it's all about solving problems. Whether its front-end, back-end or cloud. Whether it's building custom software or integrating with existing services. Whether I have to use my existing knowledge of what I have learned over the years or Google it. My job is to solve problems. My passion is using problem solving to improve things and to improve the the way things are done. Software development gave me the platform to do that."})]}),Object(b.jsxs)("div",{className:"about-me-image-container",children:[Object(b.jsx)("img",{className:"about-me-tan-ellipse",src:H,alt:"Tan Ellipse"}),Object(b.jsx)("img",{className:"about-me-brown-ellipse",src:F,alt:"Brown Ellipse"}),Object(b.jsx)("img",{className:"about-me-image",src:U,alt:"John"})]})]}),Object(b.jsxs)("div",{className:"technologies-container",children:[Object(b.jsx)("div",{className:"technologies-title",children:p}),Object(b.jsx)("div",{className:"technologies-list-container",children:this.generateTechnologies(A)})]}),Object(b.jsx)(q,{}),Object(b.jsx)(f,{})]})}}]),t}(i.Component),Z=function(A){Object(c.a)(t,A);var e=Object(d.a)(t);function t(){return Object(o.a)(this,t),e.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){return Object(b.jsx)(l.a,{children:Object(b.jsx)(g.c,{children:Object(b.jsx)(g.a,{exact:!0,path:"/",children:Object(b.jsx)(K,{})})})})}}]),t}(i.Component),L=function(A){Object(c.a)(t,A);var e=Object(d.a)(t);function t(){return Object(o.a)(this,t),e.apply(this,arguments)}return Object(r.a)(t,[{key:"getRoutes",value:function(){var A=[];return A.push(Object(b.jsx)(Z,{},"routes")),A}},{key:"render",value:function(){return Object(b.jsx)("div",{className:"App",children:this.getRoutes()})}}]),t}(i.Component),V=function(A){A&&A instanceof Function&&t.e(3).then(t.bind(null,39)).then((function(e){var t=e.getCLS,i=e.getFID,n=e.getFCP,a=e.getLCP,s=e.getTTFB;t(A),i(A),n(A),a(A),s(A)}))};s.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(L,{})}),document.getElementById("root")),V()}},[[38,1,2]]]);
//# sourceMappingURL=main.e49f6a98.chunk.js.map