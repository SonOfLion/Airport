import { SHOW_DATA_FLIGHT } from '../searchform/flightDetails.actions';

const initialState = {
    isFetching: false,
    flightData: null,
};

const flightReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_DATA_FLIGHT:
            return {
                ...state,
                isFetching: true
            }
        default:
            return state
    }
}

export default flightReducer;