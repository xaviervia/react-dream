/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import Style from './Style'
import { equal } from 'assert'

describe('primitives / html / Style', () => {
  it('has displayName `Style`', () => {
    equal(Style.Component.displayName, 'Style')
  })

  it('is an `style` tag that gets all props', () => {
    const renderer = create(<Style.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'style')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
