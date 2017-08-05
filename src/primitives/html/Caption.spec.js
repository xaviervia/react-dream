/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import Caption from './Caption'
import { equal } from 'assert'

describe('primitives / html / Caption', () => {
  it('has displayName `Caption`', () => {
    equal(Caption.Component.displayName, 'Caption')
  })

  it('is an `caption` tag that gets all props', () => {
    const renderer = create(<Caption.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'caption')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
