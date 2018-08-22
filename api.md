## API options


```javascript
import ReactDream, { ReactBox } from 'react-dream'

ReactDream.Stateless(({ title }) => <h1>{title}</h1>)
  .map(element => <div>{element}</div>)
  .contramap(({ language }) => ({
    title: language === 'en' ? 'Hello' : 'Hola'
  }))
  .enhance(
    withState('updateTitle', 'title', 'Hola')
  )
  .name('Header')

ReactDream.Stateful(class extends Component {})
  .map() // not optimal!

ReactDream.Stateful(class extends Component {})
  .toStateless()
  .map() // optimal but verbose

const withChildren = (Parent, Up, Down) =>
  ReactDream.Stateless(({ parent, up, down }) =>
    <Parent.Component {...parent}>
      <Up {...up} />
      <Down {...down} />
    </Parent.Component>
  )

withChildren(
  Header,
  Title,
  Tagline
)
  .contramap()

// will build a Stateful
ReactDream(class extends Component {})

// will build a Stateless
ReactDream(props => <br />)

ReactDream(props => <hr />)
  .asBox()
  .map()

ReactBox(props => <hr />)
  .asDream()
  .map()

// Equivalences
ReactDream(x).enhance(f) == ReactDream(x).asBox().map(f)
ReactBox(x).map(f) == ReactDream(x).enhance(f)
ReactBox.of(f).ap(x) == ReactBox(x).map(f)
```
