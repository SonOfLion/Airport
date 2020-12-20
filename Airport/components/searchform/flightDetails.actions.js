import { fetchFlight } from '../../src/gatewayFlights';

export const SHOW_DATA_FLIGHT = 'FLIGHTS/SHOW_DATA_FLIGHT'

export const showDataFlight = (flightData) => {
    return {
        type: SHOW_DATA_FLIGHT,
        payload:{
            flightData
        }
    }
}

export const fetchFlightData = (flight)=>{
    return function(dispatch){
        fetchFlight(flight)
        .then(flightData=>{
            dispatch(showDataFlight(flightData))
        })
    }
}