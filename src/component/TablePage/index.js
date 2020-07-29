import React from 'react';
import ControlPanel from './ControlPanel'
import Table from './Table'
import { Component } from 'react'
import { add_product, get_products } from '../../controller/Api'
import { toast } from 'react-toastify';

class Page extends Component {

    constructor(props) {
        super(props)
        this.state = {
            products: []
        }
        this.add = this.add.bind(this)
        this.getFilter = this.getFilter.bind(this)
    }

    componentWillMount() {
        get_products().then(
            productsArray => {
                if (productsArray) this.setState({ products: productsArray })
            })
    }

    add() {
        add_product().then(
            answer => {
                toast.success('Продукт добавлен')
                get_products().then(
                    productsArray => {
                        if (productsArray) this.setState({ products: productsArray })
                    })
            }
        )
    }

    getFilter(text) {
        get_products(text).then(
            productsArray => {
                if (productsArray) this.setState({ products: productsArray })
            })
    }

    render() {
        //console.log(this.state.products);
        return (
            <div className="container flex flex flex_center ">
                <div className=" product_view">
                    <div><h1>Товары</h1></div>
                    <ControlPanel onAdd={this.add} onChange={this.getFilter} />
                    <Table data={this.state.products} />
                </div>
            </div>
        )
    }
}

function TablePage() {
    return (<Page />);
}

export default TablePage;

