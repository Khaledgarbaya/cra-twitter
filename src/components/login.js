import React, { useContext } from 'react'
import { AuthContext } from '../one-graph/auth-provider'
const Login = () => {
  const { login, logout, authenticated } = useContext(AuthContext)
  return (
    <>
      <button
        className="font-sans rounded-lg px-4 md:px-5 xl:px-4 py-3 md:py-4 xl:py-3 bg-teal-500 hover:bg-teal-600 md:text-lg xl:text-base text-white font-semibold leading-tight shadow-md"
        onClick={async () => {
          await login()
        }}
      >
        Login to Twitter
      </button>{' '}
      <button
        className="font-sans rounded-lg px-4 md:px-5 xl:px-4 py-3 md:py-4 xl:py-3 bg-teal-500 hover:bg-teal-600 md:text-lg xl:text-base text-white font-semibold leading-tight shadow-md"
        onClick={async () => {
          await logout()
        }}
      >
        logout from Twitter
      </button>
      <h1>authenticated: {`${authenticated}`}</h1>
    </>
  )
}

export default Login
