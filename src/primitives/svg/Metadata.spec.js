/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import Metadata from './Metadata'
import { equal } from 'assert'

describe('primitives / html / Metadata', () => {
  it('has displayName `Metadata`', () => {
    equal(Metadata.Component.displayName, 'Metadata')
  })

  it('is an `metadata` tag that gets all props', () => {
    const renderer = create(<Metadata.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'metadata')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
