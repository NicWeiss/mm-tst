import React from 'react';

const TableRow = ({id="", name="", amount=0, cost=0, datetime="", onEdit=f=>f, onDel=f=>f}) => 
    <tr id={id}>
      <td onClick={() => onEdit(id, 'name')} className="data name">{name}</td>
      <td onClick={() => onEdit(id, 'amount')} className="data amount text_center">{amount}</td>
      <td onClick={() => onEdit(id, 'cost')} className="data cost text_center">{cost}</td>
      <td onClick={() => onEdit(id, 'datetime')} className="data datetime text_center">{datetime}</td>
      <td onClick={() => onDel(id)}className="del">X</td>
    </tr>

export default TableRow