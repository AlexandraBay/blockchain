import React, { Component } from 'react'
import Pagination from './Pagination'
import {getDate} from '../common/helpers'
import { Link } from 'react-router-dom'
import {connect} from "react-redux";

function mapStateToProps(state) {
    return {
        transactions: state.transactions,
    }
}

@connect(mapStateToProps)
export default class Transactions extends Component {
    state = {
        searchTransaction: '',
        pageOfItems: []
    }

    listTransactions = () => {
        let transactions

        if(this.props.match && this.props.match.path === '/block/:handle') {
            transactions = this.state.pageOfItems
        } else {
            transactions = this.props.transactions.transactions.tx ?
                this.props.transactions.transactions.tx.slice(0, 10) : []
        }

        let reg = new RegExp(this.state.searchTransaction, 'g')

        return transactions.filter( transaction => transaction.hash.toString().search( reg ) !== -1)
    }

    searchTransaction = () => {
        this.setState({
            searchTransaction: this.refs.transactionHash.value
        })
    }

    onChangePage = (pageOfItems) => {
        this.setState({ pageOfItems: pageOfItems });
    }

    render() {
        const tx = this.listTransactions()

        return (
            <div>
                <div className='header'>
                    <h2>Transactions</h2>
                    <input type='text' ref='transactionHash' placeholder='Enter transaction hash' onChange={this.searchTransaction}/>
                </div>

                <table>
                    <tbody>
                    {tx.map((transaction, index) =>
                        <tr key={index}>
                            <td><Link to={`/transaction/${transaction.hash}`}>{transaction.hash}</Link></td>
                            <td>{getDate(transaction.time)}</td>
                        </tr>
                    )}
                    </tbody>
                </table>

                { this.props.match && this.props.match.path === '/block/:handle' && (
                    <Pagination items={this.props.tx} onChangePage={this.onChangePage} />
                )}
            </div>
        )
    }
}