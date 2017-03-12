import * as React from "react";

import * as ReactDOM from "react-dom"

import { createStore, applyMiddleware,combineReducers } from "redux";

import { logger } from './js/middlewares';

import { homeDayliManagerReducer } from './js/reducer';

import { HomeRouterContainer } from "./js/containers";

const {Provider} = require("react-redux");

// require("../node_modules/bootstrap-sass/assets/stylesheets/_bootstrap.scss");

require("./css/styles.scss");

interface AppIsRequireProps {
    store?: any
}

let applyCreateStore = applyMiddleware(logger)(createStore);

//合并reducers
let rootReducer=combineReducers({
    homeDayliManagerReducer
});

//使用combineReducers合并后,每个reducer会对应一个独立的store数据
let store = applyCreateStore(rootReducer);

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