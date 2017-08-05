/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import FePointLight from './FePointLight'
import { equal } from 'assert'

describe('primitives / html / FePointLight', () => {
  it('has displayName `FePointLight`', () => {
    equal(FePointLight.Component.displayName, 'FePointLight')
  })

  it('is an `fePointLight` tag that gets all props', () => {
    const renderer = create(<FePointLight.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'fePointLight')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
