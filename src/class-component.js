import React,{Component} from "react";

export default class Button extends Component{
    showAlert(msg){
        alert(msg)
    }


    onClickButtonOK =()=>{
        this.showAlert('Hello')
    }
    render(){
        return <button onClick={this.onClickButtonOK}>OK</button>
    }
}
