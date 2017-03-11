import * as React from "react";

import * as ReactDOM from "react-dom"

import { createStore, applyMiddleware } from "redux";

import { logger } from './js/middlewares';

import { firstReduce } from './js/reducer/firstReducer';

import { HomeRouterContainer } from "./js/containers";

const {Provider} = require("react-redux");

// require("../node_modules/bootstrap-sass/assets/stylesheets/_bootstrap.scss");

require("./css/styles.scss");

interface AppIsRequireProps {
    store?: any
}

let applyCreateStore = applyMiddleware(logger)(createStore);

let store = applyCreateStore(firstReduce);

class App extends React.Component<AppIsRequireProps, {}>{
    render(): any {
        return <Provider store={this.props.store}>
            <HomeRouterContainer />
        </Provider>
    }
}
ReactDOM.render(
    <App store={store} />,
    document.getElementById("example")
);