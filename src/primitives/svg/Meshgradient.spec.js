/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import Meshgradient from './Meshgradient'
import { equal } from 'assert'

describe('primitives / html / Meshgradient', () => {
  it('has displayName `Meshgradient`', () => {
    equal(Meshgradient.Component.displayName, 'Meshgradient')
  })

  it('is an `meshgradient` tag that gets all props', () => {
    const renderer = create(<Meshgradient.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'meshgradient')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
