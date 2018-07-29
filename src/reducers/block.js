import { FETCH_BLOCK, FETCH_BLOCK_REJECTED, FETCH_BLOCK_FULFILLED } from '../constants/block'

const initialState = {
    block: [],
    fetching: false,
    fetched: false,
    error: null
}

export default function reducer(state = initialState, action) {

    switch (action.type) {
        case FETCH_BLOCK: {
            return { ...state, fetching: true }
        }
        case FETCH_BLOCK_REJECTED: {
            return { ...state, fetching: false, error: action.payload }
        }
        case FETCH_BLOCK_FULFILLED: {
            return {
                ...state,
                fetching: false,
                fetched: true,
                block: action.payload
            }
        }
        default:
            return state;
    }

}