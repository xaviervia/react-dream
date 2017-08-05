/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import Div from './Div'
import { equal } from 'assert'

describe('primitives / html / Div', () => {
  it('has displayName `Div`', () => {
    equal(Div.Component.displayName, 'Div')
  })

  it('is an `div` tag that gets all props', () => {
    const renderer = create(<Div.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'div')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
