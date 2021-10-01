<template>
  <div class="app__container">
    <TheHeader />
    <TheAddItem />
    <TheList />
  </div>
</template>

<script>
import TheHeader from '@/components/Header/TheHeader'
import TheAddItem from '@/components/AddItem/TheAddItem'
import TheList from '@/components/List/TheList'

export default {
  name: 'App',
  components: {
    TheHeader,
    TheAddItem,
    TheList,
  },
}
</script>

<style>
:root {
  font-size: 16px;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Raleway', sans-serif;
  background-image: linear-gradient(
    30deg,
    #f57078,
    #f57078 50%,
    #6559e8 50%,
    #6559e8
  );
  height: 100vw;
  background-color: #6559e8;
}

.app__container {
  width: 100vw;
  height: 100vh;
  max-width: 360px;
  max-height: 640px;
  overflow: auto;

  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;

  border: 1px black;
  border-radius: 8px;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 6.2rem 4rem auto;
  grid-template-areas:
    'header'
    'additem'
    'list';
}
</style>
