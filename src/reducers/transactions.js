import { FETCH_TRANSACTIONS, FETCH_TRANSACTIONS_REJECTED, FETCH_TRANSACTIONS_FULFILLED } from '../constants/transactions'

const initialState = {
    transactions: [],
    fetching: false,
    fetched: false,
    error: null
}

export default function reducer(state = initialState, action) {

    switch (action.type) {
        case FETCH_TRANSACTIONS: {
            return { ...state, fetching: true }
        }
        case FETCH_TRANSACTIONS_REJECTED: {
            return { ...state, fetching: false, error: action.payload }
        }
        case FETCH_TRANSACTIONS_FULFILLED: {
            return {
                ...state,
                fetching: false,
                fetched: true,
                transactions: action.payload
            }
        }
        default:
            return state;
    }

}