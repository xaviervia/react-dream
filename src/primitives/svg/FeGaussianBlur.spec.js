/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import FeGaussianBlur from './FeGaussianBlur'
import { equal } from 'assert'

describe('primitives / html / FeGaussianBlur', () => {
  it('has displayName `FeGaussianBlur`', () => {
    equal(FeGaussianBlur.Component.displayName, 'FeGaussianBlur')
  })

  it('is an `feGaussianBlur` tag that gets all props', () => {
    const renderer = create(<FeGaussianBlur.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'feGaussianBlur')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
