/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import Hr from './Hr'
import { equal } from 'assert'

describe('primitives / html / Hr', () => {
  it('has displayName `Hr`', () => {
    equal(Hr.Component.displayName, 'Hr')
  })

  it('is an `hr` tag that gets all props', () => {
    const renderer = create(<Hr.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'hr')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
