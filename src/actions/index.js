import Axios from "axios";
const { REACT_APP_API_URL } = process.env;

// actions
export const CARS_LOADED_SUCCESS = "CARS_LOADED_SUCCESS";
export const ADD_NEW_CAR = "ADD_NEW_CAR";
export const REMOVE_CAR = "REMOVE_CAR";

// action creators


export const carsLoaded = (data) => ({
  type: CARS_LOADED_SUCCESS,
  payload: data,
})


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


export const loadCarsAsync = async (dispatch) => {
  try {
     const { data } = await Axios.get(REACT_APP_API_URL)
     console.log('cars', data);
     dispatch(carsLoaded(data));
  } catch(e) {
    console.log('словили ошибку');
    console.log(e?.message || e?.body || e?.response || e)
  }
}