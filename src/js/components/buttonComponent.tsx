import * as React from "react";

import '../../css/button.scss';

interface buttonPropInterface {
    handler: Function;
    btnName: string;
}

class ButtonComponent extends React.Component<buttonPropInterface, {}>{

    constructor() {
        super();
        this.btnHandler = this.btnHandler.bind(this);
    }

    btnHandler() {
        this.props.handler();
    }

    render() {
        return (<button className={'btn'} {...this.props} onClick={this.btnHandler}>{this.props.btnName}</button>)
    }
}

export default ButtonComponent;