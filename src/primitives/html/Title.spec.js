/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import Title from './Title'
import { equal } from 'assert'

describe('primitives / html / Title', () => {
  it('has displayName `Title`', () => {
    equal(Title.Component.displayName, 'Title')
  })

  it('is an `title` tag that gets all props', () => {
    const renderer = create(<Title.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'title')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
