import React, { Component } from 'react'

export default class DropDown extends Component {
    constructor(props) {
        super(props)
        this.state = { isOpened: false }
    }

    toggleState = () => {
        this.setState({
            isOpened: !this.state.isOpened
        })
    }

    render() {
        console.log('isOpened: ', this.state.isOpened)
        let dropDownText
        if(this.state.isOpened) {
            dropDownText = <div>DropDown is opened</div>
        }

        return (
            <div onClick={this.toggleState}>
                DropDown baby
                {dropDownText}
            </div>
        )
    }
}