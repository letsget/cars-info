// actions
export const CARS_LOADED_SUCCESS = "CARS_LOADED_SUCCESS";
export const ADD_NEW_CAR = "ADD_NEW_CAR";
export const REMOVE_CAR = "REMOVE_CAR";

// action creators
export const carsLoaded = (data) => {
  return {
    type: CARS_LOADED_SUCCESS,
    payload: data,
  };
};

export const addCar = (id, title, description, year, color, status, price) => {
  return {
    type: ADD_NEW_CAR,
    payload: {
      id,
      title,
      description,
      year,
      color,
      status,
      price,
    },
  };
};

export const removeCar = (id) => {
  return {
    type: REMOVE_CAR,
    payload: { id },
  };
};
