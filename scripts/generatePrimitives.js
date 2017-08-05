const primitivesLists = require('./primitivesLists')
const fs = require('fs')

const generatedCodeWarning = `/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden`

const templates = tagName => ({
  spec: `${generatedCodeWarning}
import React from 'react'
import { create } from 'react-test-renderer'
import ${capitalizeFirst(tagName)} from './${capitalizeFirst(tagName)}'
import { equal } from 'assert'

describe('primitives / html / ${capitalizeFirst(tagName)}', () => {
  it('has displayName \`${capitalizeFirst(tagName)}\`', () => {
    equal(${capitalizeFirst(tagName)}.Component.displayName, '${capitalizeFirst(tagName)}')
  })

  it('is an \`${tagName}\` tag that gets all props', () => {
    const renderer = create(<${capitalizeFirst(tagName)}.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, '${tagName}')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})`,
  source: `${generatedCodeWarning}
import React from 'react'
import ReactDream from '../../ReactDream'

export default ReactDream(props => <${tagName} {...props} />).name('${capitalizeFirst(tagName)}')`,
  sourceFileName: `${capitalizeFirst(tagName)}.js`,
  specFileName: `${capitalizeFirst(tagName)}.spec.js`,
})

const toIndexEntry = tagName =>
  `export { default as ${capitalizeFirst(tagName)} } from './${capitalizeFirst(tagName)}'`

const capitalizeFirst = string => string[0].toUpperCase() + string.slice(1)

const toWriteList = {
  html: primitivesLists.html.map(templates),
  svg: primitivesLists.svg.map(templates),
}

const indexFiles = {
  html: generatedCodeWarning + '\n' + primitivesLists.html.map(toIndexEntry).join('\n'),
  svg: generatedCodeWarning + '\n' + primitivesLists.svg.map(toIndexEntry).join('\n'),
}

const writeFile = where => ({ sourceFileName, specFileName, spec, source }) => {
  console.log(`writing ${where} ${sourceFileName}`)
  fs.writeFileSync(__dirname + '/../src/primitives/' + where + '/' + sourceFileName, source)

  console.log(`writing ${where} ${specFileName}`)
  fs.writeFileSync(__dirname + '/../src/primitives/' + where + '/' + specFileName, spec)
}

toWriteList.html.forEach(writeFile('html'))
toWriteList.svg.forEach(writeFile('svg'))

console.log(`------------------`)
console.log(`writing html index`)
fs.writeFileSync(__dirname + '/../src/primitives/html/index.js', indexFiles.html)
console.log(`writing svg index`)
fs.writeFileSync(__dirname + '/../src/primitives/svg/index.js', indexFiles.svg)
