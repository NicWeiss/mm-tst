import React from 'react';
import './LoginPage.css';
import { Component } from 'react'
import { login_in, login_check } from '../../controller/Login'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class FormForLogin extends Component {
    constructor(props) {
        super(props)
        this.sumbit = this.sumbit.bind(this)
        this.pass = React.createRef()
    }
    sumbit(e) {
        e.preventDefault();
        const _pass = this.pass.current
        _pass.focus()
        login_in(_pass.value).then(
            answer =>{ if(answer) {
                document.location.href="/table"
            }else{
                toast.error('Неверный пароль', {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                })
            }
        })
    }
    render() {
        if(login_check())document.location.href="/table"
        return (
            <div className="grid">
                <div></div>
                <div className="container flex flex_center">
                    <form className="flex flex_column   login_form">
                        <ToastContainer position="top-center" autoClose={3000} hideProgressBar={false}
                            newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable
                            pauseOnHover />
                        <div className="text_center login_title">Вход</div>
                        <input className="login_element" ref={this.pass} type="password" placeholder="введите пароль" required />
                        <button className="login_element accept_button" onClick={this.sumbit}>Войти</button>
                    </form>
                </div>
                <div></div>
            </div>
        )
    }
}


function LoginForm() {
    return (<FormForLogin />);
}

export default LoginForm;
