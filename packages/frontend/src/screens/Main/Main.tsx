import React, { FC, useState } from 'react'
import './styles.scss'
import { DataState } from '../../types/interfaces'
import { Cta, CupsInput, InfoCard, NavBar } from '../../components'

export const Main: FC = () => {
	const dataState = useState<DataState>()
	const [data, setDataState] = dataState
	return (
		<div className='anim-grad-box'>
			<NavBar></NavBar>
			<Cta></Cta>
			<CupsInput dataState={setDataState}></CupsInput>
			<InfoCard clientInfo={data?.client} hasOffer={data?.hasOffer} isElligible={data?.isElligible} supplyPointInfo={data?.supplyPoint}></InfoCard>
			{data && data.message && <h1>{data.message}</h1>}
		</div>
	)
}
