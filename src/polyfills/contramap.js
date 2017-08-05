import { curry } from 'ramda'

export default curry((f, contravariant) => contravariant.contramap(f))
