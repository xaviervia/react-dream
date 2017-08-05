/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import FeFuncR from './FeFuncR'
import { equal } from 'assert'

describe('primitives / html / FeFuncR', () => {
  it('has displayName `FeFuncR`', () => {
    equal(FeFuncR.Component.displayName, 'FeFuncR')
  })

  it('is an `feFuncR` tag that gets all props', () => {
    const renderer = create(<FeFuncR.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'feFuncR')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
