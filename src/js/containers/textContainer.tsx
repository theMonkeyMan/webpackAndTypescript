const {connect} =require('react-redux');

import {TextComponent} from '../components';

import {mapStateToPropsInterface,mapDispatchToPropsInterface} from './containerInterface';

const mapStateToProps:mapStateToPropsInterface=(state:any,ownProps:any)=>{
    return {
        state,
        ownProps
    }
}

const mapDispatchToProps:mapDispatchToPropsInterface=(dispatch:any,ownProps:any)=>{
    return {
        dispatch
    }
}

const TextContainer=connect(mapStateToProps,mapDispatchToProps)(TextComponent);

export default TextContainer;