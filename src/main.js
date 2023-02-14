import router from './routes/routes'
import { createApp } from 'vue'
import App from './App.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import VueSweetAlert2 from 'vue-sweetalert2'
import {
  faAngleDoubleLeft,
  faHouse,
  faCat,
  faMessage,
  faList,
  faPlus,
  faShieldCat,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons'

library.add(
  faPlus,
  faList,
  faMessage,
  faHouse,
  faAngleDoubleLeft,
  faCat,
  faShieldCat,
  faMagnifyingGlass
)

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router).use(VueSweetAlert2).mount('#app')
