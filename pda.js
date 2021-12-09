#!/usr/bin/env node

const [node, pda, ...params] = process.argv
const message = params.join(' ')
console.log('Hello from PDA', message)