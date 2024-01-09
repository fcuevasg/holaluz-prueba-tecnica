import React, { useEffect, useState } from 'react'
import { CupsInput } from './components/cupsInput/Cupsinput'
import './App.scss'
import Cta from './components/CTA/Cta'
import { ClientData, supplyPointData } from './types/data'

export interface dataState {
	client: ClientData
	supplyPoint: supplyPointData
	hasOffer: boolean
	isElligible: boolean
	message: string
}

function App() {
	const dataState = useState<dataState>()
	const [data, setDataState] = dataState

	useEffect(() => {
		console.log(data)
	}, [data])
	return (
		<div className='anim-grad-box'>
			<Cta></Cta>
			<CupsInput dataState={dataState}></CupsInput>
			<div className='color-box '>
				{data && data.client && data.supplyPoint && (
					<div>
						<h1>{data.client.full_name}</h1>
						<h2>{data.supplyPoint.tariff}</h2>
						<h2>{data.isElligible && 'you are elligle to our rooftop products'}</h2>
						<h2>{!data.isElligible && 'You are not elligle to our rooftop products, sorry'}</h2>
						<h2>{data.hasOffer && data.isElligible && 'you are elligle for a 5% discount!'}</h2>
					</div>
				)}
				{data && data.message && <h1>{data.message}</h1>}
			</div>
		</div>
	)
}

export default App
