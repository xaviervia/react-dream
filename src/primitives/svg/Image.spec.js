/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import Image from './Image'
import { equal } from 'assert'

describe('primitives / html / Image', () => {
  it('has displayName `Image`', () => {
    equal(Image.Component.displayName, 'Image')
  })

  it('is an `image` tag that gets all props', () => {
    const renderer = create(<Image.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'image')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
