import { FETCH_WEATHER } from '../actions/index';


export default function(state = [], action) {
    switch(action.type) {
    case FETCH_WEATHER:
        
        // return state.push(action.payload.data); do not do this. This is manimulating a state.

        //instead return a completely new instance of state. Return a new array entirely that includes all of the old weather data and the new piece o weather data.

        // return state.concat([action.payload.data]); ES6 alternative.

        //They say to make a new array, put action data inside of it and then take this other variable which because of these three dots says oh yeah this might be an array. So take all of the entries outside inside of it and insert it into this new outside arrays so kind of like flatten it out for a little bit.

        return [ action.payload.data, ...state ];
    }
    return state;
}