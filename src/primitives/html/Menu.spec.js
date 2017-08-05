/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import Menu from './Menu'
import { equal } from 'assert'

describe('primitives / html / Menu', () => {
  it('has displayName `Menu`', () => {
    equal(Menu.Component.displayName, 'Menu')
  })

  it('is an `menu` tag that gets all props', () => {
    const renderer = create(<Menu.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'menu')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
