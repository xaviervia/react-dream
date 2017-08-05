/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import FeComponentTransfer from './FeComponentTransfer'
import { equal } from 'assert'

describe('primitives / html / FeComponentTransfer', () => {
  it('has displayName `FeComponentTransfer`', () => {
    equal(FeComponentTransfer.Component.displayName, 'FeComponentTransfer')
  })

  it('is an `feComponentTransfer` tag that gets all props', () => {
    const renderer = create(<FeComponentTransfer.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'feComponentTransfer')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
