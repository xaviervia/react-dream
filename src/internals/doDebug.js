import React from 'react'
import getDisplayName from 'recompose/getDisplayName'
import setDisplayName from 'recompose/setDisplayName'

// doDebug : Component -> IO Component
export default Component =>
  setDisplayName(getDisplayName(Component))(props => {
    debugger // eslint-disable-line no-debugger

    return <Component {...props} />
  })
