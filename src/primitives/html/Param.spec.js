/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import Param from './Param'
import { equal } from 'assert'

describe('primitives / html / Param', () => {
  it('has displayName `Param`', () => {
    equal(Param.Component.displayName, 'Param')
  })

  it('is an `param` tag that gets all props', () => {
    const renderer = create(<Param.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'param')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
