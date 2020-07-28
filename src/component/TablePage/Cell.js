import React from 'react';
import { Component } from 'react'

class Cell extends Component {
    constructor(props) {
        super(props)
        this.state = {
            edit: false
        }
        this.input_ref = React.createRef()
    }

    keyDown = (e) => {
        if (e.key === 'Enter' || e === 'Enter') {
            this.endEdit()
          }
    }

    startEdit = () =>{
        console.log('startEdit');
        this.setState({ edit: true })
    }
    endEdit = () => {
        console.log('endEdit');
        console.log(`id: ${this.props.id} | type: ${this.props.type} | new value: ${this.input_ref.current.value}`);
        this.setState({ edit: false })
    }

    staticCell = () => <td  onClick={this.startEdit} 
                            className="data text_center">
                                {this.props.data}
                            </td>

    editableCell = () => <td className="data">
                            <input autoFocus={true} 
                                    ref={this.input_ref}
                                    onBlur={this.endEdit}
                                    onKeyDown={this.keyDown}
                                    type="text"
                                    className="cell_edit"
                                    defaultValue={this.props.data}/>
                        </td>

    render() {
        if (!this.state.edit)
            return this.staticCell(); 
        else 
            return this.editableCell();
    }
}

export default Cell