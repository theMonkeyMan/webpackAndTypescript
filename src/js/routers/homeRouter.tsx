import * as React from 'react';

import { TextComponent } from '../components';

import { HomeDayliManagerContainer,NavigatorContainer } from '../containers';

import * as reactRouter from 'react-router';

interface homeRouterPropsInterface{
    state?:any;
}

interface homeRouterStateInterface{
    state?:any;
}

let { Router, Route, IndexRoute, Link, IndexLink, browserHistory,hashHistory } =reactRouter;

export default class HomeRouter extends React.Component<homeRouterPropsInterface, homeRouterStateInterface>{

    constructor(props) {
        super(props);
        this.state={
        };
    }

    render() {
        return (
            <Router history={browserHistory}>
                <Route path={'/'} component={NavigatorContainer}>

                    <Route path={`/about`} >
                        {/*<Route path={`companyCulture`} component={homeDayliManagerContainer} />*/}

                    </Route>

                    <Route path={`/myHome`} >
                        <Route path={`dayliManager`} component={HomeDayliManagerContainer} />

                    </Route>

                </Route>


            </Router>
        )
    }

}