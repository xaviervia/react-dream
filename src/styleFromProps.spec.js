import styleFromProps from './styleFromProps'
import { equal } from 'assert'

describe('styleFromProps', () => {
  it('sets the `style` prop with the return value', () => {
    const result = styleFromProps(({ hovered }) => ({
      backgroundColor: hovered ? 'blue' : 'black',
    }))({ hovered: true })

    equal(result.style.backgroundColor, 'blue')
  })

  it('merges the `style` prop with existing value', () => {
    const result = styleFromProps(({ hovered }) => ({
      backgroundColor: hovered ? 'blue' : 'black',
      color: 'green',
    }))({ hovered: true, style: { backgroundColor: 'lightblue' } })
    equal(result.style.backgroundColor, 'lightblue')

    equal(result.style.color, 'green')
  })
})
