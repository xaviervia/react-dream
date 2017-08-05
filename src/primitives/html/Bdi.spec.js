/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import Bdi from './Bdi'
import { equal } from 'assert'

describe('primitives / html / Bdi', () => {
  it('has displayName `Bdi`', () => {
    equal(Bdi.Component.displayName, 'Bdi')
  })

  it('is an `bdi` tag that gets all props', () => {
    const renderer = create(<Bdi.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'bdi')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
