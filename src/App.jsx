import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { hot } from 'react-hot-loader/root'
import { Provider } from 'mobx-react'
import store from '@store'
import { routes, RouteViews } from '@routes'
import Header from '@layouts/header'
import '@styles/index.css'

const baseName = process.env.PUBLIC_URL || '/'

class App extends Component {
  render () {
    return (
      <Provider {...store}>
        <Router basename={baseName}>
          <Fragment>
            <Header />
            <RouteViews routes={routes} />
          </Fragment>
        </Router>
      </Provider>
    )
  }
}

export default process.env.NODE_ENV === 'development' ? hot(App) : App
