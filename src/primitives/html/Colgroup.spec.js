/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import Colgroup from './Colgroup'
import { equal } from 'assert'

describe('primitives / html / Colgroup', () => {
  it('has displayName `Colgroup`', () => {
    equal(Colgroup.Component.displayName, 'Colgroup')
  })

  it('is an `colgroup` tag that gets all props', () => {
    const renderer = create(<Colgroup.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'colgroup')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
