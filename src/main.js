import router from './routes/routes'
import { createApp } from 'vue'
import App from './App.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faAngleDoubleLeft,
  faHouse,
  faCat,
  faMessage,
  faList,
  faPlus,
  faShieldCat,
} from '@fortawesome/free-solid-svg-icons'
library.add(
  faPlus,
  faList,
  faMessage,
  faHouse,
  faAngleDoubleLeft,
  faCat,
  faShieldCat
)

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router).mount('#app')
