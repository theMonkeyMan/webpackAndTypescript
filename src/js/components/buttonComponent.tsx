import * as React from "react";

interface buttonPropInterface{
    handler:Function,
    btnName:string
}

class ButtonComponent extends React.Component<buttonPropInterface,{}>{

    constructor(){
        super();
    }

    btnHandler(){
        this.props.handler();
    }

    render(){
        console.info(this.props)
        return (<button onClick={this.btnHandler.bind(this)}>{this.props.btnName}</button>)
    }
}

export default ButtonComponent;