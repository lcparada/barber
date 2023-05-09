import moment from "moment";

export const Months = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

export function getDayOfWeek(): string[] {
  return ["DOM", "SEG", "TER", "QUA", "QUI", "SEX", "SAB"];
}

export function calculateDaysInMonth(month: number): number[] {
  let days = [];
  let daysInMonth = moment(`2023-${month + 2}`).daysInMonth();
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }
  return days;
}

export function getBarbersHours(): string[] {
  const timesBarbers: string[] = [];

  for (let i = 0; i < 11; i++) {
    const time = moment()
      .set("hour", 8)
      .set("minute", 0)
      .add(i, "hours")
      .add(30, "minutes")
      .format("HH:mm");
    timesBarbers.push(time);
  }

  return timesBarbers;
}

export function addZeroToNumbersLessThanTen(number: number): string {
  return number < 10 ? `0${number}` : `${number}`;
}
