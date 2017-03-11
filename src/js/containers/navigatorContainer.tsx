import {Navigator} from '../components';

import {mapStateToPropsInterface,mapDispatchToPropsInterface} from './containerInterface';

const {connect} =require('react-redux');

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