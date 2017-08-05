/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import FeMergeNode from './FeMergeNode'
import { equal } from 'assert'

describe('primitives / html / FeMergeNode', () => {
  it('has displayName `FeMergeNode`', () => {
    equal(FeMergeNode.Component.displayName, 'FeMergeNode')
  })

  it('is an `feMergeNode` tag that gets all props', () => {
    const renderer = create(<FeMergeNode.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'feMergeNode')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
