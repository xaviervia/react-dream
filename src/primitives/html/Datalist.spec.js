/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import Datalist from './Datalist'
import { equal } from 'assert'

describe('primitives / html / Datalist', () => {
  it('has displayName `Datalist`', () => {
    equal(Datalist.Component.displayName, 'Datalist')
  })

  it('is an `datalist` tag that gets all props', () => {
    const renderer = create(<Datalist.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'datalist')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
