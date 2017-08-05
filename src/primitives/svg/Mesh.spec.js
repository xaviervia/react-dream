/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import Mesh from './Mesh'
import { equal } from 'assert'

describe('primitives / html / Mesh', () => {
  it('has displayName `Mesh`', () => {
    equal(Mesh.Component.displayName, 'Mesh')
  })

  it('is an `mesh` tag that gets all props', () => {
    const renderer = create(<Mesh.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'mesh')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
