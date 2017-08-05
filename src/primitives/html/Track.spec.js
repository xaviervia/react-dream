/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import Track from './Track'
import { equal } from 'assert'

describe('primitives / html / Track', () => {
  it('has displayName `Track`', () => {
    equal(Track.Component.displayName, 'Track')
  })

  it('is an `track` tag that gets all props', () => {
    const renderer = create(<Track.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'track')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
