/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import Em from './Em'
import { equal } from 'assert'

describe('primitives / html / Em', () => {
  it('has displayName `Em`', () => {
    equal(Em.Component.displayName, 'Em')
  })

  it('is an `em` tag that gets all props', () => {
    const renderer = create(<Em.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'em')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
