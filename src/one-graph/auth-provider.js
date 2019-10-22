import React from 'react'
import { useOneGraphAuth } from '../one-graph/use-one-graph-auth'

const AuthContext = React.createContext()

const AuthProvide = ({ children }) => {
  const auth = useOneGraphAuth('twitter', process.env.REACT_APP_OG_APP_ID)

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}

export { AuthContext, AuthProvide }
