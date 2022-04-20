import React, { Component } from 'react'
import './Home.scss'
import Bubbles from '../../assets/Bubbles.svg'
import Angular from '../../assets/angular.svg'
import AmazonWebServices from '../../assets/amazon_web_services.svg'
import NodeJs from '../../assets/nodejs.svg'
import NetCore from '../../assets/net_core.svg'
import ReactImage from '../../assets/react.svg'
import Postgresql from '../../assets/postgresql.svg'
import BookingsClaimsArchitecture from '../../assets/Bookings_Claims_Architecture.svg'
import Header from '../../components/Header/Header'
import QuoteBox from '../../components/QuoteBox/QuoteBox'
import JohnImage from '../../assets/JohnImage.jpg'

export default class Home extends Component {
    renderQuoteBox(testimonyCard, index) {
        return(
            <QuoteBox
                key={index}
                index={index}
                cardPreHeader={testimonyCard?.pretitle}
                cardHeaderEnd={testimonyCard?.titleEnd}
                cardBody={testimonyCard?.body}
                cardImage={testimonyCard?.image}
            />
        )
    }

    renderBubbles() {
        return(
            <img className={'bubbles'} src={Bubbles} alt={'ellipse'}/>
        )
    }

    renderProject(profile, index) {
        return(
            <div className={'project-container'} key={index}>
                <img className={'project-image'} src={profile?.image} alt={'profile'}/>
                <div className={'project-text-container'}>
                    <div className={'project-title'}>{profile?.title}</div>
                    {this.generateProjectInfo(profile?.body)}
                </div>
            </div>
        )
    }

    generateVisionMissionValues(testimonyCards) {
        if (testimonyCards?.length > 0) {
            return testimonyCards.map((testimonyCard, index) => this.renderQuoteBox(testimonyCard, index))
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

    render() {
        const technologiesUsedTitle = 'Technologies Used'
        const projectsTitle = 'Other Projects'

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
                extraProjectInfo: [
                    'Description: An office and events bookings,  as well as claims web application, following a microservices architecture. ',
                    'Role: Technical Team Lead, Managed 32 graduates',
                    'Tasks: Drew up solution architecture, setup cloud environment, deployments , setup server, managed team, scoped out project features, reviewed pull requests.',
                    'Tech: Angular 12, .NET 5, PostgreSQL, AWS EC2, AWS S3, AWS RDS',
                    'Worked in a team environment'
                ]
            }
        ]

        const projectsLeft = [
            {
                title: 'Medical Project',
                body: [
                    'Medical application that stored patient appointments and data and allowed researchers and doctors to view patient information.',
                    'Tasks: Builded up CMS, wrote automated tests, created APIs to get, update and add patient data and created dynamic frontend to handle CMS content, edit patient data and view patient data.',
                    'Tech: React-Redux, NodeJs (TypeScript), Express, Postgresql, TypeORM, AWS S3, Prismic'
                ],
                image: JohnImage
            },
            {
                title: 'Reporting Project',
                body: [
                    'Medical application that stored patient appointments and data and allowed researchers and doctors to view patient information.',
                    'Tasks: Builded up CMS, wrote automated tests, created APIs to get, update and add patient data and created dynamic frontend to handle CMS content, edit patient data and view patient data.',
                    'Tech: React-Redux, NodeJs (TypeScript), Express, Postgresql, TypeORM, AWS S3, Prismic'
                ],
                image: JohnImage
            },
            {
                pretitle: 'Financial Project',
                body: [
                    'Medical application that stored patient appointments and data and allowed researchers and doctors to view patient information.',
                    'Tasks: Builded up CMS, wrote automated tests, created APIs to get, update and add patient data and created dynamic frontend to handle CMS content, edit patient data and view patient data.',
                    'Tech: React-Redux, NodeJs (TypeScript), Express, Postgresql, TypeORM, AWS S3, Prismic'
                ],
                image: JohnImage
            }
        ]
        const projectsRight = [
            {
                title: 'Mining Project',
                body: [
                    'Medical application that stored patient appointments and data and allowed researchers and doctors to view patient information.',
                    'Tasks: Builded up CMS, wrote automated tests, created APIs to get, update and add patient data and created dynamic frontend to handle CMS content, edit patient data and view patient data.',
                    'Tech: React-Redux, NodeJs (TypeScript), Express, Postgresql, TypeORM, AWS S3, Prismic'
                ],
                image: JohnImage
            },
            {
                title: 'Reporting Project ',
                body: [
                    'Medical application that stored patient appointments and data and allowed researchers and doctors to view patient information.',
                    'Tasks: Builded up CMS, wrote automated tests, created APIs to get, update and add patient data and created dynamic frontend to handle CMS content, edit patient data and view patient data.',
                    'Tech: React-Redux, NodeJs (TypeScript), Express, Postgresql, TypeORM, AWS S3, Prismic'
                ],
                image: JohnImage
            },
            {
                pretitle: 'Security/Auditing Project',
                body: [
                    'Medical application that stored patient appointments and data and allowed researchers and doctors to view patient information.',
                    'Tasks: Builded up CMS, wrote automated tests, created APIs to get, update and add patient data and created dynamic frontend to handle CMS content, edit patient data and view patient data.',
                    'Tech: React-Redux, NodeJs (TypeScript), Express, Postgresql, TypeORM, AWS S3, Prismic'
                ],
                image: JohnImage
            }
        ]

        const technologiesUsed = [Angular, ReactImage, NodeJs, NetCore, AmazonWebServices, Postgresql]

        return (
            <div className={'App'}>
                <Header/>
                <div className={'float-right'}>
                    {this.renderBubbles()}
                </div>
                {/* <div className={'vision-mission-values-container'}>{this.generateVisionMissionValues(visionMissionValuesCards)}</div> */}
                <div className={'about-me-container'}>
                    <div className={'about-me-bio'}>

                    </div>
                    <div className={'about-me-image'}>

                    </div>
                </div>
                <div className={'projects-container'}>
                    <div className={'projects-title'}>{'Favourite Projects'}</div>
                    <div className={'projects-body'}>
                        <div className={'project-title'}>{favouriteProjects[0].projectTitle}</div>
                        <ul className={'solving-problem-list'}>
                            {this.generateProjectInfo(favouriteProjects[0].projectInfo)}
                        </ul>
                        <img className={'architecture-image'} src={BookingsClaimsArchitecture} alt={'Bookings Claims Architecture'}/>
                        <ul className={'solving-problem-list'}>
                            {this.generateProjectInfo(favouriteProjects[0].extraProjectInfo)}
                        </ul>
                    </div>
                </div>
                {this.renderBubbles()}
                <div className={'projects-container'}>
                    <div className={'projects-title'}>{projectsTitle}</div>
                    <div className={'projects-body'}>
                        <div className={'projects-left-container'}>
                            {this.generateProjects(projectsLeft)}
                        </div>
                        {/* <div className={'projects-divider'}></div> */}
                        <div className={'projects-right-container'}>
                            {this.generateProjects(projectsRight)}
                        </div>
                    </div>
                </div>
                <div className={'float-right'}>
                    {this.renderBubbles()}
                </div>
                <div className={'our-partners-container'}>
                    <div className={'our-partners-title'}>{technologiesUsedTitle}</div>
                    <div className={'partners-list-container'}>
                        {this.generateTechnologies(technologiesUsed)}
                    </div>
                </div>
                {this.renderBubbles()}
            </div>
        )
    }
}
