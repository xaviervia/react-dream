/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import Link from './Link'
import { equal } from 'assert'

describe('primitives / html / Link', () => {
  it('has displayName `Link`', () => {
    equal(Link.Component.displayName, 'Link')
  })

  it('is an `link` tag that gets all props', () => {
    const renderer = create(<Link.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'link')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
