<template lang="">
  <div class=" w-full h-20 mb-3 flex justify-between items-center py-4 px-8">
    <div class="font-bold text-white text-sm">
      {{date}}
    </div>

    <div class="">
      <img src="../../assets/images/happy_woman.jpg" alt="" class="object-cover  rounded-full h-11 w-11 border-white border-2 border-solid">
    </div>
  </div>
</template>
<script>
import dayjs from "dayjs"
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
const date = `${weekdayPtBr[weekday]}, ${monthDay} de ${MonthPtBr[month]} de ${year} `
export default {

  data() {
    return { date }
  }
}
</script>
<style lang="">
  
</style>