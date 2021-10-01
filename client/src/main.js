import { library } from '@fortawesome/fontawesome-svg-core'
import { faSquare } from '@fortawesome/free-regular-svg-icons'
import {
  faArrowDown,
  faArrowUp,
  faCheckSquare,
  faTrashAlt,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { createApp } from 'vue'
import App from './App.vue'

library.add(faTrashAlt, faArrowUp, faArrowDown, faCheckSquare, faSquare)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
