/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import Ins from './Ins'
import { equal } from 'assert'

describe('primitives / html / Ins', () => {
  it('has displayName `Ins`', () => {
    equal(Ins.Component.displayName, 'Ins')
  })

  it('is an `ins` tag that gets all props', () => {
    const renderer = create(<Ins.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'ins')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
