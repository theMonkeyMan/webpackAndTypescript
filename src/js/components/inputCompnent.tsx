import * as React from 'react';

const styles=require('../../css/input.scss');

export default class InputComponent extends React.Component<{}, {}>{

    inputObj: any;
    setInputTextTrigger: any;
    constructor(props) {
        super(props);
        this.state = {
            inputText: ''
        };
        this.inputOnchange = this.inputOnchange.bind(this);
    }

    clearInputTextTrigger(trigger: any) {
        clearTimeout(trigger);
    }

    inputOnchange(e) {
        if (this.clearInputTextTrigger) {
            this.clearInputTextTrigger(this.setInputTextTrigger);
            this.setInputTextTrigger = null;
        }

        this.setInputTextTrigger = setTimeout(() => {
            this.setState({inputText:e.value});
        }, 200);
    }

    render() {
        return (
            <div>
                <input className={styles.input} ref={obj => { this.inputObj = obj; } } onChange={this.inputOnchange} />
            </div>
        );
    }

}