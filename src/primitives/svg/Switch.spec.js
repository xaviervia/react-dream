/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import Switch from './Switch'
import { equal } from 'assert'

describe('primitives / html / Switch', () => {
  it('has displayName `Switch`', () => {
    equal(Switch.Component.displayName, 'Switch')
  })

  it('is an `switch` tag that gets all props', () => {
    const renderer = create(<Switch.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'switch')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
