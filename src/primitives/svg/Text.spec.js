/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import Text from './Text'
import { equal } from 'assert'

describe('primitives / html / Text', () => {
  it('has displayName `Text`', () => {
    equal(Text.Component.displayName, 'Text')
  })

  it('is an `text` tag that gets all props', () => {
    const renderer = create(<Text.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'text')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
