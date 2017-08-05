/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import Img from './Img'
import { equal } from 'assert'

describe('primitives / html / Img', () => {
  it('has displayName `Img`', () => {
    equal(Img.Component.displayName, 'Img')
  })

  it('is an `img` tag that gets all props', () => {
    const renderer = create(<Img.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'img')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
