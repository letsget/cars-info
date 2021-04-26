import { formatNumber } from "../utils";

export const required = (value) => {
  return value ? undefined : "Поле не может быть пустым";
};

export const yearFormatter = (value) => value && value.replace(/[^0-9]+/g, "");

export const priceFormatter = (value) => formatNumber(value);
