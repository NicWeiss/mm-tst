import React from 'react';
import Cell from './Cell'
import CellDell from './CellDell'
import { Component } from 'react'


class TableRow extends Component{
  constructor(props){
    super(props)
  }

  getCell = () => {
    let array = []
    let i=0
    let id = 0
    for (const[key,value] of Object.entries(this.props.rowData)){
      if (key === "id"){
        id = value
        continue
      }
      array.push(<Cell key={i} id={id} type={key} data={value}/>)
      i++
  }
  array.push(<CellDell key={i} id={id} type="del" data=""/>)
  return array
}

  render(){
    return(
        <tr>
          {this.getCell()}
        </tr>
    )
  }
}

export default TableRow