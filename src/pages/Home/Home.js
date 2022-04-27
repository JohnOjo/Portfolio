import React, { Component } from 'react'
import './Home.scss'
import Angular from '../../assets/angular.svg'
import AmazonWebServices from '../../assets/amazon_web_services.svg'
import NodeJs from '../../assets/nodejs.svg'
import NetCore from '../../assets/net_core.svg'
import ReactImage from '../../assets/react.svg'
import Postgresql from '../../assets/postgresql.svg'
import MongoDB from '../../assets/mongo_db.svg'
import Docker from '../../assets/docker.png'
import Express from '../../assets/express.png'
import Prismic from '../../assets/prismic.svg'
import Heroku from '../../assets/heroku.svg'
import NameInCode from '../../assets/name_in_code.svg'
import SendGrid from '../../assets/send_grid.png'
import Header from '../../components/Header/Header'
import JohnImage from '../../assets/john_image.svg'
import TanEllipse from '../../assets/tan_ellipse.svg'
import BrownEllipse from '../../assets/brown_ellipse.svg'

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showFavouriteProjects: true,
        }
    }

    generateProjects(profiles) {
        if (profiles?.length > 0) {
            return profiles.map((profile, index) => this.renderProject(profile, index))
        }
    }

    renderProject(project, index) {
        return(
            <div className={'other-project-container'} key={index}>
                <div className={'project-container'} key={index}>
                    <div className={'project-card-container'}>
                        <div className={'project-card-content'}>
                            <div className={'chip'}>{'Favourite Projects'}</div>
                            <div className={'project-card-title'}>
                                {project?.title}
                            </div>
                        </div>
                    </div>
                    <div className={'project-text-container'}>
                        <div className={'project-title'}>{project?.title}</div>
                        {this.generateProjectInfo(project?.body)}
                        {project?.extraProjectInfo &&
                <div className={'project-text-container'}>
                    {this.generateProjectInfo(project?.extraProjectInfo)}
                    <br/>
                    {this.generateLinks(project?.links)}
                </div>
                        }
                    </div>
                </div>
                <div className={'project-technologies-used-list-container'}>
                    {this.generateProjectTechnologies(project?.technologiesUsedImages)}
                </div>
            </div>
        )
    }

    generateProjectInfo(whoIsItFor) {
        if (whoIsItFor?.length > 0) {
            return whoIsItFor.map((bodyItem, index) => {
                return(
                    <li className={'list'} key={index}>{bodyItem}</li>
                )
            })
        }
    }

    generateTechnologies(partners) {
        if (partners?.length > 0) {
            return partners.map((partner, index) => {
                return(
                    <img className={'technologies-used'} src={partner} alt={'technology'} key={index}/>
                )
            })
        }
    }

    generateProjectTechnologies(technologies) {
        if (technologies?.length > 0) {
            return technologies.map((technology, index) => {
                return(
                    <img className={'project-technologies-used bounce-'+index} src={technology} alt={'technology'} key={index}/>
                )
            })
        }
    }

    generateLinks(links) {
        if (links?.length > 0) {
            return links.map((link, index) => {
                return(
                    <div className={'link-container'} key={index}>
                        <div className={'link-info'}>{link?.info}&nbsp;</div>
                        <a className={'link'} href={link?.link} >{link?.link}</a>
                    </div>
                )
            })
        }
    }

    handleChipClick() {
        this.setState({ showFavouriteProjects: !this.state.showFavouriteProjects })
    }

    render() {
        const technologiesUsedTitle = 'Technologies Used'
        const bioTitle = 'Hi! I\'m John Ojo and I solve problems'
        const bioSubTitleStart = 'Intermediate Software Developer |'
        const bioSubTitleEnd = 'Master\'s Student | AWS Certified'
        const bioBody = 'The thing I love the most about my field is that it\'s all about solving problems. Whether its front-end, back-end or cloud. Whether it\'s building custom software or integrating with existing services. Whether I have to use my existing knowledge of what I have learned over the years or Google it. My job is to solve problems. My passion is using problem solving to improve things and to improve the the way things are done. Software development gave me the platform to do that.'
        const showFavouriteProjects = this.state.showFavouriteProjects

        const favouriteProjects = [
            {
                title:'Bookings and Claims Project',
                body: [
                    'Description: An office and events bookings,  as well as claims web application, following a microservices architecture. ',
                    'Role: Technical Team Lead, Managed 32 graduates',
                    'Tasks: Drew up solution architecture, setup cloud environment, deployments , setup server, managed team, scoped out project features, reviewed pull requests.',
                    'Tech: Angular 12, .NET 5, PostgreSQL, AWS (EC2, S3, RDS, ELB, Route53, Certificate Manager)',
                    'Worked in a team environment'
                ],
                technologiesUsedImages:[Angular, NetCore, Postgresql, AmazonWebServices],
                extraProjectInfo: ['What I loved about this project is that it encompassed everything it takes to build an application and be a software developer. Development, hosting, working in a large team, thinking of cost implications, project management, project scoping, solution architecture, weighing up which method would give the most optimal solution, sharing information so the graduates can learn more and mentoring them. I saw a different side to being a software developer other than just tech. You can learn any technology online or through a course, but learning to manage and understand people is a whole other different skill. It was a really great experience being on the project and the best part was seeing the graduates learn and grow into capable developers.']
            },
            {
                title:'Designer\'s Portfolio',
                body: [
                    'Description: Created a web application of a designer\'s portfolio to showcase their designs and experience.',
                    'Role: Fullstack developer.',
                    'Tasks: Setup cloud environment, setup CI/CD pipelines, developed fronted, developed backend, mobile responsiveness, setup email server.',
                    'Tech: React (jsx), NodeJS (javascript), Express.js, SendGrid, Github Pages, Github Actions, Heroku',
                    'Worked as sole developer.'
                ],
                links:[
                    {
                        info: 'Link to website:',
                        link: 'https://alfonzo28.github.io/ARL/#/'
                    },
                    {
                        info: 'Github repo (source code):',
                        link: 'https://github.com/Alfonzo28/ARL'
                    },
                ],
                technologiesUsedImages:[ReactImage, NodeJs, Express, SendGrid, Heroku],
                extraProjectInfo: ['What I enjoyed about this project was the amount of things I had to learn and figure out by myself as the sole developer. Having to build the front-end and back-end from scratch, having to host the application, having to set up CI/CD pipelines and other tasks. I had to solve problems by myself in terms of performance and what technologies would be most suitable. I had to take ownership and more responsibility in every aspect of the system. The experience really added to my skills and pushed me to keep on expanding my knowledge and continuously improve.']
            }
        ]

        const otherProjects = [
            {
                title: 'Medical Project',
                body: [
                    'Medical application that stored patient appointments and data and allowed researchers and doctors to view patient information.',
                    'Tasks: Builded up CMS, wrote automated tests, created APIs to get, update and add patient data and created dynamic frontend to handle CMS content, edit patient data and view patient data.',
                    'Tech: React-Redux, NodeJs (TypeScript), Express.js, Postgresql, TypeORM, AWS S3, Prismic',
                    'Worked in a team environment.'
                ],
                technologiesUsedImages:[ReactImage, NodeJs, Express, Postgresql, AmazonWebServices, Prismic],
            },
            {
                title: 'Security/Auditing Project',
                body: [
                    'Report system for benchmarking, assessing and auditing, through the use of a generic front-end UI builder.',
                    'Tasks: Setup server, created APIs to save and retrieve data, created data filtering functionality, wrote automated tests and created dynamic UI components.',
                    'Tech: Angular 9, NodeJs (javascript), Express.js, MongoDB, Mongoose, Jenkins, Redis',
                    'Worked in a team environment.'
                ],
                technologiesUsedImages:[Angular, NodeJs, Express, MongoDB, AmazonWebServices],
            },
            {
                title: 'Mining Project',
                body: [
                    'Opportunity application system for applying to projects provided by the mining sector.',
                    'Tasks: Created front-end components and pages, created file upload and download functionality, setup server and created APIs to save and retrieve data.',
                    'Tech: Angular 9, NodeJs (JavaScript), Express.js, Postgresql, Sequelize, AWS S3',
                    'Worked in a team environment.'
                ],
                technologiesUsedImages:[Angular, NodeJs, Express, Postgresql, AmazonWebServices],
            },
            {
                title: 'Financial Project',
                body: [
                    'Advertisment website for electronic safe that printed operational data and allowed users to store and dispense cash.',
                    'Tasks: Search engine optimisation, created web application to describe application and created forms to capture specifications of safe and user details.',
                    'Tech: React',
                    'Worked in a team environment'
                ],
                technologiesUsedImages:[ReactImage],
            },
            {
                title: 'Reporting Project ',
                body: [
                    'Reporting system to view historical and forecasted data of a sector/industry given a scenario to measure the growth or decline of the sector/industry. Application is in English and Arabic (right to left reading).',
                    'Tasks: Created front-end components and pages, created GeoMap and plotted boundaries on communities, created light and dark mode, created graph filters and queries, wrote automated tests, created email server, created script to translate english to arabic and created APIs to save and retrieve data.',
                    'Tech: Angular 11, NodeJs (JavaScript), Express.js, Postgresql, Sequelize, MongoDB, Mongoose, CubeJs',
                    'Worked in a team environment.'
                ],
                technologiesUsedImages:[Angular, NodeJs, Express, Postgresql, MongoDB],
            },
            {
                title: 'Security/Auditing Project',
                body: [
                    'Assessment system to assess controls in a system and view statistical data on the assessed controls.',
                    'Tasks: Setup server, created APIs to save and retrieve data, created file upload and download functionality, created data filtering functionality, wrote automated tests and created dynamic UI components.',
                    'Tech: Angular 9, NodeJs (JavaScript), Express.js, MongoDB, Mongoose, AWS S3',
                    'Worked in a team environment.'
                ],
                technologiesUsedImages:[Angular, NodeJs, Express, MongoDB, AmazonWebServices],
            }
        ]

        const technologiesUsed = [Angular, ReactImage, NodeJs, NetCore, AmazonWebServices, Postgresql, MongoDB, Docker, Prismic, Express]

        return (
            <div className={'App'}>
                <Header/>
                <div className={'about-me-container'}>
                    <div className={'about-me-bio'}>
                        <img src={NameInCode} alt={'name'}></img>
                        <div className={'about-me-title'}>{bioTitle}</div>
                        <div className={'about-me-subtitle'}>
                            <div className={'about-me-subtitle-start'}>{bioSubTitleStart}&nbsp;</div>
                            <div className={'about-me-subtitle-end'}>{bioSubTitleEnd}</div>
                        </div>
                        <div className={'about-me-body'}>{bioBody}</div>
                    </div>
                    <div className={'about-me-image-container'}>
                        <img className={'about-me-tan-ellipse'} src={TanEllipse} alt={'Tan Ellipse'}/>
                        <img className={'about-me-brown-ellipse'} src={BrownEllipse} alt={'Brown Ellipse'}/>
                        <img className={'about-me-image'} src={JohnImage} alt={'John'}/>
                    </div>
                </div>
                <div className={'technologies-container'}>
                    <div className={'technologies-title'}>{technologiesUsedTitle}</div>
                    <div className={'technologies-list-container'}>
                        {this.generateTechnologies(technologiesUsed)}
                    </div>
                </div>
                <div className={'projects-container'}>
                    <div className={'projects-title'}>{'Portfolio'}</div>
                    <div className={'my-work-title'}>{'MY WORK'}</div>
                    <div className={'chip-container'}>
                        <div className={showFavouriteProjects ? 'chip' : 'chip chip-shade'} onClick={() => this.handleChipClick()}>{'Favourite Projects'}</div>
                        <div className={!showFavouriteProjects ? 'chip' : 'chip chip-shade'} onClick={() => this.handleChipClick()}>{'All Projects'}</div>
                    </div>
                    <div className={'projects-title'}>{showFavouriteProjects ? 'Favourite Projects':'Other Projects'}</div>
                    {this.generateProjects(showFavouriteProjects ? favouriteProjects:otherProjects)}
                </div>
            </div>
        )
    }
}
