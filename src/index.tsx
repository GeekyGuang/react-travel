import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import 'antd/dist/antd.css'
import './i18n/configs'
import { Provider } from 'react-redux'
import axios from 'axios'
import rootStore from './redux/store'
import { PersistGate } from 'redux-persist/integration/react'
axios.defaults.baseURL =
  'https://www.fastmock.site/mock/c950a0853fadaff628acd99e4a8f2567/travel'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={rootStore.store}>
      <PersistGate loading={null} persistor={rootStore.persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
