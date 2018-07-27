import React from 'react'
import { create } from 'react-test-renderer'
import doConcat from '../../src/internals/doConcat'
import { example, suite } from '../dsl'

export default suite(
  'doConcat',
  example(
    'forwards all props to both and renders them in a Fragment',

    () => {
      const Concatenation = doConcat(({ y }) => y)(({ x }) => x)

      return create(<Concatenation x={1} y={2} />).toJSON()
    },

    [1, 2]
  )
)
