# React Dream

[![Build Status](https://travis-ci.org/xaviervia/react-dream.svg)](https://travis-ci.org/xaviervia/react-dream)
[![npm version](https://img.shields.io/npm/v/react-dream.svg?maxAge=1000)](https://www.npmjs.com/package/react-dream)

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

Here is an extensive example that can be found in [examples](src/examples/index.js):

> If you are not familiar with Fantasy Land types, I can highly recommend the [video tutorials by Brian Lonsdorf](https://egghead.io/instructors/brian-lonsdorf)

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

### Lifting your own component into ReactDream

For example, for a ReactNative View:

```js
import { ReactDream } from 'react-dream'
import { View } from 'react-native'

const DreamView = ReactDream(View)
```

### Using `chain`

```js
import { Svg, ReactDream } from 'react-dream'

const wrapWithGLayer = Component => ReactDream(props =>
  <g>
    <Component {...props} />
  </g>
)

const LayerWithCircle = Svg.Circle
  .contramap(() => ({
    r: 5,
    x: 10,
    y: 10
  })
  .chain(wrapWithGLayer)
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

Aside from Fantasy Land algebras, ReactDream provides the methods:

#### style(getStyleFromProps)

Takes a function from props to a style object. The function will be invoked each time with the props. The result will be set as the `style` prop of the wrapper component. If there are styles coming from outside, they will be merged together with the result of this function. For example:

```js
const Title = H1
  .style(props => ({color: highlighted ? 'red' : 'black'}))

render(
  <Title
    highlighted
    style={{backgroundColor: 'green'}}
  />,
  domElement
)
```

The resulting style will be: `{ color: 'red', backgroundColor: 'green' }`.

#### name(newDisplayName)

Sets the `displayName` of the component:

```js
const Tagline = H2.name('tagline')
```

#### fork(doSomethingWithTheComponent)

Calls the argument function with the actual component in the inside:

```js
H1.fork(Component => render(<Component>Hello</Component>, domElement))
```

…will render `<h1>Hello</h1>`

## License

[MIT](LICENSE)
