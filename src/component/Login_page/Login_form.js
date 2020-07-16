import React from 'react';
import './Login_page.css';
import { Component } from 'react'
import { login_in } from '../../controller/Login'


class FormForLogin extends Component {
    constructor(props) {
        super(props)
        this.sumbit = this.sumbit.bind(this)
        this.pass = React.createRef()
    }
    sumbit(e) {
        e.preventDefault();
        const _pass = this.pass.current
        login_process(_pass.value)
        _pass.focus()
    }
    render() {
        return(
            <div className="grid">
                <div></div>
                <div className="container flex flex_center">
                    <form className="flex flex_column   login_form">
                        <div className="text_center login_title">Вход</div>
                        <input className="login_element" ref={this.pass} type="password" placeholder="введите пароль" required/>
                        <button className="login_element accept_button" onClick={this.sumbit}>Войти</button>
                    </form>
                </div>
                <div></div>
            </div>
        )
    }
}

const login_process = (pass) =>{
    var ifSuccess = login_in(pass)
    if (ifSuccess) window.location.reload(true);
}

function LoginForm() {
    return (<FormForLogin />);
  }
  
  export default LoginForm;
  