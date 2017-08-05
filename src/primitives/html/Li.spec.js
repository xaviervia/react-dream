/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import Li from './Li'
import { equal } from 'assert'

describe('primitives / html / Li', () => {
  it('has displayName `Li`', () => {
    equal(Li.Component.displayName, 'Li')
  })

  it('is an `li` tag that gets all props', () => {
    const renderer = create(<Li.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'li')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
