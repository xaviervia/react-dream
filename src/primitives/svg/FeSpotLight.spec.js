/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import FeSpotLight from './FeSpotLight'
import { equal } from 'assert'

describe('primitives / html / FeSpotLight', () => {
  it('has displayName `FeSpotLight`', () => {
    equal(FeSpotLight.Component.displayName, 'FeSpotLight')
  })

  it('is an `feSpotLight` tag that gets all props', () => {
    const renderer = create(<FeSpotLight.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'feSpotLight')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
