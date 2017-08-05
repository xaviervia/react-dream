/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import Ellipse from './Ellipse'
import { equal } from 'assert'

describe('primitives / html / Ellipse', () => {
  it('has displayName `Ellipse`', () => {
    equal(Ellipse.Component.displayName, 'Ellipse')
  })

  it('is an `ellipse` tag that gets all props', () => {
    const renderer = create(<Ellipse.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'ellipse')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
