/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import Area from './Area'
import { equal } from 'assert'

describe('primitives / html / Area', () => {
  it('has displayName `Area`', () => {
    equal(Area.Component.displayName, 'Area')
  })

  it('is an `area` tag that gets all props', () => {
    const renderer = create(<Area.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'area')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
