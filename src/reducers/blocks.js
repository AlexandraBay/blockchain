import { FETCH_BLOCKS, FETCH_BLOCKS_REJECTED, FETCH_BLOCKS_FULFILLED } from '../constants/blocks'

const initialState = {
    blocks: [],
    fetching: false,
    fetched: false,
    error: null
}

export default function reducer(state = initialState, action) {

    switch (action.type) {
        case FETCH_BLOCKS: {
            return { ...state, fetching: true }
        }
        case FETCH_BLOCKS_REJECTED: {
            return { ...state, fetching: false, error: action.payload }
        }
        case FETCH_BLOCKS_FULFILLED: {
            return {
                ...state,
                fetching: false,
                fetched: true,
                blocks: action.payload
            }
        }
        default:
            return state;
    }

}