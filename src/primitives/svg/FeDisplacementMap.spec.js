/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import FeDisplacementMap from './FeDisplacementMap'
import { equal } from 'assert'

describe('primitives / html / FeDisplacementMap', () => {
  it('has displayName `FeDisplacementMap`', () => {
    equal(FeDisplacementMap.Component.displayName, 'FeDisplacementMap')
  })

  it('is an `feDisplacementMap` tag that gets all props', () => {
    const renderer = create(<FeDisplacementMap.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'feDisplacementMap')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
