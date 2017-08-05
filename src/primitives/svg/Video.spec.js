/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import Video from './Video'
import { equal } from 'assert'

describe('primitives / html / Video', () => {
  it('has displayName `Video`', () => {
    equal(Video.Component.displayName, 'Video')
  })

  it('is an `video` tag that gets all props', () => {
    const renderer = create(<Video.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'video')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
