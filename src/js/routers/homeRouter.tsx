import * as React from 'react';

import { Navigator, TextComponent } from '../components';

import { TextContainer } from '../containers';

const { Router, Route, IndexRoute, Link, IndexLink, browserHistory } = require('react-router');

import { rootPath } from '../common';

export default class HomeRouter extends React.Component<{}, {}>{

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router history={browserHistory}>
                <Route path={rootPath} component={Navigator}>

                    <Route path={`about`}>
                        <Route path={`companyCulture`} component={TextContainer} />

                    </Route>
                </Route>


            </Router>
        )
    }

}