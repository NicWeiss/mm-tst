import React from 'react';
import Cookies from 'universal-cookie';
  
export const login_check = () =>{
    console.log('check login')
    const cookies = new Cookies();
    return cookies.get('isAuthorized')
}
export const login_in = () =>{
    return 'final'
}

const set_isAuthorized = () => {
    const cookies = new Cookies();
    cookies.set('isAuthorized', true,  { path: '/' });
}