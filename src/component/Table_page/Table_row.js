import React from 'react';

const TableRow = ({name="", amount=0, cost=0, datetime=""}) => 
    <tr>
      <td className="name">{name}</td>
      <td className="amount">{amount}</td>
      <td className="cost">{cost}</td>
      <td className="datetime">{datetime}</td>
      <td className="del"></td>
    </tr>

export default TableRow