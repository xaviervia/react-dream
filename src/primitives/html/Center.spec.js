/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import Center from './Center'
import { equal } from 'assert'

describe('primitives / html / Center', () => {
  it('has displayName `Center`', () => {
    equal(Center.Component.displayName, 'Center')
  })

  it('is an `center` tag that gets all props', () => {
    const renderer = create(<Center.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'center')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
