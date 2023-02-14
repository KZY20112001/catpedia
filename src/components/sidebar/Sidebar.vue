<script>
import SidebarLink from './SidebarLink.vue'
import { collapsed, toggleSidebar, sidebarWidth } from './state'
export default {
  props: {},
  components: { SidebarLink },
  setup() {
    return { collapsed, toggleSidebar, sidebarWidth }
  },
}
</script>

<template>
  <div class="sidebar" :style="{ width: sidebarWidth }">
    <h1>
      <span v-if="!collapsed"> CATS </span>
      <span v-else><font-awesome-icon icon="fa-solid fa-shield-cat" /></span>
    </h1>

    <SidebarLink to="/cat" icon="fa-solid fa-cat" @click="toggleSidebar">
      Breeds</SidebarLink
    >
    <SidebarLink to="/random" icon="fa-solid fa-message" @click="toggleSidebar"
      >Cat Facts</SidebarLink
    >
    <SidebarLink to="/add" icon="fa-solid fa-plus" @click="toggleSidebar"
      >Add Cats!</SidebarLink
    >

    <span
      class="collapse-icon"
      :class="{ 'rotate-180': collapsed }"
      @click="toggleSidebar"
    >
      <font-awesome-icon icon="fa-solid fa-angle-double-left" />
    </span>
  </div>
</template>

<style>
:root {
  --sidebar-bg-color: #318058;
  --sidebar-item-hover: lightseagreen;
  --sidebar-item-active: rgb(32, 204, 204);
}
</style>

<style scoped>
.sidebar {
  color: white;
  background-color: var(--sidebar-bg-color);
  float: left;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  bottom: 0;
  padding: 0.5em;
  transition: 0.3s ease;
  display: flex;
  flex-direction: column;
}
.sidebar h1 {
  height: 2.5em;
  font-family: Poppins;
  font-weight: 700;
  color: lightgoldenrodyellow;
}
.collapse-icon {
  position: absolute;
  bottom: 0;
  padding: 0.75em;
  color: rgba(255, 255, 255, 0.7);
  transition: 0.2s linear;
}
.rotate-180 {
  transform: rotate(180deg);
  transition: 0.2s linear;
}
</style>
