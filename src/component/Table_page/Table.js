import React from 'react';
import { Component } from 'react'
import './Table_page.css'
import TableRow from './Table_row'


class MainTable extends Component {
  constructor(props) {
      super(props)
      this.state = {
        product: []
      }
      this.edit = this.edit.bind(this)
      this.saveOnEnter = this.saveOnEnter.bind(this)
      this.edited_name = React.createRef()
      this.edited_amount = React.createRef()
      this.edited_cost = React.createRef()
  }

  componentWillMount(){

    var data = [
      {
        "id": "123fn",
        "name": "KPT-8",
        "amount": "1",
        "cost": "42",
        "datetime": "10.01.2020 18:00"
      },
      {
        "id": "23ef",
        "name": "keyboard",
        "amount": "5",
        "cost": "36",
        "datetime": "10.01.2020 18:00"
      },
      {
        "id": "jn6554",
        "name": "mouse",
        "amount": "7",
        "cost": "10",
        "datetime": "10.01.2020 18:00"
      }
    ]
    
    this.setState({product: data})
  }

  componentWillUpdate(){
    console.log(this.props.data.request_filter);
    console.log('update');
    

    var data = [
      {
        "id": "123fn",
        "name": "KPT-8",
        "amount": "1",
        "cost": "42",
        "datetime": "10.01.2020 18:00"
      },
      {
        "id": "23ef",
        "name": "keyboard",
        "amount": "5",
        "cost": "36",
        "datetime": "10.01.2020 18:00"
      },
      {
        "id": "jn6554",
        "name": "mouse",
        "amount": "7",
        "cost": "10",
        "datetime": "10.01.2020 18:00"
      }
    ]
    
    this.state.product = data
  }

  saveOnEnter(e){
    if (e.key === 'Enter' || e === 'Enter') {
      const _edited_name = this.edited_name.current.value
      const _edited_amount = this.edited_amount.current.value
      const _edited_cost = this.edited_cost.current.value
      const product = this.state.product.map(product  => 
        (!product.name.props) ? 
            product  : {
              ...product,
              name : _edited_name,
              amount: _edited_amount,
              cost: _edited_cost,
            }
      )
      
    this.setState({product})
    }
  }

  edit(id){

    const product = this.state.product.map(product  => 
      (product.id === id && !product.name.props) ? 
          {
            ...product,
          name : <input className="table_edit" 
                        ref={this.edited_name} 
                        type="text" 
                        defaultValue={product.name} 
                        onKeyDown={this.saveOnEnter} />,
          amount : <input className="table_edit" 
                          ref={this.edited_amount} 
                          type="number" 
                          defaultValue={product.amount}
                          onKeyDown={this.saveOnEnter}/>,
          cost : <input className="table_edit" 
                        ref={this.edited_cost} 
                        type="number" 
                        defaultValue={product.cost}
                        onKeyDown={this.saveOnEnter}/>
          } : (product.id !== id && product.name.props) ?  {
                ...product,
                name : this.edited_name.current.defaultValue,
                amount: this.edited_amount.current.defaultValue,
                cost: this.edited_cost.current.defaultValue,
          } : product
          
    )
    
    this.setState({product})

  }
  render() {
      return(
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
              <TableRow key={i} {...el} onEdit={this.edit} />
            )}
          </tbody>
        </table>
      )
  }
}




  
  export default MainTable;
  
  