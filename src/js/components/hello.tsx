import * as React from "react";

const {connect} = require("react-redux");

interface HelloProps { say:string }

class Hello extends React.Component<HelloProps, {}> {
    render() {
        console.info(this.props);
        return <h1>Hello,{this.props.say}</h1>;
    }
}

export const HelloContains=connect(null)(Hello);