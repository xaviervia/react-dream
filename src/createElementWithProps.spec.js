import React from 'react'
import createElementWithProps from './createElementWithProps'
import { create } from 'react-test-renderer'
import { equal } from 'assert'

describe('createElementWithProps', () => {
  it('creates the React element with the given props', () => {
    const Component = props => <div {...props} />

    const renderer = create(createElementWithProps({ background: 'red' })(Component))

    equal(renderer.toJSON().type, 'div')
    equal(renderer.toJSON().props.background, 'red')
  })
})
