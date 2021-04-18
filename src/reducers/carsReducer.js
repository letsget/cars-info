import { ADD_NEW_CAR, CARS_LOADED_SUCCESS, REMOVE_CAR } from "../actions";

const initialState = {
   cars: [],
};

function carsReducer(state = initialState, {type, payload}) {
  switch (type) {
    case CARS_LOADED_SUCCESS:
       return {
         ...state,
         cars: payload,
       }
    // case ADD_NEW_CAR:
    //   return [...state, payload];
    case REMOVE_CAR:
       return {
         ...state,
         cars: state.cars.filter(car => car.id !== payload.id),
       }

    default:
      return state;
  }
}

export {carsReducer};
