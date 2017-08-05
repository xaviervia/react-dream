/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import Textarea from './Textarea'
import { equal } from 'assert'

describe('primitives / html / Textarea', () => {
  it('has displayName `Textarea`', () => {
    equal(Textarea.Component.displayName, 'Textarea')
  })

  it('is an `textarea` tag that gets all props', () => {
    const renderer = create(<Textarea.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'textarea')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
