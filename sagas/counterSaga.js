import { INCREMENT, DECREMENT } from '../action/actionType'

import { put, takeEvery } from 'redux-saga/effects'

export function* sayHello() {
    console.log('Hello')
}

function* increment() {
    console.log('Increment')
}

export function* watchIncrement() {
    yield takeEvery(INCREMENT, increment)
}


function* decrement() {
    console.log('Decrement')
}

export function* watchDecrement() {
    yield takeEvery(DECREMENT, decrement)
}

