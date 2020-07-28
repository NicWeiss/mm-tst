import React from 'react';
import ControlPanel from './ControlPanel'
import Table from './Table'
import { Component } from 'react'
import { add_product } from '../../controller/Api'

var table_data = {
    update: false,
    request_filter: "",
    do_search: false
}

class Page extends Component {

    constructor(props) {
        super(props)
        this.state = {
            refresh: false
        }
        this.add = this.add.bind(this)
        this.getFilter = this.getFilter.bind(this)
    }

    add() {
        add_product().then(
            answer => {
                table_data.update = answer
                this.setState({ refresh: answer })
            }
        )
    }

    getFilter(text) {
        table_data.request_filter = text
        table_data.do_search = true;
        this.setState({ refresh: true })

    }

    render() {
        return (
            <div className="container flex flex flex_center ">
                <div className=" product_view">
                    <div><h1>Товары</h1></div>
                    <ControlPanel onAdd={this.add} onChange={this.getFilter} />
                    <Table data={table_data} />
                </div>
            </div>
        )
    }
}

function TablePage() {
    return (<Page />);
}

export default TablePage;

