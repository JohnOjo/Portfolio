import React, { Component } from 'react'
import './Home.scss'
import { TECHNOLOGIES_USED } from '../../constants/headerConstants'
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
import TypeScript from '../../assets/typescript.svg'
import JavaScript from '../../assets/javascript.svg'
import CSharp from '../../assets/csharp.png'
import Css from '../../assets/css.svg'
import Git from '../../assets/git.svg'
import Docker from '../../assets/docker.png'
import Express from '../../assets/express.png'
import Prismic from '../../assets/prismic.svg'
import NameInCode from '../../assets/name_in_code.svg'
import LinkedIn from '../../assets/linked-in.svg'
import JohnImage from '../../assets/john_image.svg'
import TanEllipse from '../../assets/tan_ellipse.svg'
import BrownEllipse from '../../assets/brown_ellipse.svg'
import Projects from '../../components/Projects/Projects'
import { generateFireFlies } from '../../helpers/generalHelper'

export default class Home extends Component {
    componentDidMount() {
        window.addEventListener('scroll', this.reveal)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.reveal)
    }

    reveal() {
        const reveals = document.querySelectorAll('.reveal')

        for (let i = 0; i < reveals.length; i++) {
            const windowHeight = window.innerHeight
            const elementTop = reveals[i].getBoundingClientRect().top
            const elementVisible = 80

            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add('active')
            } else {
                reveals[i].classList.remove('active')
            }
        }
    }

    generateTechnologies(technologies) {
        if (technologies?.length > 0) {
            return technologies?.map((technology, index) => {
                return(
                    <div className={'technology-used-container reveal'} key={index}>
                        <img className={'technology-used'} src={technology?.logo} alt={'technology'}/>
                        <div className={'technology-name'}>
                            {technology?.name}
                        </div>
                    </div>
                )
            })
        }
    }

    render() {
        const bioTitle = 'Hi! I\'m John Ojo and I solve problems'
        const bioSubTitleStart = 'Intermediate Software Developer |'
        const bioSubTitleEnd = 'Master\'s Student | AWS Certified'
        const bioBody = 'The thing I love the most about my field is that it\'s all about solving problems. Whether its front-end, back-end or cloud. Whether it\'s building custom software or integrating with existing services. Whether I have to use my existing knowledge of what I have learned over the years or Google it. My job is to solve problems. My passion is using problem solving to improve things and to improve the way things are done. Software development gave me the platform to do that.'
        const linkedInLink = 'https://www.linkedin.com/in/john-ojo-b2b24115b/'

        const technologiesUsed = [
            { name: 'Angular', logo: Angular }, { name: 'React', logo: ReactImage }, { name: 'Node.js', logo: NodeJs },
            { name: '.NET Core', logo: NetCore }, { name: 'AWS', logo: AmazonWebServices }, { name: 'PostgreSQL', logo: Postgresql },
            { name: 'MongoDB', logo: MongoDB }, { name: 'Docker', logo: Docker }, { name: 'Prismic', logo: Prismic },
            { name: 'Express', logo: Express }, { name: 'TypeScript', logo: TypeScript }, { name: 'JavaScript', logo: JavaScript },
            { name: 'C#', logo:  CSharp }, { name: 'HTML', logo:  Html }, { name: 'CSS', logo:  Css },
            { name: 'Git', logo:  Git }
        ]

        return (
            <div className={'App'}>
                <Header/>
                {generateFireFlies()}
                <div className={'about-me-container'}>
                    <div className={'about-me-bio'}>
                        <img className={'name-in-code'} src={NameInCode} alt={'name'}></img>
                        <div className={'about-me-title'}>{bioTitle}</div>
                        <div className={'about-me-subtitle'}>
                            <div className={'about-me-subtitle-start'}>{bioSubTitleStart}&nbsp;</div>
                            <div className={'about-me-subtitle-end'}>{bioSubTitleEnd}</div>
                        </div>
                        <div className={'about-me-body'}>{bioBody}</div>
                        <a href={linkedInLink} target={'_blank'} rel={'noopener noreferrer'}>
                            <img className={'linked-in-icon'} src={LinkedIn} alt={'LinkedIn'}></img>
                        </a>
                    </div>
                    <div className={'about-me-image-container'}>
                        <img className={'about-me-tan-ellipse'} src={TanEllipse} alt={'Tan Ellipse'}/>
                        <img className={'about-me-brown-ellipse'} src={BrownEllipse} alt={'Brown Ellipse'}/>
                        <img className={'about-me-image'} src={JohnImage} alt={'John'}/>
                    </div>
                </div>
                <div className={'technologies-container reveal'}>
                    <div className={'technologies-title'}>{TECHNOLOGIES_USED}</div>
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
