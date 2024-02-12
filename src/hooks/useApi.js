import http from "../helpers/http";

export const GetUserBalance = async (idUser) => {
  const { data } = await http.get(`userBalance/${idUser}`);
  return data;
};

export const GetMonthTotals = async (idUser) => {
  const requestData = {
    month: 12,
    year: 2023,
  };

  const { data } = await http.post(`getMonthTotals/${idUser}`, requestData, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return data;
};


export const GetDaysTotals = async (idUser) => {
  const requestData = {
    month: 2,
    year: 2024,
  };

  const { data } = await http.post(`getDaysTotals/${idUser}`, requestData, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return data;
};


export const GetTransactionsOfDay = async (date, idUser) => {
  const requestData = {
    date: date
  };

  const { data } = await http.post(`getTransactionsOfDay/${idUser}`, requestData, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return data;
};