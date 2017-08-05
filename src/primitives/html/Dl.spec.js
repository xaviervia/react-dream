/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import Dl from './Dl'
import { equal } from 'assert'

describe('primitives / html / Dl', () => {
  it('has displayName `Dl`', () => {
    equal(Dl.Component.displayName, 'Dl')
  })

  it('is an `dl` tag that gets all props', () => {
    const renderer = create(<Dl.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'dl')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
