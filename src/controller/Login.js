import React from 'react';
import Cookies from 'universal-cookie';
  
export const login_check = () =>{
    //set_isLogout()
    const cookies = new Cookies();
    var isAuthorized = cookies.get('isAuthorized')
    var output = (isAuthorized == 'true') ? true :false
    return output
}
export const login_in = () =>{
    set_isAuthorized()
    return true
}

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