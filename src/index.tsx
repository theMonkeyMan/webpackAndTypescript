import * as React from "react";
import * as ReactDOM from "react-dom"
import { createStore } from "redux";
const {Provider} = require("react-redux");
import { HelloContains } from "./js/components/hello";
const {firstReduce} = require("./js/reducer/firstReducer.ts");

require("./css/A.scss");

interface AppIsRequireProps {
    store?:any
}

let store=createStore(firstReduce);

class App extends React.Component<AppIsRequireProps, {}>{
    render(): any {
        return <Provider store={this.props.store}>
        <div>
        <HelloContains say="Richard Chen"/>        
        </div>
        </Provider>
    }
}
ReactDOM.render(
    <App store={store}/>,
    document.getElementById("example")
);