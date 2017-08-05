/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import Audio from './Audio'
import { equal } from 'assert'

describe('primitives / html / Audio', () => {
  it('has displayName `Audio`', () => {
    equal(Audio.Component.displayName, 'Audio')
  })

  it('is an `audio` tag that gets all props', () => {
    const renderer = create(<Audio.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'audio')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
