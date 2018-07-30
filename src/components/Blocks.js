import React, { Component } from 'react'
import ListBlocks from './ListBlocks'
import {connect} from 'react-redux'
import Pagination from './Pagination'

function mapStateToProps(state) {
    return {
        blocks: state.blocks,
    }
}

@connect(mapStateToProps)

export default class Blocks extends Component {
    state = {
        searchBlock: '',
        pageOfItems: []
    }

    listBlocks = () => {
        let blocks

        if(this.props.match && this.props.match.path === '/blocks') {
            blocks = this.state.pageOfItems
        } else {
            blocks = this.props.blocks.blocks.slice(0, 10)
        }

        const reg = new RegExp(this.state.searchBlock, 'g')

        return blocks.filter( block => block.height.toString().search( reg ) !== -1)
    }

    searchBlock = () => {
        this.setState({
            searchBlock: this.refs.blockHeight.value
        })
    }

    onChangePage = (pageOfItems) => {
        this.setState({ pageOfItems: pageOfItems });
    }

    render() {
        return (
            <div>
                <div className='header'>
                    <h2>Blocks</h2>
                    <input type='text' ref='blockHeight' placeholder='Enter block height' onChange={this.searchBlock}/>
                </div>
                <table>
                    <thead>
                    <tr>
                        <td width="60%">Hash</td>
                        <td>Height</td>
                        <td>Age</td>
                    </tr>
                    </thead>

                    <ListBlocks blocks={this.listBlocks()}/>
                </table>

                { this.props.match && this.props.match.path === '/blocks' && (
                    <Pagination items={this.props.blocks.blocks} onChangePage={this.onChangePage} />
                ) }
            </div>
        )
    }
}