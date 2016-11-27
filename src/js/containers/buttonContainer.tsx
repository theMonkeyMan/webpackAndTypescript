const {connect} =require('react-redux');

import {ButtonComponent} from '../components';

import {mapStateToPropsInterface,mapDispatchToPropsInterface} from './containerInterface';

import {addAction} from '../action/addAction';

const mapStateToProps:mapStateToPropsInterface=(state:any,ownProps:any)=>{
    return {
        state
    }
}

const mapDispatchToProps:mapDispatchToPropsInterface=(dispatch:any,ownProps:any)=>{

    return {
        handler:()=>dispatch(addAction),
    }
}

const ButtonContainer=connect(mapStateToProps,mapDispatchToProps)(ButtonComponent);

export default ButtonContainer;