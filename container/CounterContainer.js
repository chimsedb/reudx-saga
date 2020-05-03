import { connect } from 'react-redux'
import CounterComponent from '../components/CounterComponent';

import { incrementAction, decrementAction } from '../action/index'

const mapStateToProps = (state) => {
    return {
        time: state.counterReducers ? state.counterReducers : 0
    }
}

const mapDispathToProps = (dispath) => {
    return {
        onDecrement: (step) => {
            dispath(decrementAction(step));
        },
        onIncrement: (step) => {
            dispath(incrementAction(step));
        }
    }
}

const CounterContainer = connect(mapStateToProps, mapDispathToProps)(CounterComponent);
export default CounterContainer