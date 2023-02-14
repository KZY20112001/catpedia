<template>
  <div class="header">
    <h1 class="title">{{ title }}</h1>
    <router-link to="/" class="nav">
      <font-awesome-icon icon="fa-solid fa-house fa-2xl" />
      <div class="text">{{ home.text }}</div>
    </router-link>
  </div>
</template>

<script>
export default {
  setup() {
    const title = 'CATPEDIA'
    const home = { text: 'Home', url: '/' }
    return { title, home }
  },
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  background-color: white;
  align-items: center;
}

.title {
  color: lightseagreen;
  font-family: sans-serif;
  padding-left: 50px;
}

.text {
  font-size: 20px;
  font-weight: 500;
}

.nav {
  border-radius: 5px;
  background-color: lightcoral;
  padding: 10px 10px;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin: 10px 20px;
  color: whitesmoke;
  border: solid;
}
</style>
