/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import Dt from './Dt'
import { equal } from 'assert'

describe('primitives / html / Dt', () => {
  it('has displayName `Dt`', () => {
    equal(Dt.Component.displayName, 'Dt')
  })

  it('is an `dt` tag that gets all props', () => {
    const renderer = create(<Dt.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'dt')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
