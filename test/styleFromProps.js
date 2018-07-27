import { example, suite } from './dsl'
import styleFromProps from '../src/styleFromProps'

export default suite(
  'styleFromProps',

  [
    example(
      'sets the `style` prop with the return value',

      () => styleFromProps(
        ({ hovered }) => ({
          backgroundColor: hovered ? 'blue' : 'black',
        })
      )({ hovered: true }),

      {
        hovered: true,
        style: {
          backgroundColor: 'blue'
        }
      }
    ),

    example(
      'merges the `style` prop with existing value',

      () => styleFromProps(
        ({ hovered }) => ({
          backgroundColor: hovered ? 'blue' : 'black',
          color: 'green',
        })
      )({
        hovered: true,
        style: { backgroundColor: 'lightblue' }
      }),

      {
        hovered: true,
        style: {
          backgroundColor: 'lightblue',
          color: 'green',
        }
      }
    )
  ]
)
