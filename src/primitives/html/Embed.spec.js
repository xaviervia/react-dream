/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import Embed from './Embed'
import { equal } from 'assert'

describe('primitives / html / Embed', () => {
  it('has displayName `Embed`', () => {
    equal(Embed.Component.displayName, 'Embed')
  })

  it('is an `embed` tag that gets all props', () => {
    const renderer = create(<Embed.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'embed')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
