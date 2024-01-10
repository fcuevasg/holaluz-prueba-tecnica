import { render } from '@testing-library/react'
import React from 'react'
import { CupsInput } from '../components/CupsInput/Cupsinput'
import '@testing-library/jest-dom'

describe('CUPS component', () => {
	const setDataState = jest.fn()
	it('renders without crashing', () => {
		const { getByPlaceholderText } = render(<CupsInput dataState={setDataState} />)
		const headingElement = getByPlaceholderText('Enter CUPS number')

		expect(headingElement).toBeInTheDocument()
	})

})
