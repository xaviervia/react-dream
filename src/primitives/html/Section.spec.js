/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import Section from './Section'
import { equal } from 'assert'

describe('primitives / html / Section', () => {
  it('has displayName `Section`', () => {
    equal(Section.Component.displayName, 'Section')
  })

  it('is an `section` tag that gets all props', () => {
    const renderer = create(<Section.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'section')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
