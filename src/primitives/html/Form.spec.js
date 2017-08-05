/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import Form from './Form'
import { equal } from 'assert'

describe('primitives / html / Form', () => {
  it('has displayName `Form`', () => {
    equal(Form.Component.displayName, 'Form')
  })

  it('is an `form` tag that gets all props', () => {
    const renderer = create(<Form.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'form')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
