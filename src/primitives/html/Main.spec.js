/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import Main from './Main'
import { equal } from 'assert'

describe('primitives / html / Main', () => {
  it('has displayName `Main`', () => {
    equal(Main.Component.displayName, 'Main')
  })

  it('is an `main` tag that gets all props', () => {
    const renderer = create(<Main.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'main')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
