import React from 'react';

const TableRow = ({id="", name="", amount=0, cost=0, datetime="", onEdit=f=>f, onDel=f=>f, onBlur=f=>f}) => 
    <tr id={id}>
      <td onBlur={()=>onBlur()} onClick={() => onEdit(id, 'name')} className="data name">{name}</td>
      <td onBlur={()=>onBlur()} onClick={() => onEdit(id, 'amount')} className="data amount text_center">{amount}</td>
      <td onBlur={()=>onBlur()} onClick={() => onEdit(id, 'cost')} className="data cost text_center">{cost}</td>
      <td onBlur={()=>onBlur()} onClick={() => onEdit(id, 'datetime')} className="data datetime text_center">{datetime}</td>
      <td onBlur={()=>onBlur()} onClick={() => onDel(id)}className="del">X</td>
    </tr>

export default TableRow