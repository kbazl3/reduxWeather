import {FETCH_WEATHER} from '../actions/index';

export default function(state=[], action) {

    switch(action.type)
    {
        case FETCH_WEATHER:
            return state.concat([action.payload.data]); //state.concat returns a new array becaue we don't want to mutate state
    }



            // return [action.payload.data, ...state];  SPREAD OPERATOR

    return state
}
