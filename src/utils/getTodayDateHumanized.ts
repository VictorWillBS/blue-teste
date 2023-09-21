import dayjs from "dayjs"
export default function getTodayDateHumanized() {
  const weekdayPtBr = {
    1: "Segunda",
    2: "Terça",
    3: "Quarta",
    4: "Quinta",
    5: "Sexta",
    6: "Sábado",
    0: "Domingo",
  }
  const MonthPtBr = {
    0: "Janeiro",
    1: "Fevereiro",
    2: "Março",
    3: "Abril",
    4: "Maio",
    5: "Junho",
    6: "Julho",
    7: "Agosto",
    8: "Setembro",
    9: "Outubro",
    10: "Novembro",
    11: "Dezembro",
  }
  const weekday = dayjs().day()
  const month = dayjs().month()
  const monthDay = dayjs().date()
  const year = dayjs().year()
  return `${weekdayPtBr[weekday]}, ${monthDay} de ${MonthPtBr[month]} de ${year} `
}