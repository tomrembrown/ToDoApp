<template>
  <section class="site-header__date">
    <h1 class="site-header__date__day">
      <span class="site-header__date__dayofweek">{{ dayofweek }}, </span>
      <span class="site-header__date__dayofmonth">{{ dayofmonth }}</span>
    </h1>
    <p class="site-header__date__month">{{ month }}</p>
  </section>
</template>

<script>
import dateFormat from 'dateformat'

export default {
  name: 'TheDate',
  data() {
    return {
      dayofweek: '',
      dayofmonth: '',
      month: '',
    }
  },
  mounted() {
    const currentDate = new Date()
    this.dayofweek = dateFormat(currentDate, 'dddd')
    this.dayofmonth = dateFormat(currentDate, 'dS')
    this.month = dateFormat(currentDate, 'mmmm')
  },
}
</script>

<style>
.site-header__date {
  color: #6559e8;
}
.site-header__date__dayofweek {
  font-weight: 700;
}
.site-header__date__dayofmonth {
  font-weight: 400;
}
.site-header__date__month {
  padding-top: 0.6rem;
  padding-left: 0.2rem;
  color: #a2a0ac;
  font-size: 0.95rem;
  font-weight: 400;
}
</style>
