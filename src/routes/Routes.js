import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { HOME_URL } from '../constants/urlConstants'
import Home from '../pages/Home/Home'

class Routes extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path={HOME_URL}>
                        <Home />
                    </Route>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Routes
