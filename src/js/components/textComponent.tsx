import * as React from "react";

interface TextPropsInterface { say:string,state?:any }

class TextComponent extends React.Component<TextPropsInterface, {}> {

    constructor(){
        super();
    }
    
    render() {
        return <h1>the number:{this.props.state.get('number')}</h1>;
    }
}

export default TextComponent;