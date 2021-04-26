export const formatNumber = (num) => num.toLocaleString("ru") + "\xa0₽";

export const formatStatus = (status) => {
  switch (status) {
    case "pednding":
      return "ожидается";
    case "out_of_stock":
      return "нет в наличии";
    case "in_stock":
      return "в наличии";
    default:
      return status;
  }
};