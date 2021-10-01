<template>
  <section class="additem">
    <input type="text" class="additem__textentry" />
    <button type="submit" class="additem__submit">+</button>
  </section>
</template>

<script>
export default {
  name: 'TheAddItem',
}
</script>

<style>
.additem {
  padding: 1rem 1.1rem;
  grid-area: additem;
  display: flex;
  justify-content: space-between;
  background-color: #fafafa;
  border-bottom: 0.5px solid #c5d8dd;
}

.additem__textentry {
  width: 100%;
  margin-right: 1rem;
  border: 0.5px solid #c5d8dd;
  border-radius: 5px;
  padding: 0.4rem;
  font-size: 1.1rem;
  color: #28272c;
}

.additem__textentry:hover {
  outline: 0.5px solid #c6c2eb;
}

.additem__textentry:focus {
  outline: 0.5px solid #6559e8;
}

.additem__submit {
  border: 1px solid #fafafa;
  background: #f57078;
  color: #fafafa;
  border-radius: 50%;
  height: 2rem;
  width: 2.3rem;
  font-size: 1.5rem;
  cursor: pointer;
}

.additem__submit:hover {
  background: #f01423;
}
</style>
