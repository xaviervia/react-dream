/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import Nav from './Nav'
import { equal } from 'assert'

describe('primitives / html / Nav', () => {
  it('has displayName `Nav`', () => {
    equal(Nav.Component.displayName, 'Nav')
  })

  it('is an `nav` tag that gets all props', () => {
    const renderer = create(<Nav.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'nav')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
