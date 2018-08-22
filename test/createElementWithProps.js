import React from 'react'
import { create } from 'react-test-renderer'
import { pick } from 'ramda'
import createElementWithProps from '../src/createElementWithProps'
import { suite, example } from 'washington'


export default suite(
  'createElementWithProps',

  example(
    'creates the React element with the given props',

    () => {
      const Component = props => <div {...props} />

      const renderer = create(createElementWithProps({ background: 'red' })(Component))

      return renderer.toJSON()
    },

    {
      type: 'div',
      props: {
        background: 'red'
      },
      children: null
    }
  )
)
