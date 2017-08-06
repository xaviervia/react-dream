import React from 'react'
import { render } from 'react-dom'
import { omit } from 'ramda'
import { withHoverProps } from '@klarna/higher-order-components'
import { Svg, of } from '../'

const withChild = Child => Parent => ({ child = {}, parent = {}, ...props }) =>
  <Parent {...{ ...props, ...parent }}>
    <Child {...{ ...props, ...child }} />
  </Parent>

const Triangle = Svg.Path
  .contramap(props => ({
    d: 'M 50,5 95,97.5 5,97.5 z',
    ...props,
  }))
  .contramap(omit(['hovered']))
  .style(({ hovered }) => ({
    fill: hovered ? 'blue' : 'purple',
  }))
  .name('Triangle')
  .map(withHoverProps({ hovered: true }))

const Layer = Svg.G
  .style(({ displacement }) => ({
    transform: `translateX(${displacement}px)`,
  }))
  .name('Layer')

const Figure = of(withChild).ap(Triangle).ap(Layer).contramap(({ displacement }) => ({
  parent: { displacement },
}))

const Picture = Svg.Svg
  .contramap(({ width, height, props }) => ({
    width: width,
    height: height,
    viewBox: `0 0 ${width} ${height}`,
    ...props,
  }))
  .name('Picture')

const App = of(withChild).ap(Figure).ap(Picture)

render(<App.Component />, document.getElementById('root'))
