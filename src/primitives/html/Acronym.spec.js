/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import Acronym from './Acronym'
import { equal } from 'assert'

describe('primitives / html / Acronym', () => {
  it('has displayName `Acronym`', () => {
    equal(Acronym.Component.displayName, 'Acronym')
  })

  it('is an `acronym` tag that gets all props', () => {
    const renderer = create(<Acronym.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'acronym')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
