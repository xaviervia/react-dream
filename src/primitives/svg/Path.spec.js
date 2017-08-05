/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import Path from './Path'
import { equal } from 'assert'

describe('primitives / html / Path', () => {
  it('has displayName `Path`', () => {
    equal(Path.Component.displayName, 'Path')
  })

  it('is an `path` tag that gets all props', () => {
    const renderer = create(<Path.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'path')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
