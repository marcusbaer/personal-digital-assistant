#!/usr/bin/env node

const options = require('./pda.json')
console.log(process.cwd(), options)

const [node, pda, ...params] = process.argv
const message = params.join(' ')
console.log('Hello from PDA', message)