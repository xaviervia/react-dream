/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import Label from './Label'
import { equal } from 'assert'

describe('primitives / html / Label', () => {
  it('has displayName `Label`', () => {
    equal(Label.Component.displayName, 'Label')
  })

  it('is an `label` tag that gets all props', () => {
    const renderer = create(<Label.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'label')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
