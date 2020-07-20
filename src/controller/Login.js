import React from 'react';
import Cookies from 'universal-cookie';
import {login} from './Api'

/**
 * Проверка на наличие авторизации
 */
export const login_check = () =>{
    const cookies = new Cookies();
    var isAuthorized = cookies.get('isAuthorized')
    var output = (isAuthorized == 'true') ? true :false
    return output
}

/**
 * Запрос авторизации с последующим сохранением в куки
 * @param {*} pass 
 */
export const login_in = (pass) =>
    login(pass).then(
      members => {if(members){
          set_isAuthorized()
          return true
      } else {
          return false
      }}
    )

/**
 * выход
 */
export const login_out = () =>{
    set_isLogout()
    return true
}

const set_isAuthorized = () => {
    const cookies = new Cookies();
    cookies.set('isAuthorized', true,  { path: '/' });
}

const set_isLogout = () => {
    const cookies = new Cookies();
    cookies.set('isAuthorized', false,  { path: '/' });
}