/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import Dialog from './Dialog'
import { equal } from 'assert'

describe('primitives / html / Dialog', () => {
  it('has displayName `Dialog`', () => {
    equal(Dialog.Component.displayName, 'Dialog')
  })

  it('is an `dialog` tag that gets all props', () => {
    const renderer = create(<Dialog.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'dialog')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
