<template>
  <div class="container">
    <Header />
    <Sidebar />
    <div>
      <router-view />
    </div>
  </div>
</template>

<script>
import Header from './components/header/Header.vue'
import Sidebar from './components/sidebar/Sidebar.vue'
export default {
  components: {
    Header,
    Sidebar,
  },
}
</script>

<style lang="scss" scoped>
.container {
}
</style>
