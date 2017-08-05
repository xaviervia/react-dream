/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import Header from './Header'
import { equal } from 'assert'

describe('primitives / html / Header', () => {
  it('has displayName `Header`', () => {
    equal(Header.Component.displayName, 'Header')
  })

  it('is an `header` tag that gets all props', () => {
    const renderer = create(<Header.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'header')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
