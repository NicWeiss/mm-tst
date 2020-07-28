import React from 'react';
import { Component } from 'react'
import './TablePage.css'
import TableRow from './TableRow'
import { get_products, delete_product, update_product } from '../../controller/Api'
import { ToastContainer, toast } from 'react-toastify';
import '../../../node_modules/react-toastify/dist/ReactToastify.css';


class MainTable extends Component {
  constructor(props) {
    super(props)
    this.state = {
      product: []
    }
  }

  componentWillMount() {
    //Получаем список продуктов с сервера
    get_products().then(
      answer => {
        if (answer) this.setState({ product: answer })
      })
  }


  render() {
    return (
      <div>
        <ToastContainer position="top-center" autoClose={5000} hideProgressBar={false}
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
            {this.state.product.map((el, i) =>
              <TableRow key={i} rowData={el} />
            )}
          </tbody>
        </table>
      </div>
    )
  }
}

export default MainTable;