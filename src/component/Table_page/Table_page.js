import React from 'react';
import ControlPanel from './Control_panel'
import Table from './Table'
import { Component } from 'react'


class Page extends Component {

    constructor(props) {
        super(props)
        this.state = {
          update: "false",
          request_filter: "",
          do_search: false
        }
        this.add = this.add.bind(this)
        this.getFilter = this.getFilter.bind(this)
    }

    add(){
        console.log('add new element');
        this.setState({update: "true"})
    }

    getFilter(text){
        console.log('set request filter: '+text);
        this.setState({request_filter: text, do_search: true})
        
    }

  render() {
    return(
        <div className="container flex flex flex_center ">
            <div className=" product_view">
                <div><h1>Товары</h1></div>
                <ControlPanel onAdd={this.add} onChange={this.getFilter}/>
                <Table data={this.state}/>
            </div>
        </div>
        )
    }
}

function TablePage() {
    return (<Page />);
  }
  
  export default TablePage;
  
  