import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Menu extends Component {
    render() {
        return (
            <div className='menu'>
                <NavLink exact to='/'>Main page</NavLink>
                <NavLink to='/blocks'>Blocks</NavLink>
            </div>
        )
    }
}