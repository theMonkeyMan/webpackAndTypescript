import * as React from 'react';

import { TextComponent, ButtonComponent, InputComponent } from '../components';

import { mapStateToPropsInterface, mapDispatchToPropsInterface } from './containerInterface';

import { addAction } from '../action/addAction';

const {connect} = require('react-redux');

import { requestList } from '../requests';

import '../../css/homeDayliManager.scss';

const mapStateToProps: mapStateToPropsInterface = (state: any, ownProps: any) => {
    return {
        state
    }
}

const mapDispatchToProps: mapDispatchToPropsInterface = (dispatch: any, ownProps: any) => {
    return {
        handler: () => { dispatch(addAction) }
    }
}

interface HomeDayliManagerPropsInterface {
    state?: any;
}

interface HomeDayliManagerStateInterface {
    state?: any;
    text?: string;
}


class HomeDayliManager extends React.Component<HomeDayliManagerPropsInterface, HomeDayliManagerStateInterface>{

    userInfo = "";

    input_name: any;

    input_age: any;

    input_sex: any;

    constructor(props) {
        super(props);

        this.state = {
            text: ""
        };

        this.submitBtnClick = this.submitBtnClick.bind(this);

    }

    componentDidMount() {
        // requestList.getUserInfo({}).then(res=>{
        //     console.info(res);
        // })
        // .catch(error=>{
        //     console.info(error);
        // })
    }

    async componentWillUpdate() {
        //    await requestList.getUserInfo({}).then(res=>{
        //         console.info(res);
        //         this.userInfo=JSON.stringify(res);
        //     })
        //     .catch(error=>{
        //         console.info(error);
        //     });

        //     requestList.addUserInfo({
        //         name:"heihei",
        //         age:23,
        //         sex:"man"
        //     }).then(res=>{
        //         console.info(res);
        //     })
        //     .catch(error=>{
        //         console.info(error);
        //     });
    }

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    submitBtnClick() {
        const user_name = this.input_name.state.inputText;
        const user_age = this.input_age.state.inputText;
        const user_sex = this.input_sex.state.inputText;
        requestList.addUserInfo({
            name: user_name,
            age: user_age,
            sex: user_sex
        }).then(res => {
            console.info(res);
            alert(res["msg"]);
        })
            .catch(error => {
                console.info(error);
            });
    }



    render() {
        return ( 
            <div className={'content'}>
                <li className={'margin_top_12'}>
                    <span className={'float_left'}>姓名:</span>
                    <InputComponent ref={obj => { this.input_name = obj; } } />
                </li>
                <li className={'margin_top_12'}>
                    <span className={'float_left'}>年龄:</span>
                    <InputComponent ref={obj => { this.input_age = obj; } } />
                </li>
                <li className={'margin_top_12'}>
                    <span className={'float_left'}>性别:</span>
                    <InputComponent ref={obj => { this.input_sex = obj; } } />
                </li>
                <li className={'text_align_center margin_top_12'}>
                    <span><ButtonComponent btnName="按钮" handler={this.submitBtnClick} /></span>
                </li>

                {/*<TextComponent text={this.userInfo} />*/}
            </div>

        );
    }

}

const HomeDayliManagerContainer = connect(mapStateToProps, mapDispatchToProps)(HomeDayliManager);

export default HomeDayliManagerContainer;
