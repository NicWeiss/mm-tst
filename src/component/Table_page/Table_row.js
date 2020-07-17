import React from 'react';

const TableRow = ({id="", name="", amount=0, cost=0, datetime="", onEdit=f=>f}) => 
    <tr id={id} onClick={() => onEdit(id)}>
      <td className="name">{name}</td>
      <td className="amount">{amount}</td>
      <td className="cost">{cost}</td>
      <td className="datetime">{datetime}</td>
      <td className="del"></td>
    </tr>

export default TableRow