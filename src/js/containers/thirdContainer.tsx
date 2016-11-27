const {connect} =require('react-redux');

import {ThirdComponent} from '../components';

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


const ThirdContainer=connect(mapStateToProps,mapDispatchToProps)(ThirdComponent);

export default ThirdContainer;