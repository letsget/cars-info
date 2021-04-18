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
    // case REMOVE_CAR:
    //   state = state.filter((car) => car.id !== payload.id);
    //   return state;

    default:
      return state;
  }
}

export {carsReducer};
