(this["webpackJsonpportfolio-fe"]=this["webpackJsonpportfolio-fe"]||[]).push([[0],{25:function(e,t,a){},26:function(e,t,a){},27:function(e,t,a){},28:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a.n(n),o=a(19),s=a.n(o),r=(a(25),a(7)),c=a(8),d=a(10),l=a(9),p=(a(26),a(15)),u=a(2),j=(a(27),a.p+"static/media/Bubbles.4d8deca5.svg"),h=a.p+"static/media/angular.3f781d91.svg",m=a.p+"static/media/amazon_web_services.cc38dbe9.svg",v=a.p+"static/media/nodejs.dd47e26e.svg",b=a.p+"static/media/net_core.e2aac1c9.svg",g=a.p+"static/media/react.928f956d.svg",f=a.p+"static/media/postgresql.29aef667.svg",O=(a(28),"Favourite Projects"),x="Other Projects",y="Technologies Used",w=a(0),N=function(e){Object(d.a)(a,e);var t=Object(l.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"renderHeaderButton",value:function(e){var t=this;return Object(w.jsxs)("div",{className:"header-text header-button",onClick:function(){return t.handleClick(e)},children:[Object(w.jsx)("div",{className:"header-item-text",children:e}),Object(w.jsx)("div",{className:"header-underline"})]},e)}},{key:"renderHeaderButtons",value:function(){var e=this;return["Bio",O,x,y].map((function(t){return e.renderHeaderButton(t)}))}},{key:"handleClick",value:function(e){var t=document.getElementById("root").scrollHeight;switch(e){case"Bio":window.scrollTo({top:0,left:0,behavior:"smooth"});break;case O:window.scrollTo({top:.25*t,left:0,behavior:"smooth"});break;case x:window.scrollTo({top:.5*t,left:0,behavior:"smooth"});break;case y:window.scrollTo({top:.75*t,left:0,behavior:"smooth"})}}},{key:"render",value:function(){return Object(w.jsxs)("div",{className:"header",children:[Object(w.jsx)("div",{className:"header-text-container",children:Object(w.jsx)("div",{className:"header-text header-title typed-out",children:"John Ojo"})}),Object(w.jsx)("div",{className:"f-1"}),Object(w.jsx)("div",{className:"buttons-container",children:this.renderHeaderButtons()})]})}}]),a}(n.Component),P=Object(u.f)(N),T=a.p+"static/media/JohnImage.b0d6a2d3.jpg",S=function(e){Object(d.a)(a,e);var t=Object(l.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"renderBubbles",value:function(){return Object(w.jsx)("img",{className:"bubbles",src:j,alt:"ellipse"})}},{key:"renderProject",value:function(e,t){return Object(w.jsxs)("div",{className:"project-container",children:[Object(w.jsx)("img",{className:"project-image",src:null===e||void 0===e?void 0:e.image,alt:"project"}),Object(w.jsxs)("div",{className:"project-text-container",children:[Object(w.jsx)("div",{className:"project-title",children:null===e||void 0===e?void 0:e.title}),this.generateProjectInfo(null===e||void 0===e?void 0:e.body)]}),Object(w.jsx)("div",{className:"projects-divider"})]},t)}},{key:"generateTechnologies",value:function(e){if((null===e||void 0===e?void 0:e.length)>0)return e.map((function(e,t){return Object(w.jsx)("img",{className:"technologies-used",src:e,alt:"technology"},t)}))}},{key:"generateProjects",value:function(e){var t=this;if((null===e||void 0===e?void 0:e.length)>0)return e.map((function(e,a){return t.renderProject(e,a)}))}},{key:"generateProjectInfo",value:function(e){if((null===e||void 0===e?void 0:e.length)>0)return e.map((function(e,t){return Object(w.jsx)("li",{children:e},t)}))}},{key:"generateProjectTechnologies",value:function(e){if((null===e||void 0===e?void 0:e.length)>0)return e.map((function(e,t){return Object(w.jsx)("img",{className:"project-technologies-used",src:e,alt:"technology"},t)}))}},{key:"generateFavouriteProjects",value:function(e){var t=this;if((null===e||void 0===e?void 0:e.length)>0)return e.map((function(e,a){return Object(w.jsxs)("div",{className:"favourite-project-container",children:[Object(w.jsx)("div",{className:"project-title",children:null===e||void 0===e?void 0:e.projectTitle}),Object(w.jsx)("ul",{className:"solving-problem-list",children:t.generateProjectInfo(null===e||void 0===e?void 0:e.projectInfo)}),Object(w.jsx)("div",{className:"project-technologies-used-list-container",children:t.generateProjectTechnologies(null===e||void 0===e?void 0:e.technologiesUsedImages)}),Object(w.jsx)("div",{className:"projects-divider"})]},a)}))}},{key:"render",value:function(){var e=[{projectTitle:"Bookings and Claims Project",projectInfo:["Description: An office and events bookings,  as well as claims web application, following a microservices architecture. ","Role: Technical Team Lead, Managed 32 graduates","Tasks: Drew up solution architecture, setup cloud environment, deployments , setup server, managed team, scoped out project features, reviewed pull requests.","Tech: Angular 12, .NET 5, PostgreSQL, AWS EC2, AWS S3, AWS RDS","Worked in a team environment"],technologiesUsedImages:[h,b,m,f],extraProjectInfo:""},{projectTitle:"Designer's Portfolio",projectInfo:["Description: Created a web application of a designer's portfolio to showcase their designs and experience.","Role: Fullstack developer.","Tasks: Setup cloud environment, setup CI/CD pipelines, developed fronted, developed backend, mobile responsiveness, setup email server.","Tech: React (jsx), NodeJS (javascript), Github Pages, Github Actions, Heroku","Worked as sole developer."],technologiesUsedImages:[g,v,m,f],extraProjectInfo:""}],t=[{title:"Medical Project",body:["Medical application that stored patient appointments and data and allowed researchers and doctors to view patient information.","Tasks: Builded up CMS, wrote automated tests, created APIs to get, update and add patient data and created dynamic frontend to handle CMS content, edit patient data and view patient data.","Tech: React-Redux, NodeJs (TypeScript), Express, Postgresql, TypeORM, AWS S3, Prismic"],image:T},{title:"Reporting Project",body:["Medical application that stored patient appointments and data and allowed researchers and doctors to view patient information.","Tasks: Builded up CMS, wrote automated tests, created APIs to get, update and add patient data and created dynamic frontend to handle CMS content, edit patient data and view patient data.","Tech: React-Redux, NodeJs (TypeScript), Express, Postgresql, TypeORM, AWS S3, Prismic"],image:T},{pretitle:"Financial Project",body:["Medical application that stored patient appointments and data and allowed researchers and doctors to view patient information.","Tasks: Builded up CMS, wrote automated tests, created APIs to get, update and add patient data and created dynamic frontend to handle CMS content, edit patient data and view patient data.","Tech: React-Redux, NodeJs (TypeScript), Express, Postgresql, TypeORM, AWS S3, Prismic"],image:T}],a=[{title:"Mining Project",body:["Medical application that stored patient appointments and data and allowed researchers and doctors to view patient information.","Tasks: Builded up CMS, wrote automated tests, created APIs to get, update and add patient data and created dynamic frontend to handle CMS content, edit patient data and view patient data.","Tech: React-Redux, NodeJs (TypeScript), Express, Postgresql, TypeORM, AWS S3, Prismic"],image:T},{title:"Reporting Project ",body:["Medical application that stored patient appointments and data and allowed researchers and doctors to view patient information.","Tasks: Builded up CMS, wrote automated tests, created APIs to get, update and add patient data and created dynamic frontend to handle CMS content, edit patient data and view patient data.","Tech: React-Redux, NodeJs (TypeScript), Express, Postgresql, TypeORM, AWS S3, Prismic"],image:T},{pretitle:"Security/Auditing Project",body:["Medical application that stored patient appointments and data and allowed researchers and doctors to view patient information.","Tasks: Builded up CMS, wrote automated tests, created APIs to get, update and add patient data and created dynamic frontend to handle CMS content, edit patient data and view patient data.","Tech: React-Redux, NodeJs (TypeScript), Express, Postgresql, TypeORM, AWS S3, Prismic"],image:T}],n=[h,g,v,b,m,f];return Object(w.jsxs)("div",{className:"App",children:[Object(w.jsx)(P,{}),Object(w.jsxs)("div",{className:"about-me-container",children:[Object(w.jsxs)("div",{className:"about-me-bio",children:[Object(w.jsx)("div",{className:"about-me-title",children:"Hi, my name is John Ojo"}),Object(w.jsx)("div",{className:"about-me-subtitle",children:"Intermediate Software Developer | Master's Student | AWS Certified"}),Object(w.jsx)("div",{className:"about-me-body",children:"The thing I love the most about my field is that it's all about solving problems. Whether its front-end, back-end or cloud. Whether it's building custom software or integrating with existing services. Whether I have to use my existing knowledge of what I have learned over the years or Google it. My job is to solve problems. My passion is using problem solving to improve things and to improve the the way things are done. Software development gave me the platform to do that."})]}),Object(w.jsx)("img",{className:"about-me-image",src:T,alt:"John"})]}),this.renderBubbles(),Object(w.jsxs)("div",{className:"projects-container",children:[Object(w.jsx)("div",{className:"projects-title",children:"Favourite Projects"}),this.generateFavouriteProjects(e)]}),Object(w.jsx)("div",{className:"float-right",children:this.renderBubbles()}),Object(w.jsxs)("div",{className:"projects-container",children:[Object(w.jsx)("div",{className:"projects-title",children:"Other Projects"}),Object(w.jsxs)("div",{className:"projects-body",children:[Object(w.jsx)("div",{className:"projects-left-container",children:this.generateProjects(t)}),Object(w.jsx)("div",{className:"projects-right-container",children:this.generateProjects(a)})]})]}),this.renderBubbles(),Object(w.jsxs)("div",{className:"our-partners-container",children:[Object(w.jsx)("div",{className:"our-partners-title",children:"Technologies Used"}),Object(w.jsx)("div",{className:"partners-list-container",children:this.generateTechnologies(n)})]}),Object(w.jsx)("div",{className:"float-right",children:this.renderBubbles()})]})}}]),a}(n.Component),k=function(e){Object(d.a)(a,e);var t=Object(l.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return Object(w.jsx)(p.a,{children:Object(w.jsx)(u.c,{children:Object(w.jsx)(u.a,{exact:!0,path:"/",children:Object(w.jsx)(S,{})})})})}}]),a}(n.Component),M=function(e){Object(d.a)(a,e);var t=Object(l.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"getRoutes",value:function(){var e=[];return e.push(Object(w.jsx)(k,{},"routes")),e}},{key:"render",value:function(){return Object(w.jsx)("div",{className:"App",children:this.getRoutes()})}}]),a}(n.Component),C=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,36)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,o=t.getLCP,s=t.getTTFB;a(e),n(e),i(e),o(e),s(e)}))};s.a.render(Object(w.jsx)(i.a.StrictMode,{children:Object(w.jsx)(M,{})}),document.getElementById("root")),C()}},[[35,1,2]]]);
//# sourceMappingURL=main.cf0404cc.chunk.js.map