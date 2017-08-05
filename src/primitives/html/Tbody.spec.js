/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import Tbody from './Tbody'
import { equal } from 'assert'

describe('primitives / html / Tbody', () => {
  it('has displayName `Tbody`', () => {
    equal(Tbody.Component.displayName, 'Tbody')
  })

  it('is an `tbody` tag that gets all props', () => {
    const renderer = create(<Tbody.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'tbody')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
