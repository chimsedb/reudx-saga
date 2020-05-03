import { DECREMENT, INCREMENT } from '../action/actionType'

const counterReducers = (time = 0, action) => {
    switch (action.type) {
        case INCREMENT:
            return time + action.step;
        case DECREMENT:
            return time - action.step;
        default:
            return time;
    }
}

export default counterReducers;