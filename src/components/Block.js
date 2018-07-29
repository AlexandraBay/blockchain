import React, { Component } from 'react'
import { fetchBlock } from "../actions/blockAction"
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { formatBytes, getDate } from '../common/helpers'
import Transactions from "./Transactions"

function mapStateToProps(state) {
    return { block: state.block }
}

@connect(mapStateToProps)

export default class Block extends Component {
    componentWillMount() {
        this.props.dispatch(fetchBlock(this.props.match.params.handle))
    }

    handleClickBlock = (hash) => {
        this.props.dispatch(fetchBlock(hash))
    }

    goBack = () => {
        this.props.history.goBack()
    }

    render() {
        const { height, n_tx, size, bits, nonce, time, hash, prev_block} = this.props.block.block
        const blockSize = formatBytes(size)
        const blockTime = getDate(time)
        const tx = this.props.block.block.tx || []

        return (
            <div>
                <h1>Block #{height}</h1>
                <h2>Summary</h2>
                <table>
                    <tbody>
                        <tr>
                            <td>Number Of Transactions</td>
                            <td>{n_tx}</td>
                        </tr>
                        <tr>
                            <td>Height</td>
                            <td>{height}</td>
                        </tr>
                        <tr>
                            <td>Size</td>
                            <td>{blockSize}</td>
                        </tr>
                        <tr>
                            <td>Bits</td>
                            <td>{bits}</td>
                        </tr>
                        <tr>
                            <td>Nonce</td>
                            <td>{nonce}</td>
                        </tr>
                        <tr>
                            <td>Time</td>
                            <td>{blockTime}</td>
                        </tr>
                        <tr>
                            <td>Hash</td>
                            <td>
                                <Link to={`/block/${hash}`}>{hash}</Link>
                            </td>
                        </tr>
                        <tr>
                            <td>Previous block</td>
                            <td>
                                <Link to={`/block/${prev_block}`} onClick={() => this.handleClickBlock(prev_block)}>{prev_block}</Link>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <Transactions tx={tx} match={this.props.match}/>

                <button className='btn btn-primary' onClick={this.goBack}>Back</button>
            </div>
        )
    }
}