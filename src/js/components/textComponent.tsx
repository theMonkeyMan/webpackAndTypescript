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
    
    render() {
        return <h1 className="font_size_20 font_color_pink">{this.props.text}</h1>;
    }
}

export default TextComponent;