import { ADD_NEW_CAR, CARS_LOADED_SUCCESS, REMOVE_CAR } from "../actions";

const initialState = [];

function carsReducer(state = initialState, action) {
  switch (action.type) {
    case CARS_LOADED_SUCCESS:
      return (state = action.payload);
    case ADD_NEW_CAR:
      return [...state, action.payload];
    case REMOVE_CAR:
      state = state.filter((car) => car.id !== action.payload.id);
      return state;

    default:
      return state;
  }
}

export {carsReducer};
