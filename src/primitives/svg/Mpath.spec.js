/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import Mpath from './Mpath'
import { equal } from 'assert'

describe('primitives / html / Mpath', () => {
  it('has displayName `Mpath`', () => {
    equal(Mpath.Component.displayName, 'Mpath')
  })

  it('is an `mpath` tag that gets all props', () => {
    const renderer = create(<Mpath.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'mpath')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
