/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import FeMorphology from './FeMorphology'
import { equal } from 'assert'

describe('primitives / html / FeMorphology', () => {
  it('has displayName `FeMorphology`', () => {
    equal(FeMorphology.Component.displayName, 'FeMorphology')
  })

  it('is an `feMorphology` tag that gets all props', () => {
    const renderer = create(<FeMorphology.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'feMorphology')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
