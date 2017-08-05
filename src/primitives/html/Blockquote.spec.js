/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import Blockquote from './Blockquote'
import { equal } from 'assert'

describe('primitives / html / Blockquote', () => {
  it('has displayName `Blockquote`', () => {
    equal(Blockquote.Component.displayName, 'Blockquote')
  })

  it('is an `blockquote` tag that gets all props', () => {
    const renderer = create(<Blockquote.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'blockquote')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
