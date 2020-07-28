import React from 'react';
import { Component } from 'react'

class CellDel extends Component {
    constructor(props) {
        super(props)
    }

    del = () => {
        console.log('delete');
    }


    render() {
            return(
                <td onClick={this.del} className="del">X</td>
            )
    }
}

export default CellDel