/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import Dir from './Dir'
import { equal } from 'assert'

describe('primitives / html / Dir', () => {
  it('has displayName `Dir`', () => {
    equal(Dir.Component.displayName, 'Dir')
  })

  it('is an `dir` tag that gets all props', () => {
    const renderer = create(<Dir.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'dir')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
