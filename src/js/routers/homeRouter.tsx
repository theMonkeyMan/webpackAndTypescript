import * as React from 'react';

import { TextComponent } from '../components';

import { HomeDayliManagerContainer,NavigatorContainer } from '../containers';

const { Router, Route, IndexRoute, Link, IndexLink, browserHistory } = require('react-router');

import { rootPath } from '../common';

interface homeRouterPropsInterface{
    state?:any;
}

interface homeRouterStateInterface{
    state?:any;
    rootPath:string;
}

export default class HomeRouter extends React.Component<homeRouterPropsInterface, homeRouterStateInterface>{

    constructor(props) {
        super(props);
        this.state={
            rootPath:this.props.state.get("rootPath"),
        };
    }

    render() {
        return (
            <Router history={browserHistory}>
                <Route path={this.state.rootPath} component={NavigatorContainer}>

                    <Route path={`about`} >
                        {/*<Route path={`companyCulture`} component={homeDayliManagerContainer} />*/}

                    </Route>

                    <Route path={`myHome`} >
                        <Route path={`dayliManager`} component={HomeDayliManagerContainer} />

                    </Route>

                </Route>


            </Router>
        )
    }

}