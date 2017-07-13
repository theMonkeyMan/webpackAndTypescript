import * as React from "react";

import * as ReactDOM from "react-dom"

import * as redux from "redux";

import * as reactRedux from 'react-redux';

import { logger } from './js/middlewares';

import { homeDayliManagerReducer } from './js/reducer';

import { HomeRouterContainer } from "./js/containers";

const styles=require('./css/styles.scss');

interface AppIsRequireProps {
    store?: any
}

let { createStore, applyMiddleware, combineReducers } = redux;

let { Provider } = reactRedux;

let applyCreateStore = applyMiddleware(logger)(createStore);

//合并reducers
let rootReducer = combineReducers({
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

let app:HTMLElement=document.getElementById("app");

app.classList.add(styles.app);

ReactDOM.render(
    <App store={store} />,
    app
);