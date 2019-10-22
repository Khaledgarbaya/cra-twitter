import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { AuthProvide, AuthContext } from '../one-graph/auth-provider'
import Login from '../components/login'
import Header from './header'
const Layout = ({ children }) => {
  const data = {
    site: {
      siteMetadata: {
        title: 'CRA-Twitter'
      }
    }
  }

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0
        }}
      >
        <main
          style={{
            minHeight: '100vh'
          }}
        >
          <AuthProvide>
            <Container>{children}</Container>
          </AuthProvide>
        </main>
        <footer>
          © {new Date().getFullYear()}{' '}
          <a href="https://www.k4d.dev">Khaled Garbaya</a>
        </footer>
      </div>
    </>
  )
}
const Container = ({ children }) => {
  const { authenticated } = useContext(AuthContext)
  return !authenticated ? <Login /> : children
}
Container.propTypes = {
  children: PropTypes.node.isRequired
}
Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
