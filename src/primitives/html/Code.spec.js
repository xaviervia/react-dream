/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import Code from './Code'
import { equal } from 'assert'

describe('primitives / html / Code', () => {
  it('has displayName `Code`', () => {
    equal(Code.Component.displayName, 'Code')
  })

  it('is an `code` tag that gets all props', () => {
    const renderer = create(<Code.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'code')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
