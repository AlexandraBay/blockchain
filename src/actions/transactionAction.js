import { FETCH_TRANSACTION_FULFILLED, FETCH_TRANSACTION_REJECTED } from "../constants/transaction"
import { blockexplorer } from 'blockchain.info'

export function fetchTransaction(hash) {
    return (dispatch) => {
        blockexplorer.getTx(hash, {})
            .then((response) => {
                dispatch({type: FETCH_TRANSACTION_FULFILLED, payload: response})
            })
            .catch((error) => {
                dispatch({type: FETCH_TRANSACTION_REJECTED, payload: error})
            })
    }
}