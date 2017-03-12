import * as React from "react";

interface TextPropsInterface {
    state?:any;
    text:string;
 }

 interface TextStateInterface {
     state?:any;
     text?:string;
 }


class TextComponent extends React.Component<TextPropsInterface, TextStateInterface> {

    constructor(props){
        super(props);
    }

    componentDidMount(){
        
    }
    
    render() {
        return <h1 className="font_size_20 ">{this.props.text}</h1>;
    }
}

export default TextComponent;