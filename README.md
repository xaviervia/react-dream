# React Dream

[![Build Status](https://travis-ci.org/xaviervia/react-dream.svg)](https://travis-ci.org/xaviervia/react-dream)
[![npm version](https://img.shields.io/npm/v/react-dream.svg?maxAge=1000)](https://www.npmjs.com/package/react-dream)

[Fantasy Land](https://github.com/fantasyland/fantasy-land) type for React Components

**Caution: Extremely Experimental**

## Installation

```
npm add react-dream
```

You will also need a couple of peer dependencies:

```
npm add react react-dom recompose ramda
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

### The ReactDream type

Check [Fantasy Land](https://github.com/fantasyland/fantasy-land) for an explanation of the various algebras.

ReactDream implements:

- Profunctor (map, contramap, promap)
- Applicative (of, ap)
- Monad (chain)

In particular:

#### map

`map` allows to wrap the function with regular higher-order components, such as the ones provided by [recompose](https://github.com/acdlite/recompose).

```js
import React from 'react'
import { ReactDream } from 'react-dream'
import { withHandlers, withState } from 'recompose'

const Counter = ReactDream(({counter, onClick}) =>
  <div>
    <button onClick={onClick}>Add 1</button>
    <p>{counter}</p>
  </div>
)
  .map(
    withHandlers({
      onClick: ({ counter, updateCount }) => () => updateCount(counter + 1),
    })
  )
  .map(withState('counter', 'updateCount', 0))
```

This is because `map` expects a function from `a -> b` in the general case but from `Component -> a` in this particular case since holding components is the intended usage of ReactDream. Higher-order components are functions from `Component -> Component`, so they perfectly fit the bill.

#### contramap

`contramap` allows to preprocess props before they reach the component.

```js
const Title = H1
  .contramap(({label}) => ({
    children: label
  }))
  .name('Title')

render(
  <Title.Component
    label='This will be the content now'
  />,
  domElement
)
```

This is a common pattern for higher-order Components, and the key advantage of using `contramap` instead of `map` for this purpose is that if the wrapped component is a stateless, function component, you avoid an unnecessary call to React. Another advantage is that functions passed to `contramap` as an argument are simply pure functions, without mentioning React at all, with the signature `Props -> Props`.

#### promap

`promap` can be thought of as a shorthand for doing `contramap` and `map` at the same time. The first argument to it is the function that is going to be used to `contramap` and the second is the one to be used to `map`:

```js
const Header = Html.Div
  .promap(
    ({title}) => ({children: title}),
    setDisplayName('Header')
  )
```

#### ap + of

`ap` allows you to apply a higher-order components to regular components, and `of` allows you to lift any value to `ReactDream`, which is useful for lifting higher-order components.

Applying second-order components (`Component -> Component`) can also be done with `map`: where `ap` shines is in allowing you to apply a higher-order component that takes two or more components (third or higher order, such as `Component -> Component -> Component -> Component`), that is otherwise not possible with `map`. This makes it possible to abstract control flow or composition patterns in higher-order components:

**Control flow example**
```js
const eitherLeftOrRight = Left => Right => ({left, ...props}) =>
  left
    ? <Left {...props} />
    : <Right {...props} />

const TitleOrSubtitle = of(eitherLeftOrRight)
  .ap(Html.H1)
  .ap(Html.H2)
  .addProps({isTitle} => ({
    left: isTitle
  }))

render(
  <TitleOrSubtitle.Component isTitle={true}>
    This will be an H1 title
  </TitleOrSubtitle.Component>
  , domElement
)
```

**Parent-children pattern example**

```js
const withChildren = North => South => Wrapper => ({north, south, wrapper, ...props}) =>
  <Wrapper {...{...props, ...wrapper}}>
    <North {...{...props, ...north}} />
    <South {...{...props, ...south}} />
  </Wrapper>

const PageHeader = of(withChildren)
  .ap(Html.H1)
  .ap(Html.P)
  .ap(Html.Header)
  .addProps({title, subtitle} => ({
    north: { children: title },
    south: { children: subtitle },
  }))

render(
  <PageHeader.Component
    title='Hello World'
    subtitle='Lorem ipsum dolor sit amet et consectetur'
  />
  , domElement
)
```

#### chain
`chain` is useful as a escape hatch if you want to escape from ReactDream and do something very React-y

```js
const Header = Html.H1
  .chain(H1Component => ReactDream(({title, subtitle}) =>
    <header>
      <H1Component>
        {title}
      </H1Component>
      <h2>{subtitle}</h2>
    </header>
  ))
```

Aside from Fantasy Land algebras, ReactDream provides the methods:

#### addProps(getNewProps)

`addProps` allows you to pass a function whose result will be merged with the regular props. This is useful to add derived props to a component:

```js
import { Svg } from 'react-dream'

const Picture = Svg.Svg
  .addProps(props => ({
    viewBox: `0 0 ${props.width} ${props.height}`
  }))

render(
  <Picture.Component
    width={50}
    height={50}
  />,
  domElement
)
```

The new props will be merged below the regular ones, so that the consumer can always override your props:

```diff
import { Svg } from 'react-dream'

const Picture = Svg.Svg
  .addProps(props => ({
+    // This will be now ignored
    viewBox: `0 0 ${props.width} ${props.height}`
  }))

render(
  <Picture.Component
+    viewBox='0 0 100 100'
    width={50}
    height={50}
  />,
  domElement
)
```

`addProps` is a particular case of `contramap`, and it is implemented internally with `contramap`.

#### removeProps(...propNamesToRemove)

`removeProps` filters out props. Very useful to avoid the React warnings of unrecognized props.

```js
const ButtonWithStates = Html.Button
  .removeProps('hovered', 'pressed')
  .style(({hovered, pressed}) => ({
    color: pressed ? 'red' : (hovered ? 'orange' : 'black')
  }))
```

#### style(getStyleFromProps)

Takes a function from props to a style object. The function will be invoked each time with the props. The result will be set as the `style` prop of the wrapper component. If there are styles coming from outside, they will be merged together with the result of this function. For example:

```js
const Title = Html.H1
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

#### rotate(getRotateFromProps)

`rotate` sets up a style `transform` property with the specified rotation, in degrees. If there is a transform already, `rotate` will append to it:

```js
const Title = Html.H1
  .rotate(props => 45)

render(
  <Title.Component style={{ transform: 'rotate(45deg)' }} />,
  document.getElementById('root')
)
```

…will result in `transform: 'translateX(20px) rotate(45deg)'`

> Just a reminder: rotations start from the top left edge as the axis, which is rarely what one wants. If you want the rotation to happen from the center, you can set `transform-origin: 'center'`, that with ReactDream would be `.style(props => ({transformOrigin: 'center'}))`.

#### scale(getRotateFromProps)

`scale` sets up a style `transform` property with the specified scaling factor. If there is a transform already, `scale` will append to it:

```js
const Title = Html.H1
  .scale(props => 1.5)

render(
  <Title.Component style={{ transform: 'scale(1.5)' }} />,
  document.getElementById('root')
)
```

…will result in `transform: 'translateX(20px) scale(1.5)'`

#### translate(getTranslateFromProps)

`translate` allows you to easily set up the `transform` style property with the specified displacement. If there is a transform already, `translate` will append to it:

```js
const Title = Html.H1
  .translate(props => [30])
  .translate(props => [null, 30])
  .translate(props => [null, null, 30])
```

…will result in `transform: 'translateZ(30px) translateY(30px) translateX(30px)'`

### Debugging

The downside of chaining method calls is that debugging is not super intuitive. Since there are no statements, it’s not possible to place a `console.log()` or `debugger` call in the middle of the chain without some overhead. To simplify that, two methods for debugging are bundled:

#### log(text)

Whenever the Component is called with new props, it will print:

- The custom text
- The component displayName
- The current props

Pretty useful to debug what exactly is happening in the chain:

```js
const Title = Html.H1
  .log('what gets to the H1?')
  .contramap(({hovered, label}) => ({
    children: hovered ? 'Hovered!' : label
  }))
  .log('is there a label before the contramap?')
  .name('Title')
  .log('does it also get a label from outside?')

render(
  <Title.Component hovered label='Label from outside' />,
  domElement
)
```

Each time the `Title.Component` is re rendered, this will print, in this order:

1. `'does it also get a label from outside?', 'Title', { label: 'Label from outside', hovered: true }`
2. `'is there a label before the contramap?', 'H1', { label: 'Label from outside', hovered: true }`
3. `'what gets to the H1?', 'H1', { label: 'Hovered!' }`

#### debug()

**Be careful. Dangerous**

This last-resort method allows you to inject a `debugger` statement at that point in the change. The result will allow you to inspect the Component and its props in the higher order component.

It will be called on each render of the component.

### Built-in Primitives

ReactDream ships with a complete set of HTML and SVG primitives lifted into the type. You can access them like:

```js
import { Svg, Html } from 'react-dream'

const MyDiv = Html.Div

const MyLayer = Svg.G
```

## License

[MIT](LICENSE)
