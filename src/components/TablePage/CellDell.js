import React from 'react';
import { Component } from 'react'
import { delete_product } from '../../controller/Api'
import { toast } from 'react-toastify';

class CellDel extends Component {

    del = () => {
        delete_product(this.props.id).then(
            apiAnswer => {
                if (apiAnswer) {
                    toast.success('Продукт удалён')
                    this.props.onDeleted()
                } else toast.error('Не удалось удалить')
            }
        )
    }


    render() {
        return (
            <td onClick={this.del} className="del">X</td>
        )
    }
}

export default CellDel