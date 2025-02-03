import '../css/app.css';

import {createRoot} from 'react-dom/client'
import {createInertiaApp} from '@inertiajs/react'

createInertiaApp({
  resolve: name => {
    const pages = import.meta.glob('../../../resources/Pages/**/*.jsx', {eager: true})
    return pages[`../../../resources/Pages/${name}.jsx`]
  },
  setup({el, App, props}) {
    createRoot(el).render(<App {...props} />)
  },
})