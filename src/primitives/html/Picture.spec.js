/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import Picture from './Picture'
import { equal } from 'assert'

describe('primitives / html / Picture', () => {
  it('has displayName `Picture`', () => {
    equal(Picture.Component.displayName, 'Picture')
  })

  it('is an `picture` tag that gets all props', () => {
    const renderer = create(<Picture.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'picture')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
