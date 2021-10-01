<template>
  <div class="list__container">
    <ul class="list">
      <TheListItem v-for="item in items" :item="item" :key="item.id" />
    </ul>
  </div>
</template>

<script>
import TheListItem from './TheListItem.vue'

export default {
  name: 'TheList',
  components: {
    TheListItem,
  },
  data() {
    return {
      items: [
        {
          id: 1,
          order: 1,
          name: 'Clean the fridge',
          completed: true,
        },
        {
          id: 2,
          order: 2,
          name: 'Walk the dogs',
          completed: false,
        },
      ],
    }
  },
}
</script>

<style>
.list__container {
  grid-area: list;
  background-color: white;
}

.list {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
