/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import Button from './Button'
import { equal } from 'assert'

describe('primitives / html / Button', () => {
  it('has displayName `Button`', () => {
    equal(Button.Component.displayName, 'Button')
  })

  it('is an `button` tag that gets all props', () => {
    const renderer = create(<Button.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'button')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
