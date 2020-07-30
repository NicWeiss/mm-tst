import React from 'react';
import './TablePage.css'
import { login_out } from '../../controller/Login'



const Panel = ({onAdd=f=>f, onChange=f=>f}) => {
    let _search_text

    const logout = e => {
        e.preventDefault();
        console.log('logout')
        doLogout()
    }

    return(
        <div className="flex flex_between controlPanel">
            <input className="search_box" 
                ref={input => _search_text = input} 
                onChange={() => onChange(_search_text.value)} 
                type="text" 
                placeholder="Поиск" />
          <div> 
            <button className="add accept_button" onClick={() => onAdd()}>Добавить</button>
            <button className="add cancel_button" onClick={logout}>Выйти</button>
           </div>
        </div>
    )
}

const doLogout = () => {
    if (login_out()) window.location.reload(true);
} 

  
  export default Panel;
  
  