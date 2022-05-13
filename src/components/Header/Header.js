import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import './Header.scss'
import { BIO, TECHNOLOGIES_USED, MY_WORK, ABOUT_ME } from '../../constants/headerConstants'
import MobileNavDropdown from '../../assets/mobile-nav-dropdown.svg'
import MobileCloseDropdown from '../../assets/mobile-close-dropdown.svg'

const headerButtons = [
    BIO, TECHNOLOGIES_USED, MY_WORK, ABOUT_ME
]
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
        return (
            headerButtons.map(headerButton=>this.renderHeaderButton(headerButton))
        )
    }

    handleClick(headerButton) {
        switch (headerButton) {
        case BIO:
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            })
            break
        case TECHNOLOGIES_USED:
            window.scrollTo({
                top: 500,
                left: 0,
                behavior: 'smooth'
            })
            break
        case MY_WORK:
            window.scrollTo({
                top: 1400,
                left: 0,
                behavior: 'smooth'
            })
            break
        case ABOUT_ME:
            window.scrollTo({
                top: 2600,
                left: 0,
                behavior: 'smooth'
            })
            break
        default:
            break
        }
    }

    handleMobileDropdown() {
        this.setState({ dropdownOpen: !this.state.dropdownOpen })
    }

    renderMobileHeaderButtons() {
        return (
            headerButtons.map(headerButton=>this.renderMobileHeaderButton(headerButton))
        )
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
                <div className={'header-text-container'} onClick={() => this.handleClick(BIO)}>
                    <div className={'header-text header-title typed-out'}>
                        {'John Ojo'}
                    </div>
                </div>
                <div className={'f-1'}/>
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
