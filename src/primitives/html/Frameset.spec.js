/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import Frameset from './Frameset'
import { equal } from 'assert'

describe('primitives / html / Frameset', () => {
  it('has displayName `Frameset`', () => {
    equal(Frameset.Component.displayName, 'Frameset')
  })

  it('is an `frameset` tag that gets all props', () => {
    const renderer = create(<Frameset.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'frameset')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
