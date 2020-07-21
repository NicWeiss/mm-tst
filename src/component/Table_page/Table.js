import React from 'react';
import { Component } from 'react'
import './Table_page.css'
import TableRow from './Table_row'
import { get_products, delete_product, update_product } from '../../controller/Api'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class MainTable extends Component {
  constructor(props) {
    super(props)
    this.state = {
      product: [],
      last_search_text: ""
    }
    this.edit = this.edit.bind(this)
    this.saveOnEnter = this.saveOnEnter.bind(this)
    this.blur = this.blur.bind(this)
    this.edit_process = this.edit_process.bind(this)
    //this.try_write_changes = this.try_write_changes.bind(this)
    this.del = this.del.bind(this)
    this.my_input_value = React.createRef()
  }

  componentWillMount() {
    //Получаем список продуктов с сервера
    get_products('').then(
      answer => {
        if (answer) this.setState({ product: answer })
      })
  }

  componentWillUpdate() {
    //Обновление

    //Запрос данных с сервера используя поиск
    if (this.props.data.do_search === true && this.props.data.request_filter !== this.state.last_search_text) {
      get_products(this.props.data.request_filter).then(
        answer => {
          this.props.data.do_search = false
          this.state.last_search_text = this.props.data.request_filter
          if (answer) this.setState({ product: answer })
        })
    }

    //обновление после добавления / удаления / изменения
    if (this.props.data.update) {
      this.props.data.update = false
      get_products('').then(
        answer => {
          if (answer) this.setState({ product: answer })
          this.props.data.update = false
        })
    }
  }

  /** Обрабатываем Enter
   * 
   * @param {*} e 
   */
  saveOnEnter(e) {
    const id = e.target.id
    const type = e.target.className
    if (e.key === 'Enter' || e === 'Enter') {
      const product = this.edit_process(id, type, true)
      this.setState({ product: product })
    }
  }

  /**
   * сохраняем изменения по событию onBlur
   */
  blur() {
    const product = this.edit_process()
    this.setState({ product: product })
  }

  /**функция запускается по нажатию на строку таблицы
   * 
   * @param {*} id 
   * @param {*} type 
   */
  edit(id, type) {
    const product = this.edit_process(id, type)
    this.setState({ product: product })
  }

  /** Делаем запрос на сервер. если всё ок - удаляем объект из state.product
   * 
   * @param {*} id 
   */
  del(id) {
    delete_product(id).then(
      answer => {
        if (answer) {
          const product = this.state.product.filter(product =>
            (product.id !== id) ? { ...product } : ""
          )
          this.setState({ product: product })
        }
      })
  }

  /** Выполнение операций с таблицей
   * 
   * @param {*} id 
   * @param {*} type 
   */
  edit_process(id = '0', type = "none", enter = false) {
    var reclick = false

    //данный перебор позволяет не ставить input там где он уже есть
    this.state.product.forEach(product => {
      if (product.id === id && product[type].props) {
        reclick = true
      }
    })
    if (reclick && !enter) return (this.state.product)

    //возвращаем данные к исходному виду и  если есть изменения отправляем на сервер
    let edited_products = this.state.product.map(product => {
      const field = {}, fields = []
      for (const [key, value] of Object.entries(product)) {
        if (value.props) {
          if (this.my_input_value.current.value !== this.my_input_value.current.defaultValue) {
            const changes = {
              "id": product.id,
              "key": key,
              "value": this.my_input_value.current.value
            }
            update_product(changes).then(
              answer => {
                if (answer.status === 'success') {
                  get_products('').then(
                    answer => {
                      this.setState({ product: answer })
                    })
                } else {
                  toast.error(answer.message);
                }
              }
            )
          }
          field[key] = this.my_input_value.current.defaultValue
        } else {
          field[key] = value
        }
        fields.push(field)
      }
      return field
    })

    //формируем новые данные на основе действий пользователя
    const new_edit_field = edited_products.map(product => {
      if (product.id === id) {
        product[type] = <input autoFocus={true}
          ref={this.my_input_value}
          type="text"
          id={id}
          className={type}
          defaultValue={product[type]}
          onKeyDown={this.saveOnEnter} />
      }
      return product
    })
    return (new_edit_field)
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
              <TableRow key={i} {...el} onEdit={this.edit} onBlur={this.blur} onDel={this.del} />
            )}
          </tbody>
        </table>
      </div>
    )
  }
}

export default MainTable;