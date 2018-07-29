import React, { Component } from 'react'
import {connect} from 'react-redux'
import {fetchTransaction} from '../actions/transactionAction'
import { formatBytes, getDate } from '../common/helpers'

function mapStateToProps(state) {
    return { transaction: state.transaction }
}

@connect(mapStateToProps)
export default class Transaction extends Component {
    componentWillMount() {
        this.props.dispatch(fetchTransaction(this.props.match.params.hashTransaction))
    }

    goBack = () => {
        this.props.history.goBack()
    }

    render() {
        const { size, hash, time } = this.props.transaction.transaction

        return (
            <div>
                <h1>Transaction details</h1>
                <table>
                    <tbody>
                        <tr>
                            <td>Hash</td>
                            <td>{hash}</td>
                        </tr>
                        <tr>
                            <td>Size</td>
                            <td>{formatBytes(size)}</td>
                        </tr>
                        <tr>
                            <td>Time</td>
                            <td>{getDate(time)}</td>
                        </tr>
                    </tbody>
                </table>

                <button className='btn btn-primary' onClick={this.goBack}>Back</button>
            </div>
        )
    }
}