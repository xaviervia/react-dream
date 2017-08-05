import React from 'react'
import compose from 'recompose/compose'
import getDisplayName from 'recompose/getDisplayName'
import isReferentiallyTransparentFunctionComponent from 'recompose/isReferentiallyTransparentFunctionComponent'

// doContramap : (a -> Props) -> Component -> Component
export default propsPreprocessor => Component => {
  const Enhanced = isReferentiallyTransparentFunctionComponent(Component)
    ? compose(Component, propsPreprocessor)
    : props => <Component {...propsPreprocessor(props)} />

  Enhanced.displayName = getDisplayName(Component)

  return Enhanced
}
