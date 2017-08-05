/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import Dd from './Dd'
import { equal } from 'assert'

describe('primitives / html / Dd', () => {
  it('has displayName `Dd`', () => {
    equal(Dd.Component.displayName, 'Dd')
  })

  it('is an `dd` tag that gets all props', () => {
    const renderer = create(<Dd.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'dd')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
