import {createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import root from './index'

/*eslint-disable import/no-mutable-exports*/
let store = ''

if(process.env.NODE_ENV == 'local'){
    const logger = createLogger({
        collapsed: true,
        diff: true
    })
    store = createStore(root, applyMiddleware(thunk, logger))
} else {
    store = createStore = (root, applyMiddleware(thunk))
}

export default store