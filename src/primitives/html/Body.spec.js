/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import Body from './Body'
import { equal } from 'assert'

describe('primitives / html / Body', () => {
  it('has displayName `Body`', () => {
    equal(Body.Component.displayName, 'Body')
  })

  it('is an `body` tag that gets all props', () => {
    const renderer = create(<Body.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'body')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
