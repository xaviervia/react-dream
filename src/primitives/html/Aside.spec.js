/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import Aside from './Aside'
import { equal } from 'assert'

describe('primitives / html / Aside', () => {
  it('has displayName `Aside`', () => {
    equal(Aside.Component.displayName, 'Aside')
  })

  it('is an `aside` tag that gets all props', () => {
    const renderer = create(<Aside.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'aside')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
