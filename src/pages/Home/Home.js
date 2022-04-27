import React, { Component } from 'react'
import './Home.scss'
import Header from '../../components/Header/Header'
import Footnote from '../../components/Footnote/Footnote'
import Angular from '../../assets/angular.svg'
import AmazonWebServices from '../../assets/amazon_web_services.svg'
import NodeJs from '../../assets/nodejs.svg'
import NetCore from '../../assets/net_core.svg'
import ReactImage from '../../assets/react.svg'
import Postgresql from '../../assets/postgresql.svg'
import MongoDB from '../../assets/mongo_db.svg'
import Html from '../../assets/html.svg'
import Typescript from '../../assets/typescript.svg'
import Javacript from '../../assets/javacript.svg'
import CSharp from '../../assets/csharp.png'
import Css from '../../assets/css.svg'
import Git from '../../assets/git.svg'
import Docker from '../../assets/docker.png'
import Express from '../../assets/express.png'
import Prismic from '../../assets/prismic.svg'
import NameInCode from '../../assets/name_in_code.svg'
import JohnImage from '../../assets/john_image.svg'
import TanEllipse from '../../assets/tan_ellipse.svg'
import BrownEllipse from '../../assets/brown_ellipse.svg'
import Projects from '../../components/Projects/Projects'

export default class Home extends Component {
    generateTechnologies(partners) {
        if (partners?.length > 0) {
            return partners.map((partner, index) => {
                return(
                    <img className={'technologies-used'} src={partner} alt={'technology'} key={index}/>
                )
            })
        }
    }

    render() {
        const technologiesUsedTitle = 'Tricks Up My Sleeve'
        const bioTitle = 'Hi! I\'m John Ojo and I solve problems'
        const bioSubTitleStart = 'Intermediate Software Developer |'
        const bioSubTitleEnd = 'Master\'s Student | AWS Certified'
        const bioBody = 'The thing I love the most about my field is that it\'s all about solving problems. Whether its front-end, back-end or cloud. Whether it\'s building custom software or integrating with existing services. Whether I have to use my existing knowledge of what I have learned over the years or Google it. My job is to solve problems. My passion is using problem solving to improve things and to improve the the way things are done. Software development gave me the platform to do that.'

        const technologiesUsed = [
            Angular, ReactImage, NodeJs, NetCore, AmazonWebServices, Postgresql,
            MongoDB, Docker, Prismic, Express, Typescript, Javacript,
            CSharp, Html, Css, Git
        ]

        return (
            <div className={'App'}>
                <Header/>
                <div className={'about-me-container'}>
                    <div className={'about-me-bio'}>
                        <img className={'name-in-code'} src={NameInCode} alt={'name'}></img>
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
                <Projects/>
                <Footnote/>
            </div>
        )
    }
}
