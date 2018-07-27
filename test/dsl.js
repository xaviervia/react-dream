export const suite = (name, suite) =>
  suite.map(x => ({...x, description: `${name}: ${x.description}`}))

export const example = (description, test, shouldEqual) =>
  ({ description, test, shouldEqual })
