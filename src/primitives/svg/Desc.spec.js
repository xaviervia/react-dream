/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import Desc from './Desc'
import { equal } from 'assert'

describe('primitives / html / Desc', () => {
  it('has displayName `Desc`', () => {
    equal(Desc.Component.displayName, 'Desc')
  })

  it('is an `desc` tag that gets all props', () => {
    const renderer = create(<Desc.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'desc')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
