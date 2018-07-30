import React, { Component } from 'react'
import style from './style.css'
import Graph from "./Graph";
import Blocks from "./Blocks";
import Transactions from "./Transactions";

export default class Container extends Component {
    render() {
        return (
            <div>

                <Graph/>

                <Blocks/>

                <Transactions />

            </div>
        )
    }
}