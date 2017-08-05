/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import Fieldset from './Fieldset'
import { equal } from 'assert'

describe('primitives / html / Fieldset', () => {
  it('has displayName `Fieldset`', () => {
    equal(Fieldset.Component.displayName, 'Fieldset')
  })

  it('is an `fieldset` tag that gets all props', () => {
    const renderer = create(<Fieldset.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'fieldset')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
