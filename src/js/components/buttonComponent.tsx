import * as React from "react";


const styles=require('../../css/button.scss');

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
        return (<button className={styles.btn} onClick={this.btnHandler}>{this.props.btnName}</button>)
    }
}

export default ButtonComponent;