import React from 'react';
import { Component } from 'react'
import './Table_page.css'
import TableRow from './Table_row'
import { get_products } from '../../controller/Api'


class MainTable extends Component {
  constructor(props) {
    super(props)
    this.state = {
      product: [],
      last_search_text: ""
    }
    this.edit = this.edit.bind(this)
    this.saveOnEnter = this.saveOnEnter.bind(this)
    this.edit_process = this.edit_process.bind(this)
    this.try_write_changes = this.try_write_changes.bind(this)
    this.del = this.del.bind(this)
    this.edited_name = React.createRef()
    this.edited_amount = React.createRef()
    this.edited_cost = React.createRef()
    this.edited_datetime = React.createRef()
  }

  componentWillMount() {
    //Получаем список продуктов с сервера
    get_products('').then(
      answer => {
        this.setState({ product: answer })
      })
  }

  componentWillUpdate() {
    //Обновление

    //Запрос данных с сервера используя поиск
    if (this.props.data.do_search == true && this.props.data.request_filter !== this.state.last_search_text) {
      get_products(this.props.data.request_filter).then(
        answer => {
          this.props.data.do_search = false
          this.state.last_search_text = this.props.data.request_filter
          this.setState({ product: answer })
        })
    }

    //обновление после добавления / удаления / изменения
    if (this.props.data.update) {
      this.props.data.update = false
      get_products('').then(
        answer => {
          this.setState({ product: answer })
          this.props.data.update = false
        })
    }
  }

  try_write_changes(products) {
    //ищем объект с изменением
    const prepare = products.filter(products =>
      (products.new_name ||
        products.new_amount ||
        products.new_cost ||
        products.new_datetime) ? { ...products } : ""
    )

    //ищем изменение и отправляем на сервер
    if (prepare.length > 0) {

      const get_changes =
        (prepare['0'].new_name) ?
          {
            "id": prepare['0'].id,
            "name": prepare['0'].new_name
          } :
          (prepare['0'].new_amount) ?
            {
              "id": prepare['0'].id,
              "amount": prepare['0'].new_amount
            } :
            (prepare['0'].new_cost) ?
              {
                "id": prepare['0'].id,
                "cost": prepare['0'].new_cost
              } :
              (prepare['0'].new_datetime) ?
                {
                  "id": prepare['0'].id,
                  "datetime": prepare['0'].new_datetime
                } : "none"

      console.log(get_changes);
    }


  }


  saveOnEnter(e) {
    if (e.key === 'Enter' || e === 'Enter') {
      const product = this.edit_process()
      this.setState({ product: product })
    }
  }

  edit(id, type) {
    const product = this.edit_process(id, type)
    this.setState({ product: product })
  }

  del(id) {
    const product = this.state.product.filter(product =>
      (product.id !== id) ? { ...product } : ""
    )
    this.setState({ product: product })
  }

  edit_process(id = '0', type = "none") {

    //возвращаем данные к исходному вмду и записываем изменения
    var edited_products = this.state.product.map(product =>
      (product.name.props) ?
        {
          ...product,
          name: this.edited_name.current.defaultValue,
          "new_name": this.edited_name.current.value
        } :
        (product.amount.props) ?
          {
            ...product,
            amount: this.edited_amount.current.defaultValue,
            "new_amount": this.edited_amount.current.value
          } :
          (product.cost.props) ?
            {
              ...product,
              cost: this.edited_cost.current.defaultValue,
              "new_cost": this.edited_cost.current.value
            } :
            (product.datetime.props) ?
              {
                ...product,
                datetime: this.edited_datetime.current.defaultValue,
                "new_datetime": this.edited_datetime.current.value
              } : { ...product }
    )

    //пробуем сохранить изменённые данные
    this.try_write_changes(edited_products)

    //очищаем массив от побочных строк для записи
    edited_products.forEach(product =>
      ("new_name" in product) ? delete product.new_name :
        ("new_amount" in product) ? delete product.new_amount :
          ("new_cost" in product) ? delete product.new_cost :
            ("new_datetime" in product) ? delete product.new_datetime : ""

    )

    //формируем новые данные на основе действий пользователя
    const new_edit_field = edited_products.map(product =>
      (product.id === id) ?
        (type === "name") ?
          {
            ...product,
            name: <input autoFocus={true} className="table_edit"
              onClick={null}
              ref={this.edited_name}
              type="text"
              defaultValue={product.name}
              onKeyDown={this.saveOnEnter} />
          } :
          (type === "amount") ?
            {
              ...product,
              amount: <input autoFocus={true} className="table_edit"
                ref={this.edited_amount}
                type="number"
                defaultValue={product.amount}
                onKeyDown={this.saveOnEnter} />
            } :
            (type === "cost") ?
              {
                ...product,
                cost: <input autoFocus={true} className="table_edit"
                  ref={this.edited_cost}
                  type="number"
                  defaultValue={product.cost}
                  onKeyDown={this.saveOnEnter} />
              } :
              (type === "datetime") ?
                {
                  ...product,
                  datetime: <input autoFocus={true} className="table_datetime"
                    ref={this.edited_datetime}
                    type="text"
                    defaultValue={product.datetime}
                    onKeyDown={this.saveOnEnter} />
                } : ""
        : { ...product }

    )


    return (new_edit_field)
  }

  render() {
    return (
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
            <TableRow key={i} {...el} onEdit={this.edit} onDel={this.del} />
          )}
        </tbody>
      </table>
    )
  }
}





export default MainTable;

