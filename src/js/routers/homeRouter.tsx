import * as React from 'react';

import { Navigator,TextComponent } from '../components';

import { TextContainer } from '../containers';

const { Router, Route, IndexRoute, Link, IndexLink, browserHistory } = require('react-router');


export default class HomeRouter extends React.Component<{}, {}>{

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={Navigator} />
                <Route path="/about" component={TextComponent} />
            </Router>
        )
    }

}