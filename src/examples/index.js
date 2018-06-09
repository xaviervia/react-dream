import React from 'react'
import { render } from 'react-dom'
import { withHandlers, withState } from 'recompose'
import ReactDream, { of } from '../'

const withChildren = North => South => Wrapper => ({ north, south, wrapper, ...props }) =>
  <Wrapper {...{ ...props, ...wrapper }}>
    <North {...{ ...props, ...north }} />
    <South {...{ ...props, ...south }} />
  </Wrapper>

const Title = ReactDream(props => <h1 {...props} />)
  .style(() => ({
    fontFamily: 'sans-serif',
    fontSize: 18,
  }))
  .name('Title')

const Tagline = ReactDream(props => <p {...props} />)
  .style(() => ({
    fontFamily: 'sans-serif',
    fontSize: 13,
  }))
  .name('Tagline')

const HeaderWrapper = ReactDream(props => <header {...props} />)
  .removeProps('clicked', 'updateClicked')
  .style(({ clicked }) => ({
    backgroundColor: clicked ? 'red' : 'green',
    cursor: 'pointer',
    padding: 15,
  }))
  .name('HeaderWrapper')
  .map(
    withHandlers({
      onClick: ({ clicked, updateClicked }) => () => updateClicked(!clicked),
    })
  )
  .map(withState('clicked', 'updateClicked', false))

const Header = of(withChildren)
  .ap(Title)
  .ap(Tagline)
  .ap(HeaderWrapper)
  .contramap(({ title, tagline }) => ({
    north: { children: title },
    south: { children: tagline },
  }))
  .name('Header')

Header.fork(Component =>
  render(
    <Component title="Hello World" tagline="Of Fantasy Land Types for React" />,
    document.getElementById('root')
  )
)

// Or
// render(
//   <Header.Component title="Hello World" tagline="Of Fantasy Land Types for React" />,
//   document.getElementById('root')
// )
