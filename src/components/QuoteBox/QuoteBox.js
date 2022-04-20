import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './QuoteBox.scss'
import Ellipse from '../../assets/Ellipse.svg'

export default class QuoteBox extends Component {
    render() {
        const { cardPreHeader, cardHeaderEnd, cardBody, index } = this.props
        const boxClass = index % 2 === 0 ? 'box' : 'box box-float-right'
        return (
            <div className={boxClass}>
                <div className={'box-image-container'}>
                    <img className={'box-image'} src={Ellipse} alt={'testimony'}/>
                </div>
                <div className={'box-text-container'}>
                    <div className={'box-header-div'}>
                        <div className={'box-pre-header'}>{cardPreHeader}</div>
                        <div className={'box-header-end'}>{cardHeaderEnd}</div>
                    </div>
                    <div className={'box-body'}>{cardBody}</div>
                </div>
            </div>
        )
    }
}

QuoteBox.propTypes = {
    cardBody: PropTypes.string,
    cardHeaderEnd: PropTypes.string,
    cardPreHeader: PropTypes.string,
    index: PropTypes.number,
}
