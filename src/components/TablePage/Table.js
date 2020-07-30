import React from 'react';
import { Component } from 'react'
import './TablePage.css'
import TableRow from './TableRow'
import { ToastContainer } from 'react-toastify';
import '../../../node_modules/react-toastify/dist/ReactToastify.css';


class MainTable extends Component {

  render() {
    return (
      <div>
        <ToastContainer position="top-center" autoClose={3000} hideProgressBar={false}
          newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable
          pauseOnHover />
        <table>
          <tbody>
            <tr>
              <th>Название товара {this.props.data.update}</th>
              <th>Колличество (шт)</th>
              <th>Цена (руб)</th>
              <th>Дата и время добавления</th>
              <th></th>
            </tr>
            {this.props.data.map((el) => 
              <TableRow key={el.id} rowData={el} />
            )}
          </tbody>
        </table>
      </div>
    )
  }
}

export default MainTable;