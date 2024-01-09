import React, { FC } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

interface test {
	name: string
	age: number
}

const test: test = {
	name: 'test',
	age: 10,
}

const container = document.getElementById('app-root')!
const root = createRoot(container)
root.render(<App></App>)
