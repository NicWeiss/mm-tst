import React from 'react';
import Cell from './Cell'
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
        id = key
        continue
      }
      array.push(<Cell key={i} id={id} type={key} data={value}/>)
      i++
  }
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