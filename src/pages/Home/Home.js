import React, { Component } from 'react'
import './Home.scss'
import Bubbles from '../../assets/Bubbles.svg'
import Angular from '../../assets/angular.svg'
import AmazonWebServices from '../../assets/amazon_web_services.svg'
import NodeJs from '../../assets/nodejs.svg'
import NetCore from '../../assets/net_core.svg'
import ReactImage from '../../assets/react.svg'
import Postgresql from '../../assets/postgresql.svg'
import Header from '../../components/Header/Header'
import JohnImage from '../../assets/JohnImage.jpg'

export default class Home extends Component {
    renderBubbles() {
        return(
            <img className={'bubbles'} src={Bubbles} alt={'ellipse'}/>
        )
    }

    renderProject(profile, index) {
        return(
            <div className={'other-project-container'} key={index}>
                <div className={'project-container'} key={index}>
                    <img className={'project-image'} src={profile?.image} alt={'project'}/>
                    <div className={'project-text-container'}>
                        <div className={'project-title'}>{profile?.title}</div>
                        {this.generateProjectInfo(profile?.body)}
                    </div>
                </div>
                <div className={'projects-divider'}></div>
            </div>
        )
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

    generateProjects(profiles) {
        if (profiles?.length > 0) {
            return profiles.map((profile, index) => this.renderProject(profile, index))
        }
    }

    generateProjectInfo(whoIsItFor) {
        if (whoIsItFor?.length > 0) {
            return whoIsItFor.map((bodyItem, index) => {
                return(
                    <li key={index}>{bodyItem}</li>
                )
            })
        }
    }

    generateProjectTechnologies(technologies) {
        if (technologies?.length > 0) {
            return technologies.map((technology, index) => {
                return(
                    <img className={'project-technologies-used'} src={technology} alt={'technology'} key={index}/>
                )
            })
        }
    }

    generateFavouriteProjects(favouriteProjects) {
        if (favouriteProjects?.length > 0) {
            return favouriteProjects.map((favouriteProject, index) => {
                return(
                    <div className={'favourite-project-container'} key={index}>
                        <div className={'project-title'}>{favouriteProject?.projectTitle}</div>
                        <ul className={'solving-problem-list'}>
                            {this.generateProjectInfo(favouriteProject?.projectInfo)}
                        </ul>
                        <div className={'project-technologies-used-list-container'}>
                            {this.generateProjectTechnologies(favouriteProject?.technologiesUsedImages)}
                        </div>
                        <div className={'projects-divider'}></div>
                    </div>
                )
            })
        }
    }

    render() {
        const technologiesUsedTitle = 'Technologies Used'
        const projectsTitle = 'Other Projects'
        const bioTitle = 'Hi, my name is John Ojo'
        const bioHeader = 'Intermediate Software Developer | Master\'s Student | AWS Certified'
        const bioBody = 'The thing I love the most about my field is that it\'s all about solving problems. Whether its front-end, back-end or cloud. Whether it\'s building custom software or integrating with existing services. Whether I have to use my existing knowledge of what I have learned over the years or Google it. My job is to solve problems. My passion is using problem solving to improve things and to improve the the way things are done. Software development gave me the platform to do that.'

        const favouriteProjects = [
            {
                projectTitle:'Bookings and Claims Project',
                projectInfo: [
                    'Description: An office and events bookings,  as well as claims web application, following a microservices architecture. ',
                    'Role: Technical Team Lead, Managed 32 graduates',
                    'Tasks: Drew up solution architecture, setup cloud environment, deployments , setup server, managed team, scoped out project features, reviewed pull requests.',
                    'Tech: Angular 12, .NET 5, PostgreSQL, AWS EC2, AWS S3, AWS RDS',
                    'Worked in a team environment'
                ],
                technologiesUsedImages:[Angular, NetCore, AmazonWebServices, Postgresql],
                extraProjectInfo: ''
            },
            {
                projectTitle:'Designer\'s Portfolio',
                projectInfo: [
                    'Description: Created a web application of a designer\'s portfolio to showcase their designs and experience.',
                    'Role: Fullstack developer.',
                    'Tasks: Setup cloud environment, setup CI/CD pipelines, developed fronted, developed backend, mobile responsiveness, setup email server.',
                    'Tech: React (jsx), NodeJS (javascript), Github Pages, Github Actions, Heroku',
                    'Worked as sole developer.'
                ],
                technologiesUsedImages:[ReactImage, NodeJs, AmazonWebServices, Postgresql],
                extraProjectInfo: ''
            }
        ]

        const projectsLeft = [
            {
                title: 'Medical Project',
                body: [
                    'Medical application that stored patient appointments and data and allowed researchers and doctors to view patient information.',
                    'Tasks: Builded up CMS, wrote automated tests, created APIs to get, update and add patient data and created dynamic frontend to handle CMS content, edit patient data and view patient data.',
                    'Tech: React-Redux, NodeJs (TypeScript), Express, Postgresql, TypeORM, AWS S3, Prismic',
                    'Worked in a team environment.'
                ],
                image: JohnImage
            },
            {
                title: 'Security/Auditing Project',
                body: [
                    'Report system for benchmarking, assessing and auditing, through the use of a generic front-end UI builder.',
                    'Tasks: Setup server, created APIs to save and retrieve data, created data filtering functionality, wrote automated tests and created dynamic UI components.',
                    'Tech: Angular 9, NodeJs (javascript), Express, MongoDB, Mongoose, Jenkins, Redis',
                    'Worked in a team environment.'
                ],
                image: JohnImage
            },
            {
                title: 'Mining Project',
                body: [
                    'Opportunity application system for applying to projects provided by the mining sector.',
                    'Tasks: Created front-end components and pages, created file upload and download functionality, setup server and created APIs to save and retrieve data.',
                    'Tech: Angular 9, NodeJs (JavaScript), Express, Postgresql, Sequelize, AWS S3',
                    'Worked in a team environment.'
                ],
                image: JohnImage
            }
        ]
        const projectsRight = [
            {
                title: 'Financial Project',
                body: [
                    'Advertisment website for electronic safe that printed operational data and allowed users to store and dispense cash.',
                    'Tasks: Search engine optimisation, created web application to describe application and created forms to capture specifications of safe and user details.',
                    'Tech: React',
                    'Worked in a team environment'
                ],
                image: JohnImage
            },
            {
                title: 'Reporting Project ',
                body: [
                    'Reporting system to view historical and forecasted data of a sector/industry given a scenario to measure the growth or decline of the sector/industry. Application is in English and Arabic (right to left reading).',
                    'Tasks: Created front-end components and pages, created GeoMap and plotted boundaries on communities, created light and dark mode, created graph filters and queries, wrote automated tests, created email server, created script to translate english to arabic and created APIs to save and retrieve data.',
                    'Tech: React-Redux, NodeJs (TypeScript), Express, Postgresql, TypeORM, AWS S3, Prismic',
                    'Worked in a team environment.'
                ],
                image: JohnImage
            },
            {
                pretitle: 'Security/Auditing Project',
                body: [
                    'Assessment system to assess controls in a system and view statistical data on the assessed controls.',
                    'Tasks: Setup server, created APIs to save and retrieve data, created file upload and download functionality, created data filtering functionality, wrote automated tests and created dynamic UI components.',
                    'Tech: Angular 9, NodeJs (JavaScript), Express, MongoDB, Mongoose, AWS S3',
                    'Worked in a team environment.'
                ],
                image: JohnImage
            }
        ]

        const technologiesUsed = [Angular, ReactImage, NodeJs, NetCore, AmazonWebServices, Postgresql]

        return (
            <div className={'App'}>
                <Header/>
                <div className={'about-me-container'}>
                    <div className={'about-me-bio'}>
                        <div className={'about-me-title'}>{bioTitle}</div>
                        <div className={'about-me-subtitle'}>{bioHeader}</div>
                        <div className={'about-me-body'}>{bioBody}</div>
                    </div>
                    <img className={'about-me-image'} src={JohnImage} alt={'John'}/>
                </div>
                {this.renderBubbles()}
                <div className={'projects-container'}>
                    <div className={'projects-title'}>{'Favourite Projects'}</div>
                    {this.generateFavouriteProjects(favouriteProjects)}
                </div>
                <div className={'float-right'}>
                    {this.renderBubbles()}
                </div>
                <div className={'projects-container'}>
                    <div className={'projects-title'}>{projectsTitle}</div>
                    <div className={'projects-body'}>
                        <div className={'projects-left-container'}>
                            {this.generateProjects(projectsLeft)}
                        </div>
                        <div className={'projects-right-container'}>
                            {this.generateProjects(projectsRight)}
                        </div>
                    </div>
                </div>
                {this.renderBubbles()}
                <div className={'our-partners-container'}>
                    <div className={'our-partners-title'}>{technologiesUsedTitle}</div>
                    <div className={'partners-list-container'}>
                        {this.generateTechnologies(technologiesUsed)}
                    </div>
                </div>
                <div className={'float-right'}>
                    {this.renderBubbles()}
                </div>
            </div>
        )
    }
}
