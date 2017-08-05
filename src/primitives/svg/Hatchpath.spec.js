/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import Hatchpath from './Hatchpath'
import { equal } from 'assert'

describe('primitives / html / Hatchpath', () => {
  it('has displayName `Hatchpath`', () => {
    equal(Hatchpath.Component.displayName, 'Hatchpath')
  })

  it('is an `hatchpath` tag that gets all props', () => {
    const renderer = create(<Hatchpath.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'hatchpath')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
