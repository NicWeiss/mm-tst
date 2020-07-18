import React from 'react';

const TableRow = ({id="", name="", amount=0, cost=0, datetime="", onEdit=f=>f}) => 
    <tr id={id} onClick={() => onEdit(id)}>
      <td className="data name">{name}</td>
      <td className="data amount text_center">{amount}</td>
      <td className="data cost text_center">{cost}</td>
      <td className="data datetime text_center">{datetime}</td>
      <td className="del">X</td>
    </tr>

export default TableRow