import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import './Footnote.scss'

class Footnote extends Component {

    render() {
        return (
            <div className={'footnote-container'}>
                <div className={'footnote-ends'}>
                    {'Privacy policy '}&nbsp;&nbsp;&nbsp;{' @2022'}&nbsp;
                    <div className={'footnote-end'}></div>
                    <div className={'footnote-middle'}>{'JOHN OJO'}</div>
                    {'. All rights reserved\r'}
                </div>
            </div>
        )
    }
}

export default (withRouter(Footnote))
