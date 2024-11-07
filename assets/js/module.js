/**
 * @license MIT
 * @fileoverview All module functions
 * @copyright codewithsadee 2023 All rights reserved
 * @author codewithsadee <mohammadsadee24@gmail.com>
 */

export const weekDayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Abr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Set",
  "Oct",
  "Nov",
  "Dez",
];

export const getDate = function (dateUnix, timezone) {
  const date = new Date((dateUnix + timezone) * 1000);
  const weekDayName = weekDayNames[date.getUTCDay()];
  const monthName = monthNames[date.getUTCMonth];

  return `${weekDayName} ${date.getUTCDate()}, ${monthName}`;
};

export const getTime = function (timeUnix, timezone) {
  const date = new Date((timeUnix + timezone) * 1000);
  const hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();
  const period = hours >= 12 ? "PM" : "AM";

  return `${hours % 12 || 12}:${minutes} ${period}`;
};

export const getHours = function (timeUnix, timezone) {
  const date = new Date((timeUnix + timezone) * 1000);
  const hours = date.getUTCHours();
  const period = hours >= 12 ? "PM" : "AM";

  return `${hours % 12 || 12} ${period}`;
};

export const mps_to_kmh = (mps) => {
  const mph = mps * 3600;
  return mph / 1000;
};

export const aqiText = {
  1: {
    level: "Bom",
    message:
      "A qualidade do ar é considerada satisfatória e a poluição do ar representa pouco ou nenhum risco.",
  },
  2: {
    level: "Justo",
    message:
      "A qualidade do ar é aceitável; no entanto, para alguns poluentes, pode haver uma preocupação moderada com a saúde de um número muito pequeno de pessoas que são excepcionalmente sensíveis à poluição do ar",
  },
  3: {
    level: "Moderado",
    message:
      "Membros de grupos sensíveis podem experimentar efeitos na saúde. O público em geral provavelmente não será afetado",
  },
  4: {
    level: "Ruim",
    message:
      "Todos podem começar a sentir efeitos na saúde; Membros de grupos sensíveis podem experimentar efeitos mais graves à saúde",
  },
  5: {
    level: "Muito ruim",
    message:
      "Advertências de saúde de condições de emergência. Toda a população é mais propensa a ser afetada",
  },
};
