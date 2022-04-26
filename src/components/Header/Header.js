import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import './Header.scss'
import { BIO, FAVOURTIE_PROJECTS, OTHER_PROJECTS, TECHNOLOGIES_USED, SCROLL_ELEMENT } from '../../constants/headerConstants'
import MobileNavDropdown from '../../assets/mobile-nav-dropdown.svg'
import MobileCloseDropdown from '../../assets/mobile-close-dropdown.svg'

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isDesktop: false,
            dropdownOpen: false,
        }

        this.updatePredicate = this.updatePredicate.bind(this)
    }

    componentDidMount() {
        this.updatePredicate()
        window.addEventListener('resize', this.updatePredicate)
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updatePredicate)
    }

    updatePredicate() {
        this.setState({ isDesktop: window.innerWidth > 704 })
        window.innerWidth > 704 && this.setState({ dropdownOpen: false })
    }
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
                top: pageHeight * 0.1,
                left: 0,
                behavior: 'smooth'
            })
            break
        case OTHER_PROJECTS:
            window.scrollTo({
                top: pageHeight * 0.3,
                left: 0,
                behavior: 'smooth'
            })
            break
        case TECHNOLOGIES_USED:
            window.scrollTo({
                top: pageHeight * 0.83,
                left: 0,
                behavior: 'smooth'
            })
            break
        default:
            break
        }
    }

    renderMobileHeaderButton(headerButton) {
        return (
            <div
                key={headerButton}
                className={'header-text mobile-header-button'}
                onClick={() => this.handleClick(headerButton)}
            >
                <div className={'header-item-text'}>{headerButton}</div>
                <div className={'header-underline'}>
                </div>
            </div>
        )
    }

    render() {
        const isDesktop = this.state.isDesktop

        return (
            <div className={'header'}>
                <div className={'header-text-container'}>
                    <div className={'header-text header-title typed-out'}>
                        {'John Ojo'}
                    </div>
                </div>
                <div className={'f-1'}/>
                {/* <div className={'buttons-container'}>
                    {this.renderHeaderButtons()}
                </div> */}
                {(!isDesktop && !this.state.dropdownOpen) && <img className={'dropdown'} src={MobileNavDropdown} alt={'dropdown'} onClick={() => this.handleMobileDropdown()}/>}
                {isDesktop && this.renderHeaderButtons()}
                {(!isDesktop && this.state.dropdownOpen) &&
				<div className={'mobile-header-buttons'}>
				    {(!isDesktop && this.state.dropdownOpen) && <img className={'dropdown-close'} src={MobileCloseDropdown} alt={'dropdown'} onClick={() => this.handleMobileDropdown()}/>}
				    {this.renderMobileHeaderButtons()}
				</div>
                }
            </div>
        )
    }
}

export default (withRouter(Header))
