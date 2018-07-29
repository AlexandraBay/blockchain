import React, { Component } from 'react'

class RegistrationForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log('form is submitted')
    }

    handleEmailChange = (event) => {
        console.log('email was changed')

        this.setState({
            email:  event.target.value
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type='text'
                    placeholder='E-mail'
                    value={this.state.email}
                    onChange={this.handleEmailChange}
                />
                <button>Save</button>
            </form>
        )
    }
}

export default RegistrationForm