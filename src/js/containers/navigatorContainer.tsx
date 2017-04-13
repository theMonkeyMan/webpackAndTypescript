import {Navigator} from '../components';

import {mapStateToPropsInterface,mapDispatchToPropsInterface} from './containerInterface';

import * as reactRedux from 'react-redux';
const {connect} =reactRedux;

const mapStateToProps:mapStateToPropsInterface=(state:any,ownProps:any)=>{
    return {
        state
    }
}

const mapDispatchToProps:mapDispatchToPropsInterface=(dispatch:any,ownProps:any)=>{
    return {
        
    }
}

const NavigatorContainer=connect(mapStateToProps,mapDispatchToProps)(Navigator);

export default NavigatorContainer;