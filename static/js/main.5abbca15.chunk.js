(this["webpackJsonpportfolio-fe"]=this["webpackJsonpportfolio-fe"]||[]).push([[0],{26:function(A,e,t){},27:function(A,e,t){},28:function(A,e,t){},29:function(A,e,t){},36:function(A,e,t){},37:function(A,e,t){},38:function(A,e,t){},39:function(A,e,t){"use strict";t.r(e);var n=t(1),i=t.n(n),o=t(20),a=t.n(o),s=(t(26),t(4)),r=t(5),c=t(7),l=t(6),d=(t(27),t(12)),g=t(2),u=(t(28),"Bio"),p="My Work",h="Technologies Used",m="Giving Back",v=t(14),j=(t(29),t.p+"static/media/mobile-nav-dropdown.607fe35f.svg"),B=t.p+"static/media/mobile-close-dropdown.e7a5514a.svg",b=t(0),I=[u,h,p],w=function(A){Object(c.a)(t,A);var e=Object(l.a)(t);function t(A){var n;return Object(s.a)(this,t),(n=e.call(this,A)).state={isDesktop:!1,dropdownOpen:!1},n.updatePredicate=n.updatePredicate.bind(Object(v.a)(n)),n}return Object(r.a)(t,[{key:"componentDidMount",value:function(){this.updatePredicate(),window.addEventListener("resize",this.updatePredicate)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updatePredicate)}},{key:"updatePredicate",value:function(){this.setState({isDesktop:window.innerWidth>704}),window.innerWidth>704&&this.setState({dropdownOpen:!1})}},{key:"renderHeaderButton",value:function(A){var e=this;return Object(b.jsxs)("div",{className:"header-text header-button",onClick:function(){return e.handleClick(A)},children:[Object(b.jsx)("div",{className:"header-item-text",children:A}),Object(b.jsx)("div",{className:"header-underline"})]},A)}},{key:"renderHeaderButtons",value:function(){var A=this;return I.map((function(e){return A.renderHeaderButton(e)}))}},{key:"handleClick",value:function(A){switch(A){case u:window.scrollTo({top:0,left:0,behavior:"smooth"});break;case h:window.scrollTo({top:500,left:0,behavior:"smooth"});break;case p:window.scrollTo({top:1400,left:0,behavior:"smooth"});break;case m:window.scrollTo({top:2600,left:0,behavior:"smooth"})}}},{key:"handleMobileDropdown",value:function(){this.setState({dropdownOpen:!this.state.dropdownOpen})}},{key:"renderMobileHeaderButtons",value:function(){var A=this;return I.map((function(e){return A.renderMobileHeaderButton(e)}))}},{key:"renderMobileHeaderButton",value:function(A){var e=this;return Object(b.jsxs)("div",{className:"header-text mobile-header-button",onClick:function(){return e.handleClick(A)},children:[Object(b.jsx)("div",{className:"header-item-text",children:A}),Object(b.jsx)("div",{className:"header-underline"})]},A)}},{key:"render",value:function(){var A=this,e=this.state.isDesktop;return Object(b.jsxs)("div",{className:"header",children:[Object(b.jsx)("div",{className:"header-text-container",onClick:function(){return A.handleClick(u)},children:Object(b.jsx)("div",{className:"header-text header-title typed-out",children:"John Ojo"})}),Object(b.jsx)("div",{className:"f-1"}),!e&&!this.state.dropdownOpen&&Object(b.jsx)("img",{className:"dropdown",src:j,alt:"dropdown",onClick:function(){return A.handleMobileDropdown()}}),e&&this.renderHeaderButtons(),!e&&this.state.dropdownOpen&&Object(b.jsxs)("div",{className:"mobile-header-buttons",children:[!e&&this.state.dropdownOpen&&Object(b.jsx)("img",{className:"dropdown-close",src:B,alt:"dropdown",onClick:function(){return A.handleMobileDropdown()}}),this.renderMobileHeaderButtons()]})]})}}]),t}(n.Component),f=Object(g.f)(w),C=(t(36),function(A){Object(c.a)(t,A);var e=Object(l.a)(t);function t(){return Object(s.a)(this,t),e.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){return Object(b.jsx)("div",{className:"footnote-container",children:Object(b.jsxs)("div",{className:"footnote-ends",children:["Privacy policy ","\xa0\xa0\xa0"," @2022","\xa0",Object(b.jsx)("div",{className:"footnote-end"}),Object(b.jsx)("div",{className:"footnote-middle",children:"JOHN OJO"}),". All rights reserved\r"]})})}}]),t}(n.Component)),E=Object(g.f)(C),M=t.p+"static/media/angular.3f781d91.svg",Q=t.p+"static/media/amazon_web_services.cc38dbe9.svg",D=t.p+"static/media/nodejs.dd47e26e.svg",x=t.p+"static/media/net_core.e2aac1c9.svg",O=t.p+"static/media/react.928f956d.svg",P=t.p+"static/media/postgresql.29aef667.svg",G=t.p+"static/media/mongo_db.4d0524e8.svg",k=t.p+"static/media/html.cf51b387.svg",N=t.p+"static/media/typescript.fccb6f0f.svg",y=t.p+"static/media/javascript.61c1fa6b.svg",Y=t.p+"static/media/css.6854789a.svg",F=t.p+"static/media/git.c62d7c4a.svg",q=t.p+"static/media/docker.1b8174e1.png",T=t.p+"static/media/prismic.829a7bc1.svg",J=t.p+"static/media/name_in_code.4fb45664.svg",S=t.p+"static/media/linked-in.d0156ca2.svg",U=t.p+"static/media/cv.af9fea68.svg",W=t.p+"static/media/john_image.7dc82afe.png",L=t.p+"static/media/tan_ellipse.1b3118c0.svg",z=t.p+"static/media/brown_ellipse.34e65961.svg",K=t.p+"static/media/John Ojo - CV.a62b02fc.pdf",R=(t(37),t.p+"static/media/heroku.76a583ed.svg"),X=function(){var A=new Array(15).fill(null);return null===A||void 0===A?void 0:A.map((function(A,e){return Object(b.jsx)("div",{className:"circle-container",children:Object(b.jsx)("div",{className:"circle"})},e)}))},V=function(A){Object(c.a)(t,A);var e=Object(l.a)(t);function t(A){var n;return Object(s.a)(this,t),(n=e.call(this,A)).state={showFavouriteProjects:!0},n}return Object(r.a)(t,[{key:"generateProjects",value:function(A){var e=this;if((null===A||void 0===A?void 0:A.length)>0)return A.map((function(A,t){return e.renderProject(A,t)}))}},{key:"renderProject",value:function(A,e){return Object(b.jsx)("div",{className:"other-project-container",children:Object(b.jsxs)("div",{className:"project-container",children:[Object(b.jsxs)("div",{className:"project-card-container",children:[Object(b.jsx)("div",{className:"project-card-chips-container",children:this.generateChips(null===A||void 0===A?void 0:A.chips)}),Object(b.jsxs)("div",{className:"project-card-content slide",children:[Object(b.jsx)("div",{className:"project-technologies-used-list-container",children:this.generateProjectTechnologies(null===A||void 0===A?void 0:A.technologiesUsedImages)}),Object(b.jsx)("div",{className:"project-card-title",children:null===A||void 0===A?void 0:A.title})]})]}),Object(b.jsxs)("div",{className:"project-text-container",children:[this.generateProjectInfo(null===A||void 0===A?void 0:A.body),(null===A||void 0===A?void 0:A.extraProjectInfo)&&Object(b.jsxs)("div",{className:"project-text-container",children:[this.generateProjectInfo(null===A||void 0===A?void 0:A.extraProjectInfo),Object(b.jsx)("br",{}),this.generateLinks(null===A||void 0===A?void 0:A.links)]})]})]},e)},e)}},{key:"generateProjectInfo",value:function(A){if((null===A||void 0===A?void 0:A.length)>0)return A.map((function(A,e){return Object(b.jsx)("li",{className:"list",children:Object(b.jsx)("span",{className:"list-span",children:A})},e)}))}},{key:"generateProjectTechnologies",value:function(A){if((null===A||void 0===A?void 0:A.length)>0)return A.map((function(A,e){return Object(b.jsx)("img",{className:"project-technologies-used",src:A,alt:"technology"},e)}))}},{key:"generateLinks",value:function(A){if((null===A||void 0===A?void 0:A.length)>0)return A.map((function(A,e){return Object(b.jsxs)("div",{className:"link-container",children:[Object(b.jsxs)("div",{className:"link-info",children:[null===A||void 0===A?void 0:A.info,"\xa0"]}),Object(b.jsx)("a",{className:"link",href:null===A||void 0===A?void 0:A.link,target:"_blank",rel:"noopener noreferrer",children:null===A||void 0===A?void 0:A.linkDisplayName})]},e)}))}},{key:"handleChipClick",value:function(A){this.setState({showFavouriteProjects:A})}},{key:"generateChips",value:function(A){if((null===A||void 0===A?void 0:A.length)>0)return A.map((function(A,e){return Object(b.jsx)("div",{className:"chip-flexible-width",children:A},e)}))}},{key:"render",value:function(){var A=this,e=this.state.showFavouriteProjects,t="Favourite Projects",n="Other Projects",i=[{title:"Bookings and Claims Project",body:["Description: An office and events bookings,  as well as claims web application, following a microservices architecture. ","Role: Technical Team Lead, Managed 32 graduates","Tasks: Drew up solution architecture, setup cloud environment, deployments , setup server, managed team, scoped out project features, reviewed pull requests.","Tech: Angular 12, .NET 5, PostgreSQL, AWS (EC2, S3, RDS, ELB, Route53, Certificate Manager), Docker","Worked in a team environment"],technologiesUsedImages:[M,x,P,Q,q],chips:["Angular 12",".NET 5","PostgreSQL","AWS","Docker"],extraProjectInfo:["What I loved about this project is that it encompassed everything it takes to build an application and be a software developer. Development, hosting, working in a large team, thinking of cost implications, project management, project scoping, solution architecture, weighing up which method would give the most optimal solution, sharing information so the graduates can learn more and mentoring them. I saw a different side to being a software developer other than just tech. You can learn any technology online or through a course, but learning to manage and understand people is a vastly different skill. It was a really great experience being on the project and the best part was seeing the graduates learn and grow into capable developers."]},{title:"Designer's Portfolio",body:["Description: Created a web application of a designer's portfolio to showcase their designs and experience.","Role: Full stack developer.","Tasks: Setup cloud environment, setup CI/CD pipelines, developed fronted, developed backend, mobile responsiveness, setup email server.","Tech: React (jsx), Node.js (javascript), Express.js, SendGrid, Github Pages, Github Actions, Heroku","Worked as sole developer."],links:[{info:"Link to website:",linkDisplayName:"ARL",link:"https://alfonzo28.github.io/ARL/#/"},{info:"Link to Github repo:",linkDisplayName:"Source Code",link:"https://github.com/Alfonzo28/ARL"}],chips:["React","NodeJS","SendGrid","Heroku"],technologiesUsedImages:[O,D,"data:image/png;base64,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",R],extraProjectInfo:["What I enjoyed about this project was the amount of things I had to learn and figure out by myself as the sole developer. Having to build the front-end and back-end from scratch, having to host the application, having to set up CI/CD pipelines and other tasks. I had to solve problems by myself in terms of performance and what technologies would be most suitable. I had to take ownership and more responsibility in every aspect of the system. The experience really added to my skills and pushed me to keep on expanding my knowledge and continuously improve."]}],o=[{title:"Medical Project",body:["Description: Medical application that stored patient appointments and data and allowed researchers and doctors to view patient information.","Role: Full stack developer.","Tasks: Builded up CMS, wrote automated tests, created APIs to get, update and add patient data and created dynamic frontend to handle CMS content, edit patient data and view patient data.","Tech: React-Redux, Node.js (TypeScript), Express.js, Postgresql, TypeORM, AWS S3, Prismic","Worked in a team environment."],chips:["React","Node.js","Postgresql","AWS","Prismic"],technologiesUsedImages:[O,D,P,Q,T]},{title:"Security/Auditing Project",body:["Description: Report system for benchmarking, assessing and auditing, through the use of a generic front-end UI builder.","Role: Full stack developer.","Tasks: Setup server, created APIs to save and retrieve data, created data filtering functionality, wrote automated tests and created dynamic UI components.","Tech: Angular 9, Node.js (javascript), Express.js, MongoDB, Mongoose, Jenkins, Redis","Worked in a team environment."],chips:["React","Node.js","MongoDB","AWS"],technologiesUsedImages:[M,D,G,Q]},{title:"Mining Project",body:["Description: Opportunity application system for applying to projects provided by the mining sector.","Role: Full stack developer.","Tasks: Created front-end components and pages, created file upload and download functionality, setup server and created APIs to save and retrieve data.","Tech: Angular 9, Node.js (JavaScript), Express.js, Postgresql, Sequelize, AWS S3","Worked in a team environment."],chips:["Angular","Node.js","Postgresql","AWS"],technologiesUsedImages:[M,D,P,Q]},{title:"Financial Project",body:["Description: Advertisment website for electronic safe that printed operational data and allowed users to store and dispense cash.","Role: Front-end developer.","Tasks: Search engine optimisation, created web application to describe application and created forms to capture specifications of safe and user details.","Tech: React","Worked in a team environment."],chips:["React"],technologiesUsedImages:[O]},{title:"Reporting Project ",body:["Description: Reporting system to view historical and forecasted data of a sector/industry given a scenario to measure the growth or decline of the sector/industry. Application is in English and Arabic (right to left reading).","Role: Full stack developer.","Tasks: Created front-end components and pages, created GeoMap and plotted boundaries on communities, created light and dark mode, created graph filters and queries, wrote automated tests, created email server, created script to translate english to arabic and created APIs to save and retrieve data.","Tech: Angular 11, Node.js (JavaScript), Express.js, Postgresql, Sequelize, MongoDB, Mongoose, CubeJs","Worked in a team environment."],chips:["Angular","Node.js","Postgresql","MongoDB"],technologiesUsedImages:[M,D,P,G]},{title:"Security/Auditing Project",body:["Description: Assessment system to assess controls in a system and view statistical data on the assessed controls.","Role: Full stack developer.","Tasks: Setup server, created APIs to save and retrieve data, created file upload and download functionality, created data filtering functionality, wrote automated tests and created dynamic UI components.","Tech: Angular 9, Node.js (JavaScript), Express.js, MongoDB, Mongoose, AWS S3","Worked in a team environment."],chips:["Angular","Node.js","MongoDB","AWS"],technologiesUsedImages:[M,D,G,Q]}];return Object(b.jsxs)("div",{className:"projects-container",children:[X(),Object(b.jsx)("div",{className:"projects-title",children:"Portfolio"}),Object(b.jsx)("div",{className:"my-work-title",children:p}),Object(b.jsxs)("div",{className:"chip-container",children:[Object(b.jsx)("div",{className:e?"chip":"chip chip-shade",onClick:function(){return A.handleChipClick(!0)},children:t}),Object(b.jsx)("div",{className:e?"chip chip-shade":"chip",onClick:function(){return A.handleChipClick(!1)},children:n})]}),Object(b.jsx)("div",{className:"projects-title",children:e?t:n}),this.generateProjects(e?i:o)]})}}]),t}(n.Component),H=Object(g.f)(V),Z=(t(38),t.p+"static/media/teach.00514161.svg"),_=t.p+"static/media/lecture.a2df235e.svg",$=(n.Component,function(A){Object(c.a)(t,A);var e=Object(l.a)(t);function t(){return Object(s.a)(this,t),e.apply(this,arguments)}return Object(r.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.reveal)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.reveal)}},{key:"reveal",value:function(){for(var A=document.querySelectorAll(".reveal"),e=0;e<A.length;e++){var t=window.innerHeight;A[e].getBoundingClientRect().top<t-80?A[e].classList.add("active"):A[e].classList.remove("active")}}},{key:"generateTechnologies",value:function(A){if((null===A||void 0===A?void 0:A.length)>0)return null===A||void 0===A?void 0:A.map((function(A,e){return Object(b.jsxs)("div",{className:"technology-used-container reveal",children:[Object(b.jsx)("img",{className:"technology-used",src:null===A||void 0===A?void 0:A.logo,alt:"technology"}),Object(b.jsx)("div",{className:"technology-name",children:null===A||void 0===A?void 0:A.name})]},e)}))}},{key:"render",value:function(){var A=[{name:"Angular",logo:M},{name:"React",logo:O},{name:"Node.js",logo:D},{name:".NET Core",logo:x},{name:"AWS",logo:Q},{name:"PostgreSQL",logo:P},{name:"MongoDB",logo:G},{name:"Docker",logo:q},{name:"Prismic",logo:T},{name:"Express",logo:"data:image/png;base64,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"},{name:"TypeScript",logo:N},{name:"JavaScript",logo:y},{name:"C#",logo:"data:image/png;base64,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"},{name:"HTML",logo:k},{name:"CSS",logo:Y},{name:"Git",logo:F}];return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(f,{}),X(),Object(b.jsxs)("div",{className:"about-me-container",children:[Object(b.jsxs)("div",{className:"about-me-bio",children:[Object(b.jsx)("img",{className:"name-in-code",src:J,alt:"name"}),Object(b.jsx)("div",{className:"about-me-title",children:"Hi! I'm John Ojo and I solve problems"}),Object(b.jsxs)("div",{className:"about-me-subtitle",children:[Object(b.jsxs)("div",{className:"about-me-subtitle-start",children:["Intermediate Software Developer |","\xa0"]}),Object(b.jsx)("div",{className:"about-me-subtitle-end",children:"Master's Student | AWS Certified"})]}),Object(b.jsx)("div",{className:"about-me-body",children:"The thing I love the most about my field is that it's all about solving problems. Whether it's front-end, back-end or cloud. Whether it's building custom software or integrating with existing services. Whether I have to use my existing knowledge of what I have learned over the years or Google it. My job is to solve problems. My passion is using problem solving to improve things and to improve the way things are done. Software development gives me the platform to do that."}),Object(b.jsxs)("div",{className:"contact-icons-container",children:[Object(b.jsx)("a",{href:"https://www.linkedin.com/in/john-ojo-b2b24115b/",target:"_blank",rel:"noopener noreferrer",children:Object(b.jsx)("img",{className:"contact-icon",src:S,alt:"LinkedIn"})}),Object(b.jsx)("a",{href:K,target:"_blank",rel:"noopener noreferrer",children:Object(b.jsx)("img",{className:"contact-icon",src:U,alt:"CV"})})]})]}),Object(b.jsxs)("div",{className:"about-me-image-container",children:[Object(b.jsx)("img",{className:"about-me-tan-ellipse",src:L,alt:"Tan Ellipse"}),Object(b.jsx)("img",{className:"about-me-brown-ellipse",src:z,alt:"Brown Ellipse"}),Object(b.jsx)("img",{className:"about-me-image",src:W,alt:"John"})]})]}),Object(b.jsxs)("div",{className:"technologies-container reveal",children:[Object(b.jsx)("div",{className:"technologies-title",children:h}),Object(b.jsx)("div",{className:"technologies-list-container",children:this.generateTechnologies(A)})]}),Object(b.jsx)(H,{}),Object(b.jsx)(E,{})]})}}]),t}(n.Component)),AA=function(A){Object(c.a)(t,A);var e=Object(l.a)(t);function t(){return Object(s.a)(this,t),e.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){return Object(b.jsx)(d.a,{children:Object(b.jsx)(g.c,{children:Object(b.jsx)(g.a,{exact:!0,path:"/",children:Object(b.jsx)($,{})})})})}}]),t}(n.Component),eA=function(A){Object(c.a)(t,A);var e=Object(l.a)(t);function t(){return Object(s.a)(this,t),e.apply(this,arguments)}return Object(r.a)(t,[{key:"getRoutes",value:function(){var A=[];return A.push(Object(b.jsx)(AA,{},"routes")),A}},{key:"render",value:function(){return Object(b.jsx)("div",{className:"App",children:this.getRoutes()})}}]),t}(n.Component),tA=function(A){A&&A instanceof Function&&t.e(3).then(t.bind(null,40)).then((function(e){var t=e.getCLS,n=e.getFID,i=e.getFCP,o=e.getLCP,a=e.getTTFB;t(A),n(A),i(A),o(A),a(A)}))};a.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(eA,{})}),document.getElementById("root")),tA()}},[[39,1,2]]]);
//# sourceMappingURL=main.5abbca15.chunk.js.map