import React from 'react'

const withAuth = (Component) => {
  return () => {
    return <Component />
  }

}

export default withAuth
