/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import Menuitem from './Menuitem'
import { equal } from 'assert'

describe('primitives / html / Menuitem', () => {
  it('has displayName `Menuitem`', () => {
    equal(Menuitem.Component.displayName, 'Menuitem')
  })

  it('is an `menuitem` tag that gets all props', () => {
    const renderer = create(<Menuitem.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'menuitem')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
