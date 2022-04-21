import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import './Header.scss'
import { BIO, FAVOURTIE_PROJECTS, OTHER_PROJECTS, TECHNOLOGIES_USED, SCROLL_ELEMENT } from '../../constants/headerConstants'

class Header extends Component {
    renderHeaderButton(headerButton) {
        return (
            <div
                key={headerButton}
                className={'header-text header-button'}
                onClick={() => this.handleClick(headerButton)}
            >
                <div className={'header-item-text'}>{headerButton}</div>
                <div className={'header-underline'}>
                </div>
            </div>
        )
    }

    renderHeaderButtons() {
        const headerButtons = [
            BIO, FAVOURTIE_PROJECTS, OTHER_PROJECTS, TECHNOLOGIES_USED
        ]
        return (
            headerButtons.map(headerButton=>this.renderHeaderButton(headerButton))
        )
    }

    handleClick(headerButton) {
        const page = document.getElementById(SCROLL_ELEMENT)
        const pageHeight = page.scrollHeight
        switch (headerButton) {
        case BIO:
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            })
            break
        case FAVOURTIE_PROJECTS:
            window.scrollTo({
                top: pageHeight * 0.25,
                left: 0,
                behavior: 'smooth'
            })
            break
        case OTHER_PROJECTS:
            window.scrollTo({
                top: pageHeight * 0.5,
                left: 0,
                behavior: 'smooth'
            })
            break
        case TECHNOLOGIES_USED:
            window.scrollTo({
                top: pageHeight * 0.75,
                left: 0,
                behavior: 'smooth'
            })
            break
        default:
            break
        }
    }

    render() {
        return (
            <div className={'header'}>
                <div className={'header-text-container'}>
                    <div className={'header-text header-title typed-out'}>
                        {'John Ojo'}
                    </div>
                </div>
                <div className={'f-1'}/>
                <div className={'buttons-container'}>
                    {this.renderHeaderButtons()}
                </div>
            </div>
        )
    }
}

export default (withRouter(Header))
