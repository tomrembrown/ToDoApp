<template>
  <li class="list__item">
    <font-awesome-icon
      v-if="item.completed"
      class="list__item__toggle list__item__toggle--completed"
      icon="check-square"
      @click="toggleCompleted"
    />
    <font-awesome-icon
      v-else
      class="list__item__toggle list__item__toggle--tocomplete"
      :icon="['far', 'square']"
      @click="toggleCompleted"
    />
    <span
      class="list__item__name"
      :class="[
        item.completed
          ? 'list__item__name--completed'
          : 'list__item__name--tocomplete',
      ]"
    >
      {{ displayName }}</span
    >
    <font-awesome-icon
      class="list__item__delete"
      icon="trash-alt"
      @click="removeItem"
    />
    <font-awesome-icon class="list__item__up" icon="arrow-up" @click="upItem" />
    <font-awesome-icon
      class="list__item__down"
      icon="arrow-down"
      @click="downItem"
    />
  </li>
</template>

<script>
export default {
  name: 'TheListItem',
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  computed: {
    displayName() {
      return ' ' + this.item.name.trim() + '  '
    },
  },
  methods: {
    toggleCompleted() {
      console.log('In toggleCompleted')
    },
    removeItem() {
      console.log('In removeItem')
    },
    upItem() {
      console.log('In upItem')
    },
    downItem() {
      console.log('In downItem')
    },
  },
}
</script>

<style>
.list__item {
  padding: 1rem 1.1rem;
  border-bottom: 0.5px solid #c5d8dd;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 0.4rem;
}

.list__item__toggle {
  margin-right: 1rem;
  cursor: pointer;
}

.list__item__toggle--completed {
  color: #f57078;
}

.list__item__toggle--tocomplete {
  color: #a6a5b2;
}

.list__item__name {
  white-space: pre;
  color: #878596;
  cursor: pointer;
}

.list__item__name--completed {
  text-decoration: line-through;
  color: #d3d3de;
}

.list__item__delete {
  margin-left: auto;
  color: #f57078;
  cursor: pointer;
}

.list__item__up {
  margin: 0 0.5rem;
  color: #878596;
  cursor: pointer;
}

.list__item__down {
  cursor: pointer;
  color: #878596;
}
</style>
