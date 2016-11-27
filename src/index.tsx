import * as React from "react";

import * as ReactDOM from "react-dom"

import { createStore,applyMiddleware } from "redux";

import {logger} from './js/middlewares';

import {firstReduce} from './js/reducer/firstReducer';

import {TextContainer,ButtonContainer,ThirdContainer} from "./js/containers";

const {Provider} = require("react-redux");

require("./css/A.scss");

interface AppIsRequireProps {
    store?:any
}

let applyCreateStore=applyMiddleware(logger)(createStore);

let store=applyCreateStore(firstReduce);

class App extends React.Component<AppIsRequireProps, {}>{
    render(): any {
        return <Provider store={this.props.store}>
        <div>
        <TextContainer say="Richard Chen"/>
        <ButtonContainer btnName="按钮" handler={()=>console.info('add')}/>
        <ThirdContainer isRefresh={true}/>
        </div>
        </Provider>
    }
}
ReactDOM.render(
    <App store={store}/>,
    document.getElementById("example")
);