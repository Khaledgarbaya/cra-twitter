import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'
import './styles/tailwind.css'
import { ApolloProvider } from 'react-apollo'
import ApolloClient from 'apollo-boost'
import getAuth from './util/auth'

const appId = process.env.REACT_APP_OG_APP_ID
const client = new ApolloClient({
  uri: `https://serve.onegraph.com/dynamic?app_id=${appId}`,
  request: operation =>
    operation.setContext({ headers: getAuth().authHeaders() })
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
