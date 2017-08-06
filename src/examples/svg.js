import React from 'react'
import { render } from 'react-dom'
import { withHoverProps } from '@klarna/higher-order-components'
import withWindowDimensions from 'react-window-dimensions'
import { Svg, of } from '../'

const withChild = Child => Parent => ({ child = {}, parent = {}, ...props }) =>
  <Parent {...{ ...props, ...parent }}>
    <Child {...{ ...props, ...child }} />
  </Parent>

const Triangle = Svg.Path
  .addProps(() => ({
    d: 'M 50,5 95,97.5 5,97.5 z',
  }))
  .removeProps('hovered')
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
  .addProps(({ width, height }) => ({
    viewBox: `0 0 ${width} ${height}`,
  }))
  .name('Picture')

const App = of(withChild).ap(Figure).ap(Picture).map(withWindowDimensions())

render(<App.Component />, document.getElementById('root'))
