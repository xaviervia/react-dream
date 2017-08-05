/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import Progress from './Progress'
import { equal } from 'assert'

describe('primitives / html / Progress', () => {
  it('has displayName `Progress`', () => {
    equal(Progress.Component.displayName, 'Progress')
  })

  it('is an `progress` tag that gets all props', () => {
    const renderer = create(<Progress.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'progress')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
