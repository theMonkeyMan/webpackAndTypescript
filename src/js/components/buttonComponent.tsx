import * as React from "react";

import { Button } from 'react-bootstrap';

interface buttonPropInterface {
    handler: Function;
    btnName: string;
    bsStyle: string;
}

class ButtonComponent extends React.Component<buttonPropInterface, {}>{

    constructor() {
        super();
    }

    btnHandler() {
        this.props.handler();
    }

    render() {
        console.info(this.props);
        return (<Button {...this.props} onClick={this.btnHandler.bind(this)}>{this.props.btnName}</Button>)
    }
}

export default ButtonComponent;