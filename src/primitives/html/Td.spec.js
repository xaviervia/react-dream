/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import Td from './Td'
import { equal } from 'assert'

describe('primitives / html / Td', () => {
  it('has displayName `Td`', () => {
    equal(Td.Component.displayName, 'Td')
  })

  it('is an `td` tag that gets all props', () => {
    const renderer = create(<Td.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'td')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
