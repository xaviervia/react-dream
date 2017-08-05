/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import Select from './Select'
import { equal } from 'assert'

describe('primitives / html / Select', () => {
  it('has displayName `Select`', () => {
    equal(Select.Component.displayName, 'Select')
  })

  it('is an `select` tag that gets all props', () => {
    const renderer = create(<Select.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'select')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
