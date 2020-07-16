import React from 'react';
import { Component } from 'react'
import './Table_page.css'
import TableRow from './Table_row'


class MainTable extends Component {
  constructor(props) {
      super(props)
  }
  render() {
      return(
        <table>
          <tbody>
            <tr>
              <td>Название товара</td>
              <td>Колличество (шт)</td>
              <td>Цена (руб)</td>
              <td>Дата и время добавления</td>
              <td></td>
            </tr>
            {this.props.data.map((el, i) => 
              <TableRow key={i} {...el} />
            )}
          </tbody>
        </table>
      )
  }
}



function Table() {
    var data = [
      {
        "name": "KPT-8",
        "amount": "1",
        "cost": "42",
        "datetime": "10.01.2020 18:00"
      },
      {
        "name": "keyboard",
        "amount": "5",
        "cost": "36",
        "datetime": "10.01.2020 18:00"
      },
      {
        "name": "mouse",
        "amount": "7",
        "cost": "10",
        "datetime": "10.01.2020 18:00"
      }
    ]
    return (<MainTable data={data} />);
  }
  
  export default Table;
  
  