/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import Article from './Article'
import { equal } from 'assert'

describe('primitives / html / Article', () => {
  it('has displayName `Article`', () => {
    equal(Article.Component.displayName, 'Article')
  })

  it('is an `article` tag that gets all props', () => {
    const renderer = create(<Article.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'article')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})
