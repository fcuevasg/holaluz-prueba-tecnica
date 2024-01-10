import React, { FC, useState } from 'react'
import { Card } from '../../components/Card/Card'
import { Cta } from '../../components/Cta/Cta'
import { CupsInput } from '../../components/CupsInput/Cupsinput'
import { ClientData, SupplyPointData } from '../../types/data'
import './styles.scss'
import NavBar from '../../components/Navbar/Navbar'

//TODO: Move this to interface file

export interface DataState {
	client: ClientData
	supplyPoint: SupplyPointData
	hasOffer: boolean
	isElligible: boolean
	message: string
}

export const Main: FC = () => {
	const dataState = useState<DataState>()
	const [data, setDataState] = dataState
	return (
		<div className='anim-grad-box'>
			<NavBar></NavBar>
			<Cta></Cta>
			<CupsInput dataState={setDataState}></CupsInput>
			<Card clientInfo={data?.client} hasOffer={data?.hasOffer} isElligible={data?.isElligible} supplyPointInfo={data?.supplyPoint}></Card>
			{data && data.message && <h1>{data.message}</h1>}
		</div>
	)
}
