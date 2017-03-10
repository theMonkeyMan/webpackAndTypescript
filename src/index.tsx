import * as React from "react";

import * as ReactDOM from "react-dom"

import { createStore, applyMiddleware } from "redux";

import { logger } from './js/middlewares';

import { firstReduce } from './js/reducer/firstReducer';

import { TextContainer, ButtonContainer, ThirdContainer } from "./js/containers";

import { HomeRouter } from './js/routers';

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
            <HomeRouter />
        </Provider>
    }
}
ReactDOM.render(
    <App store={store} />,
    document.getElementById("example")
);