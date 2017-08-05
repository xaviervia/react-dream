/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import Filter from './Filter'
import { equal } from 'assert'

describe('primitives / html / Filter', () => {
  it('has displayName `Filter`', () => {
    equal(Filter.Component.displayName, 'Filter')
  })

  it('is an `filter` tag that gets all props', () => {
    const renderer = create(<Filter.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'filter')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
