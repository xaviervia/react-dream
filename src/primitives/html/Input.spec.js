/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import Input from './Input'
import { equal } from 'assert'

describe('primitives / html / Input', () => {
  it('has displayName `Input`', () => {
    equal(Input.Component.displayName, 'Input')
  })

  it('is an `input` tag that gets all props', () => {
    const renderer = create(<Input.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'input')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
