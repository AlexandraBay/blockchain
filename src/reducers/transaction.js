import { FETCH_TRANSACTION, FETCH_TRANSACTION_REJECTED, FETCH_TRANSACTION_FULFILLED} from "../constants/transaction"

const initialState = {
    transaction: [],
    fetching: false,
    fetched: false,
    error: null
}

export default function reducer(state = initialState, action) {

    switch (action.type) {
        case FETCH_TRANSACTION: {
            return { ...state, fetching: true }
        }
        case FETCH_TRANSACTION_REJECTED: {
            return { ...state, fetching: false, error: action.payload }
        }
        case FETCH_TRANSACTION_FULFILLED: {
            return {
                ...state,
                fetching: false,
                fetched: true,
                transaction: action.payload
            }
        }
        default:
            return state;
    }
}