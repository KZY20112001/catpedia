<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { collapsed } from './state'
export default {
  props: {
    to: { type: String, required: true },
    icon: { type: String, required: true },
  },
  setup(props) {
    const route = useRoute()
    const isActive = computed(() => route.path === props.to)

    return { isActive, collapsed }
  },
}
</script>

<template>
  <router-link :to="to" class="link" :class="{ active: isActive }">
    <font-awesome-icon :icon="icon" class="icon" />
    <transition name="fade">
      <span v-if="!collapsed">
        <slot />
      </span>
    </transition>
  </router-link>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.link {
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  font-weight: 500;
  font-size: 25px;
  user-select: none;
  margin: 0.1em 0;
  padding: 30px 10px;
  border-radius: 0.25em;
  height: 1.5em;
  color: lightcyan;
  text-decoration: none;
  font-weight: bold;
}
.link:hover {
  background-color: var(--sidebar-item-hover);
}
.link.active {
  background-color: var(--sidebar-item-active);
}
.link .icon {
  flex-shrink: 0;
  width: 25px;
  margin-right: 10px;
}
</style>
