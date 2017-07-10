import * as React from 'react';

import { TextComponent, ButtonComponent, InputComponent } from '../components';

import { mapStateToPropsInterface, mapDispatchToPropsInterface } from './containerInterface';

import { addAction } from '../action/addAction';

const {connect} = require('react-redux');

import { requestList } from '../requests';

const styles=require('../../css/homeDayliManager.scss');

const mapStateToProps: mapStateToPropsInterface = (state: any, ownProps: any) => {
    return {
        state,
    }
}

const mapDispatchToProps: mapDispatchToPropsInterface = (dispatch: any, ownProps: any) => {
    return {
        dispatch,
    }
}

interface HomeDayliManagerPropsInterface {
    state?: any;
    dispatch?: Function;
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

    async getUserInfo() {
        this.props.dispatch({ type: "FETCH_PENDDING" });
        await requestList.getUserInfo({}).then(res => {
            this.props.dispatch({ type: "FETCH_RECEIVE", payload: res });
        })
            .catch(error => {
                console.info(error);
            });
    }

    async componentDidMount() {
        this.getUserInfo();
    }

    componentWillUpdate() {
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
            this.getUserInfo();
        })
            .catch(error => {
                console.info(error);
            });
    }



    render() {
        return (
            <div className={styles.content}>
                <li className={styles.margin_top_12}>
                    <span className={styles.float_left}>姓名:</span>
                    <InputComponent ref={obj => { this.input_name = obj; } } />
                </li>
                <li className={styles.margin_top_12}>
                    <span className={styles.float_left}>年龄:</span>
                    <InputComponent ref={obj => { this.input_age = obj; } } />
                </li>
                <li className={styles.margin_top_12}>
                    <span className={styles.float_left}>性别:</span>
                    <InputComponent ref={obj => { this.input_sex = obj; } } />
                </li>
                <li className={[styles.text_align_center,styles.margin_top_12].join(' ')}>
                    <span><ButtonComponent btnName="按钮" handler={this.submitBtnClick} /></span>
                </li>

                <TextComponent text={JSON.stringify(this.props.state.homeDayliManagerReducer.get("userInfoList"))} />
            </div>

        );
    }

}

const HomeDayliManagerContainer = connect(mapStateToProps, mapDispatchToProps)(HomeDayliManager);

export default HomeDayliManagerContainer;
