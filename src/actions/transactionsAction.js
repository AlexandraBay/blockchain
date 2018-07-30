import { blockexplorer } from 'blockchain.info'
import { FETCH_TRANSACTIONS_REJECTED, FETCH_TRANSACTIONS_FULFILLED } from '../constants/transactions'

export function fetchTransactions() {
    return (dispatch) => {
        blockexplorer.getLatestBlock({})
            .then((response) => {
                blockexplorer.getBlock(response.hash, {})
                    .then((response) => {
                        dispatch({type: FETCH_TRANSACTIONS_FULFILLED, payload: response})
                    })
            })
            .catch((error) => {
                dispatch({type: FETCH_TRANSACTIONS_REJECTED, payload: error})
            })
    }
}

export function timeoutFetchTransactions (time) {
    return (dispatch) => {
        dispatch(fetchTransactions());
        setTimeout(() => {
            dispatch(timeoutFetchTransactions(time))
        }, time);
    }
}