import React from 'react'
import { create } from 'react-test-renderer'
import doPromap from '../../src/internals/doPromap'
import { example, suite } from '../dsl'

export default suite(
  'doPromap',
  example(
    'run the component through the higher-order component and the pre processor',

    () => {
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

      return renderer.toJSON()
    },

    {
      type: 'div',
      props: {},
      children: [
        {
          type: 'h1',
          props: {
            name: 'Radiohead'
          },
          children: null
        }
      ]
    }
  )
)
