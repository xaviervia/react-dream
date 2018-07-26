import React from 'react'
import { deepEqual } from 'assert'
import { create } from 'react-test-renderer'
import doConcat from './doConcat'

describe('doConcat', () => {
  it('forwards all props to both and renders them in a Fragment', () => {
    const Concatenation = doConcat(({ y }) => y)(({ x }) => x)
    const renderer = create(<Concatenation x={1} y={2} />)

    deepEqual(renderer.toJSON(), [1, 2])
  })
})
