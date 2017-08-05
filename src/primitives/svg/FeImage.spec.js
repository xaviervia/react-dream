/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import FeImage from './FeImage'
import { equal } from 'assert'

describe('primitives / html / FeImage', () => {
  it('has displayName `FeImage`', () => {
    equal(FeImage.Component.displayName, 'FeImage')
  })

  it('is an `feImage` tag that gets all props', () => {
    const renderer = create(<FeImage.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'feImage')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
