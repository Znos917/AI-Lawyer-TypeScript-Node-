import { createRoot } from 'react-dom/client'
import React from 'react'
import ReactDOM from 'react-dom'
import 'tailwindcss/tailwind.css'
import store from './app/store'
import { Provider } from 'react-redux'
import Route from './route'

const container = document.getElementById('root') as HTMLDivElement
// const root = createRoot(container)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Route />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
