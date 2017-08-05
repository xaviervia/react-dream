/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import Footer from './Footer'
import { equal } from 'assert'

describe('primitives / html / Footer', () => {
  it('has displayName `Footer`', () => {
    equal(Footer.Component.displayName, 'Footer')
  })

  it('is an `footer` tag that gets all props', () => {
    const renderer = create(<Footer.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'footer')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
