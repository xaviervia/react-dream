import React from 'react'
import getDisplayName from 'recompose/getDisplayName'
import setDisplayName from 'recompose/setDisplayName'

// doLog : String -> Component -> IO Component
export default text => Component =>
  setDisplayName(getDisplayName(Component))(props => {
    console.log(text, getDisplayName(Component), props)

    return <Component {...props} />
  })
