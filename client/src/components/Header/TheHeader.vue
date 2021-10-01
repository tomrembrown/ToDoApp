<template>
  <header class="site-header">
    <TheHeaderDate />
    <TheHeaderButtons />
  </header>
</template>

<script>
import TheHeaderDate from './TheHeaderDate.vue'
import TheHeaderButtons from './TheHeaderButtons.vue'

export default {
  name: 'TheHeader',
  components: {
    TheHeaderDate,
    TheHeaderButtons,
  },
}
</script>

<style>
.site-header {
  padding: 1.5rem 1.1rem 0.5rem;
  grid-area: header;
  display: flex;
  justify-content: space-between;
  background-color: #fafafa;
  border-bottom: 0.5px solid #c5d8dd;
}
</style>
