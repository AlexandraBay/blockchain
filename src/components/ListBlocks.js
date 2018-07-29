import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { getTime } from "../common/helpers";

export default class ListBlocks extends Component {
    static propTypes = {
        blocks: PropTypes.arrayOf(
            PropTypes.shape({
                height: PropTypes.number.isRequired,
                hash: PropTypes.string.isRequired,
                time: PropTypes.number.isRequired
            })
        ),
    }

    render() {
        return (
            <tbody>
                {this.props.blocks.map((block, index) =>
                    <tr key={index}>
                        <td>
                            <Link to={`/block/${block.hash}`}>{block.hash}</Link>
                        </td>
                        <td>{block.height}</td>
                        <td>{getTime(block.time)}</td>
                    </tr>
                )}
            </tbody>
        )
    }
}