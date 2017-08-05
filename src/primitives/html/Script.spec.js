/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import Script from './Script'
import { equal } from 'assert'

describe('primitives / html / Script', () => {
  it('has displayName `Script`', () => {
    equal(Script.Component.displayName, 'Script')
  })

  it('is an `script` tag that gets all props', () => {
    const renderer = create(<Script.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'script')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
