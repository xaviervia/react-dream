/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import Head from './Head'
import { equal } from 'assert'

describe('primitives / html / Head', () => {
  it('has displayName `Head`', () => {
    equal(Head.Component.displayName, 'Head')
  })

  it('is an `head` tag that gets all props', () => {
    const renderer = create(<Head.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'head')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
