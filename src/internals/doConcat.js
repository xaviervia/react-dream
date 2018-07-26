import React, { Fragment } from 'react'
import getDisplayName from 'recompose/getDisplayName'
import setDisplayName from 'recompose/setDisplayName'

// doConcat : Component -> Component -> Component
export default ComponentA => ComponentB =>
  setDisplayName(
    getDisplayName(ComponentB).concat(getDisplayName(ComponentA))
  )(props => <Fragment>
    <ComponentB {...props} />
    <ComponentA {...props} />
  </Fragment>)
