import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import './Projects.scss'
import { MY_WORK } from '../../constants/headerConstants'
import Angular from '../../assets/angular.svg'
import AmazonWebServices from '../../assets/amazon_web_services.svg'
import NodeJs from '../../assets/nodejs.svg'
import NetCore from '../../assets/net_core.svg'
import ReactImage from '../../assets/react.svg'
import Postgresql from '../../assets/postgresql.svg'
import MongoDB from '../../assets/mongo_db.svg'
import Docker from '../../assets/docker.png'
import Prismic from '../../assets/prismic.svg'
import Heroku from '../../assets/heroku.svg'
import SendGrid from '../../assets/send_grid.png'

class Projects extends Component {
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
                        <div className={'project-card-chips-container'}>
                            {this.generateChips(project?.chips)}
                        </div>
                        <div className={'project-card-content slide'}>
                            <div className={'project-technologies-used-list-container'}>
                                {this.generateProjectTechnologies(project?.technologiesUsedImages)}
                            </div>
                            <div className={'project-card-title'}>
                                {project?.title}
                            </div>
                        </div>
                    </div>
                    <div className={'project-text-container'}>
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
            </div>
        )
    }

    generateProjectInfo(whoIsItFor) {
        if (whoIsItFor?.length > 0) {
            return whoIsItFor.map((bodyItem, index) => {
                return(
                    <li className={'list'} key={index}><span className={'list-span'}>{bodyItem}</span></li>
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
                        <a className={'link'} href={link?.link} target={'_blank'} rel={'noopener noreferrer'}>{link?.link}</a>
                    </div>
                )
            })
        }
    }

    handleChipClick(showFavouriteProjects) {
        this.setState({ showFavouriteProjects: showFavouriteProjects })
    }

    generateChips(chips) {
        if (chips?.length > 0) {
            return chips.map((chip, index) => {
                return(
                    <div className={'chip-flexible-width'} key={index}>{chip}</div>
                )
            })
        }
    }

    render() {
        const showFavouriteProjects = this.state.showFavouriteProjects

        const favouriteProjects = [
            {
                title:'Bookings and Claims Project',
                body: [
                    'Description: An office and events bookings,  as well as claims web application, following a microservices architecture. ',
                    'Role: Technical Team Lead, Managed 32 graduates',
                    'Tasks: Drew up solution architecture, setup cloud environment, deployments , setup server, managed team, scoped out project features, reviewed pull requests.',
                    'Tech: Angular 12, .NET 5, PostgreSQL, AWS (EC2, S3, RDS, ELB, Route53, Certificate Manager), Docker',
                    'Worked in a team environment'
                ],
                technologiesUsedImages:[Angular, NetCore, Postgresql, AmazonWebServices, Docker],
                chips: ['Angular 12', '.NET 5', 'PostgreSQL', 'AWS', 'Docker'],
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
                chips: ['React', 'NodeJS', 'SendGrid', 'Heroku'],
                technologiesUsedImages:[ReactImage, NodeJs, SendGrid, Heroku],
                extraProjectInfo: ['What I enjoyed about this project was the amount of things I had to learn and figure out by myself as the sole developer. Having to build the front-end and back-end from scratch, having to host the application, having to set up CI/CD pipelines and other tasks. I had to solve problems by myself in terms of performance and what technologies would be most suitable. I had to take ownership and more responsibility in every aspect of the system. The experience really added to my skills and pushed me to keep on expanding my knowledge and continuously improve.']
            }
        ]

        const otherProjects = [
            {
                title: 'Medical Project',
                body: [
                    'Description: Medical application that stored patient appointments and data and allowed researchers and doctors to view patient information.',
                    'Tasks: Builded up CMS, wrote automated tests, created APIs to get, update and add patient data and created dynamic frontend to handle CMS content, edit patient data and view patient data.',
                    'Tech: React-Redux, NodeJs (TypeScript), Express.js, Postgresql, TypeORM, AWS S3, Prismic',
                    'Worked in a team environment.'
                ],
                chips: ['React', 'NodeJS', 'Postgresql', 'AWS', 'Prismic'],
                technologiesUsedImages:[ReactImage, NodeJs, Postgresql, AmazonWebServices, Prismic],
            },
            {
                title: 'Security/Auditing Project',
                body: [
                    'Description: Report system for benchmarking, assessing and auditing, through the use of a generic front-end UI builder.',
                    'Tasks: Setup server, created APIs to save and retrieve data, created data filtering functionality, wrote automated tests and created dynamic UI components.',
                    'Tech: Angular 9, NodeJs (javascript), Express.js, MongoDB, Mongoose, Jenkins, Redis',
                    'Worked in a team environment.'
                ],
                chips: ['React', 'NodeJS', 'MongoDB', 'AWS'],
                technologiesUsedImages:[Angular, NodeJs, MongoDB, AmazonWebServices],
            },
            {
                title: 'Mining Project',
                body: [
                    'Description: Opportunity application system for applying to projects provided by the mining sector.',
                    'Tasks: Created front-end components and pages, created file upload and download functionality, setup server and created APIs to save and retrieve data.',
                    'Tech: Angular 9, NodeJs (JavaScript), Express.js, Postgresql, Sequelize, AWS S3',
                    'Worked in a team environment.'
                ],
                chips: ['Angular', 'NodeJS', 'Postgresql', 'AWS'],
                technologiesUsedImages:[Angular, NodeJs, Postgresql, AmazonWebServices],
            },
            {
                title: 'Financial Project',
                body: [
                    'Description: Advertisment website for electronic safe that printed operational data and allowed users to store and dispense cash.',
                    'Tasks: Search engine optimisation, created web application to describe application and created forms to capture specifications of safe and user details.',
                    'Tech: React',
                    'Worked in a team environment'
                ],
                chips: ['React'],
                technologiesUsedImages:[ReactImage],
            },
            {
                title: 'Reporting Project ',
                body: [
                    'Description: Reporting system to view historical and forecasted data of a sector/industry given a scenario to measure the growth or decline of the sector/industry. Application is in English and Arabic (right to left reading).',
                    'Tasks: Created front-end components and pages, created GeoMap and plotted boundaries on communities, created light and dark mode, created graph filters and queries, wrote automated tests, created email server, created script to translate english to arabic and created APIs to save and retrieve data.',
                    'Tech: Angular 11, NodeJs (JavaScript), Express.js, Postgresql, Sequelize, MongoDB, Mongoose, CubeJs',
                    'Worked in a team environment.'
                ],
                chips: ['Angular', 'NodeJS', 'Postgresql', 'MongoDB'],
                technologiesUsedImages:[Angular, NodeJs, Postgresql, MongoDB],
            },
            {
                title: 'Security/Auditing Project',
                body: [
                    'Description: Assessment system to assess controls in a system and view statistical data on the assessed controls.',
                    'Tasks: Setup server, created APIs to save and retrieve data, created file upload and download functionality, created data filtering functionality, wrote automated tests and created dynamic UI components.',
                    'Tech: Angular 9, NodeJs (JavaScript), Express.js, MongoDB, Mongoose, AWS S3',
                    'Worked in a team environment.'
                ],
                chips: ['Angular', 'NodeJS', 'MongoDB', 'AWS'],
                technologiesUsedImages:[Angular, NodeJs, MongoDB, AmazonWebServices],
            }
        ]

        return (
            <div className={'projects-container'}>
                <div className={'projects-title'}>{'Portfolio'}</div>
                <div className={'my-work-title'}>{MY_WORK}</div>
                <div className={'chip-container'}>
                    <div className={showFavouriteProjects ? 'chip' : 'chip chip-shade'} onClick={() => this.handleChipClick(true)}>{'Favourite Projects'}</div>
                    <div className={!showFavouriteProjects ? 'chip' : 'chip chip-shade'} onClick={() => this.handleChipClick(false)}>{'Other Projects'}</div>
                </div>
                <div className={'projects-title'}>{showFavouriteProjects ? 'Favourite Projects':'Other Projects'}</div>
                {this.generateProjects(showFavouriteProjects ? favouriteProjects:otherProjects)}
            </div>
        )
    }
}

Projects.propTypes = {
    history: PropTypes.object,
}

export default (withRouter(Projects))
