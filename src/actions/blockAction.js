import { blockexplorer } from 'blockchain.info'
import { FETCH_BLOCK_REJECTED, FETCH_BLOCK_FULFILLED } from '../constants/block'

export function fetchBlock(blockHash) {
    return (dispatch) => {
        blockexplorer.getBlock(blockHash, {})
            .then((response) => {
                dispatch({type: FETCH_BLOCK_FULFILLED, payload: response})
            })
            .catch((error) => {
                dispatch({type: FETCH_BLOCK_REJECTED, payload: error})
            })
    }
}