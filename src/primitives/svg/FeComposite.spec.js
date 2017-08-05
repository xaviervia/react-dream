/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import FeComposite from './FeComposite'
import { equal } from 'assert'

describe('primitives / html / FeComposite', () => {
  it('has displayName `FeComposite`', () => {
    equal(FeComposite.Component.displayName, 'FeComposite')
  })

  it('is an `feComposite` tag that gets all props', () => {
    const renderer = create(<FeComposite.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'feComposite')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
