import React, { Component } from 'react'
import { connect } from 'react-redux'
import style from './style.css'
import Graph from "./Graph";
import Blocks from "./Blocks";
import Transactions from "./Transactions";

function mapStateToProps(state) {
    return {
        transactions: state.transactions,
    }
}

@connect(mapStateToProps)
export default class Container extends Component {
    render() {
        return (
            <div>

                <Graph/>

                <Blocks/>

                <Transactions tx={this.props.transactions.transactions.hash}/>

            </div>
        )
    }
}