/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import Font from './Font'
import { equal } from 'assert'

describe('primitives / html / Font', () => {
  it('has displayName `Font`', () => {
    equal(Font.Component.displayName, 'Font')
  })

  it('is an `font` tag that gets all props', () => {
    const renderer = create(<Font.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'font')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
