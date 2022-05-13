import React, { Component } from 'react'
import { ABOUT_ME } from '../../constants/headerConstants'
import './About.scss'
import About1 from '../../assets/teach.svg'
import About2 from '../../assets/lecture.svg'
import About3 from '../../assets/project_image.svg'

export default class About extends Component {
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

    generateAbout(aboutCards) {
        if (aboutCards?.length > 0) {
            return aboutCards.map((aboutCard, index) => {
                return (
                    <div className={'about-image-container reveal'} key={index}>
                        {index % 2 === 1 && <img className={'about-image'} src={aboutCard?.image} alt={'about'}/>}
                        <div className={'about-text-container'}>
                            <div className={'about-text-title'}>{aboutCard?.title}</div>
                            <div className={'about-text'}>{aboutCard?.text}</div>
                        </div>
                        {index % 2 === 0 && <img className={'about-image'} src={aboutCard?.image} alt={'about'}/>}
                    </div>
                )
            })
        }
    }

    render() {
        const aboutCards = [
            {
                title: 'Teaching Students',
                text: 'Sharing information is one of the great things about our industry. There are plenty of online resources and question and answer websites to gain information from. This got me thinking, “How can I help others learn and grow in our industry?”. In 2021 I joined in on teaching university students industry technologies and practices. Seeing them innovate and work as a team was a joy to watch and be part of. I was able to give them knowledge that I didn’t have when I was in school and help nurture our industry.',
                image: About1,
            },
            {
                title: 'Guest Lecture',
                text: 'In addition to teaching students, I got the opportunity to give a guest lecture on Git to over 100 students from all over the globe. As a student myself in undergrad I always admired my lecturers in how they played a big part in teaching the next generation and being able to help others in the same way was a pleasure.',
                image: About2,
            }
        ]

        return (
            <div className={'about'}>
                <div className={'about-header-container'}>
                    <div className={'about-header'}>{ABOUT_ME}</div>
                </div>
                <div className={'about-blocks-container'}>
                    {this.generateAbout(aboutCards)}
                </div>
            </div>
        )
    }
}
