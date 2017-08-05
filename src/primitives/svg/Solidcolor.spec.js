/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import Solidcolor from './Solidcolor'
import { equal } from 'assert'

describe('primitives / html / Solidcolor', () => {
  it('has displayName `Solidcolor`', () => {
    equal(Solidcolor.Component.displayName, 'Solidcolor')
  })

  it('is an `solidcolor` tag that gets all props', () => {
    const renderer = create(<Solidcolor.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'solidcolor')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
