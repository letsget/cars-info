import Axios from "axios";
const { REACT_APP_API_URL } = process.env;

export const CARS_LOADED_SUCCESS = "CARS_LOADED_SUCCESS";
export const ADD_NEW_CAR = "ADD_NEW_CAR";
export const REMOVE_CAR = "REMOVE_CAR";

export const carsLoaded = (data) => ({
  type: CARS_LOADED_SUCCESS,
  payload: data,
});

export const addCar = (data) => ({
  type: ADD_NEW_CAR,
  payload: { data },
});

export const removeCar = (id) => ({
  type: REMOVE_CAR,
  payload: { id },
});

export const loadCarsAsync = async (dispatch) => {
  try {
    const { data } = await Axios.get(REACT_APP_API_URL);
    dispatch(carsLoaded(data));
  } catch (e) {
    console.log(e?.message || e?.body || e?.response || e);
  }
};
