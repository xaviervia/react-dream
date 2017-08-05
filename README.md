# React Dream

Fantasy Land type for React Components

**Caution: Extremely Experimental**

## Installation

```
npm install --save react-dream
```

## Usage

Here is an extensive example that can be found in [examples](src/examples/index.js)

```js
import React from 'react'
import { render } from 'react-dom'
import { withHandlers, withState } from 'recompose'
import { omit } from 'ramda'
import { Html, of } from 'react-dream'

const withChildren = North => South => Wrapper => ({ north, south, wrapper, ...props }) =>
  <Wrapper {...{ ...props, ...wrapper }}>
    <North {...{ ...props, ...north }} />
    <South {...{ ...props, ...south }} />
  </Wrapper>

const Title = Html.H1
  .style(() => ({
    fontFamily: 'sans-serif',
    fontSize: 18,
  }))
  .name('Title')

const Tagline = Html.P
  .style(() => ({
    fontFamily: 'sans-serif',
    fontSize: 13,
  }))
  .name('Tagline')

const HeaderWrapper = Html.Header
  .contramap(omit(['clicked', 'updateClicked']))
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
    <Component
      title="Hello World"
      tagline="Of Fantasy Land Types for React"
    />,
    document.getElementById('root')
  )
)
```

Render part could also be written:

```js
render(
  <Header.Component
    title="Hello World"
    tagline="Of Fantasy Land Types for React"
  />,
  document.getElementById('root')
)
```

## License

[MIT](LICENSE)
