import React from 'react';
import { Component } from 'react'

class Cell extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <td className={`data ${this.props.type}`}>{this.props.data}</td>
        )
    }
}
    



export default Cell