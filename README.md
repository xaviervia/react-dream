# React Dream

[Fantasy Land]((https://github.com/fantasyland/fantasy-land)) type for React Components

**Caution: Extremely Experimental**

## Installation

```
npm install --save react-dream
```

You will also need a couple of peer dependencies:

```
npm install --save react@16.0.0-beta.3 react-dom@16.0.0-beta.3 recompose ramda
```

## Usage

**[WIP]**

Here is an extensive example that can be found in [examples](src/examples/index.js):

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

## API

**[WIP]**

### The ReactDream type

Check [Fantasy Land](https://github.com/fantasyland/fantasy-land) for an explanation of the various algebras.

ReactDream implements:

- Functor (map)
- Contravariant (contramap)
- Applicative (of, ap)
- Monad (chain)

## License

[MIT](LICENSE)
