/** @type {import('tailwindcss').Config} */
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch, faSun, faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faSearch, faSun, faBars)
export default {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
  theme: {
    extend: {
      fontFamily: {
        battambang: ['Battambang', 'sans-serif'], // Add the Battambang font
      },
    },
  },
  components: {
    FontAwesomeIcon,
  },
  plugins: ['~/plugins/fontawesome.js'],
  head: {
    link: [
      {
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
        integrity: 'sha512-papvLC/A6M7g0VZbbXJm5w+Y0g1rK0O6AKbVQK2iO5iuw5B9bxdQENu4FrVUqkP0B9aRhcLqvZ5z+ctH+CJUig==',
        crossorigin: 'anonymous',
        referrerpolicy: 'no-referrer'
      }
    ]
  }
}

