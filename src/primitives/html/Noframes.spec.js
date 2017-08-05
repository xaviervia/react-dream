/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import Noframes from './Noframes'
import { equal } from 'assert'

describe('primitives / html / Noframes', () => {
  it('has displayName `Noframes`', () => {
    equal(Noframes.Component.displayName, 'Noframes')
  })

  it('is an `noframes` tag that gets all props', () => {
    const renderer = create(<Noframes.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'noframes')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
