import React, { useState } from 'react'
import { FC } from 'react'
import { FaSearch } from 'react-icons/fa'
import './style.scss'

import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'

import SearchIcon from '@mui/icons-material/Search'

//TODO: change for interface file
import { DataState } from '../../screens/Main/Main'

export interface CupsInputProps {
	dataState: React.Dispatch<React.SetStateAction<DataState | undefined>>
}

export const CupsInput: FC<CupsInputProps> = ({ dataState }) => {
	//States
	const [cups, setCups] = useState('')
	const [sendValue, setsendValue] = useState('')
	const setData = dataState

	const sendRequest = async () => {
		let data
		try {
			const response = await fetch('http://localhost:3001/api/clients/' + cups)

			if (response.ok) {
				// Handle successful response
				data = await response.json()
			} else {
				// Handle error response
				console.error('Request failed with status:', response.status)
			}
		} catch (error) {
			// Handle network error
			console.error('Request failed:', error)
		}
		return data
	}

	//Handlers
	const handleKeyInput = async (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			setsendValue(cups)
			const { data, message } = await sendRequest()
			setData({ ...data, message })
		}
	}

	// TODO: needs to call the backend and show the data
	return (
		<>
			<Box
				component='form'
				sx={{
					'& > :not(style)': { m: 1, width: '25ch' },
				}}
				noValidate
				autoComplete='off'>
				<TextField id='Cups' label='CUPS number' variant='outlined' placeholder='Enter CUPS number' onKeyDown={handleKeyInput} value={cups} onChange={(e) => setCups(e.currentTarget.value)} />
				<SearchIcon></SearchIcon>
			</Box>
		</>
	)
}

/*
onClick={async () => {
						setsendValue(cups)
						const { data, message } = await sendRequest()
						setData({ ...data, message })
					}}*/