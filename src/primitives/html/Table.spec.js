/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import Table from './Table'
import { equal } from 'assert'

describe('primitives / html / Table', () => {
  it('has displayName `Table`', () => {
    equal(Table.Component.displayName, 'Table')
  })

  it('is an `table` tag that gets all props', () => {
    const renderer = create(<Table.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'table')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
