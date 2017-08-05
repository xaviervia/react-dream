/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import S from './S'
import { equal } from 'assert'

describe('primitives / html / S', () => {
  it('has displayName `S`', () => {
    equal(S.Component.displayName, 'S')
  })

  it('is an `s` tag that gets all props', () => {
    const renderer = create(<S.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 's')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
