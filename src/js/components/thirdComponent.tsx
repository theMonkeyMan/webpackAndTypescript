import * as React from "react";

interface ThirdPropInterface{
}

class ThirdComponent extends React.Component<ThirdPropInterface,{}>{

    constructor(){
        super();
    }

    

    render(){
        return (<div>123</div>)
    }
}

export default ThirdComponent;