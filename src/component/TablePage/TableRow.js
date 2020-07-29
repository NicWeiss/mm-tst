import React from 'react';
import Cell from './Cell'
import CellDell from './CellDell'
import { Component } from 'react'


class TableRow extends Component {
  constructor(props) {
    super(props)
    this.state = {
      deleted: false
    }
  }

  deleted = () => {
    this.setState({ deleted: true })
  }

  getCells = () => {
    if (this.state.deleted) return
    let array = []
    let i = 0
    let id = 0
    for (const [key, value] of Object.entries(this.props.rowData)) {
      if (key === "id") {
        id = value
        continue
      }
      array.push(<Cell key={i} id={id} type={key} data={value} />)
      i++
    }
    array.push(<CellDell key={i} id={id} type="del" onDeleted={this.deleted} data="" />)
    return array
  }

  render() {
    return (
      <tr>
        {this.getCells()}
      </tr>
    )
  }
}

export default TableRow