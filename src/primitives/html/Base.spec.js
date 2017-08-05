/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import Base from './Base'
import { equal } from 'assert'

describe('primitives / html / Base', () => {
  it('has displayName `Base`', () => {
    equal(Base.Component.displayName, 'Base')
  })

  it('is an `base` tag that gets all props', () => {
    const renderer = create(<Base.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'base')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
