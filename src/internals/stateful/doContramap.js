import React from 'react'
import compose from 'recompose/compose'
import getDisplayName from 'recompose/getDisplayName'

// doContramap : (a -> Props) -> Component -> Component
export default propsPreprocessor => Component => {
  const Enhanced = props => <Component {...propsPreprocessor(props)} />

  Enhanced.displayName = getDisplayName(Component)

  return Enhanced
}
