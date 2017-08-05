/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import FeDistantLight from './FeDistantLight'
import { equal } from 'assert'

describe('primitives / html / FeDistantLight', () => {
  it('has displayName `FeDistantLight`', () => {
    equal(FeDistantLight.Component.displayName, 'FeDistantLight')
  })

  it('is an `feDistantLight` tag that gets all props', () => {
    const renderer = create(<FeDistantLight.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'feDistantLight')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
