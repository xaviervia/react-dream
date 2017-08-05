/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import Iframe from './Iframe'
import { equal } from 'assert'

describe('primitives / html / Iframe', () => {
  it('has displayName `Iframe`', () => {
    equal(Iframe.Component.displayName, 'Iframe')
  })

  it('is an `iframe` tag that gets all props', () => {
    const renderer = create(<Iframe.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'iframe')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
