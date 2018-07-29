import { blockexplorer } from 'blockchain.info'
import { FETCH_BLOCKS_REJECTED, FETCH_BLOCKS_FULFILLED } from '../constants/blocks'

export function fetchBlocks() {
    return (dispatch) => {
        blockexplorer.getBlocks(Date.now(), {})
            .then((response) => {
                dispatch({type: FETCH_BLOCKS_FULFILLED, payload: response.blocks})
            })
            .catch((error) => {
                dispatch({type: FETCH_BLOCKS_REJECTED, payload: error})
            })
    }
}

export function timeoutFetchBlocks (time) {
    return (dispatch) => {
        dispatch(fetchBlocks());
        setTimeout(() => {
            dispatch(timeoutFetchBlocks(time))
        }, time);
    }
}