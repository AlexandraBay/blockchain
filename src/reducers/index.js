import { combineReducers } from 'redux'
import blocks from './blocks'
import block from './block'
import transaction from './transaction'
import transactions from './transactions'

export default combineReducers({
    blocks,
    block,
    transaction,
    transactions
})