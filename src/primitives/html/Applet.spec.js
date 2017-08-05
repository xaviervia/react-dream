/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import Applet from './Applet'
import { equal } from 'assert'

describe('primitives / html / Applet', () => {
  it('has displayName `Applet`', () => {
    equal(Applet.Component.displayName, 'Applet')
  })

  it('is an `applet` tag that gets all props', () => {
    const renderer = create(<Applet.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'applet')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
