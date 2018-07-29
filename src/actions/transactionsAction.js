import { Socket } from 'blockchain.info'
import { FETCH_TRANSACTIONS_REJECTED, FETCH_TRANSACTIONS_FULFILLED } from '../constants/transactions'

export function fetchTransactions() {
    let mySocket = new Socket()

    return (dispatch) => {
        mySocket.onTransaction(qwe)
            .then((response) => {
                console.log('response', response)
                dispatch({type: FETCH_TRANSACTIONS_FULFILLED, payload: response})
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