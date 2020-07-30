import React from 'react';
import { Component } from 'react'
import { update_product } from '../../controller/Api'
import { toast } from 'react-toastify';

class Cell extends Component {
    constructor(props) {
        super(props)
        this.state = {
            edit: false,
            data: this.props.data
        }
        this.input_ref = React.createRef()
    }

    keyDown = (e) => {
        if (e.key === 'Enter' || e === 'Enter') {
            this.endEdit()
        }
    }

    startEdit = () => {
        this.setState({ edit: true })
    }
    endEdit = () => {
        if (this.state.data === this.input_ref.current.value) {
            this.setState({ edit: false })
            return
        }
        let dataForUpdate = {
            "id": this.props.id,
            "key": this.props.type,
            "value": this.input_ref.current.value
        }
        update_product(dataForUpdate).then(
            apiAnswer => {
                if (apiAnswer.status === "success") {
                    toast.success('Сохранено')
                    this.setState({ edit: false, data: this.input_ref.current.value })
                } else {
                    toast.error(apiAnswer.message)
                    this.setState({ edit: false })
                }
            }
        )
    }

    staticCell = () =>
        <td onClick={this.startEdit}
            className="data text_center">
            {this.state.data}
        </td>

    editableCell = () =>
        <td className="data">
            <input autoFocus={true}
                ref={this.input_ref}
                onBlur={this.endEdit}
                onKeyDown={this.keyDown}
                type="text"
                className="cell_edit"
                defaultValue={this.state.data} />
        </td>

    render() {
        if (!this.state.edit)
            return this.staticCell();
        else
            return this.editableCell();
    }
}

export default Cell