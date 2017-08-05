import React from 'react'
import { create } from 'react-test-renderer'
import doPromap from './doPromap'
import { equal } from 'assert'

describe('doPromap', () => {
  it('passes the Component through the higher-order Component and the props preprocessor', () => {
    const propsPreprocessor = () => ({ name: 'Radiohead' })
    const higherOrderComponent = Target => ({ name }) =>
      <div>
        <Target>
          {name}
        </Target>
      </div>

    const Div = props => <h1 {...props} />

    const Enhanced = doPromap(propsPreprocessor, higherOrderComponent)(Div)

    const renderer = create(<Enhanced />)

    equal(renderer.toJSON().type, 'div')
    equal(renderer.toJSON().children[0].props.name, 'Radiohead')
  })
})
