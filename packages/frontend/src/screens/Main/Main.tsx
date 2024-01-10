import React, { FC, useState } from 'react'
import { InfoCard } from '../../components/Card/Card'
import { Cta } from '../../components/Cta/Cta'
import { CupsInput } from '../../components/CupsInput/Cupsinput'
import { ClientData, SupplyPointData } from '../../types/data'
import './styles.scss'
import NavBar from '../../components/Navbar/Navbar'
import { DataState } from '../../types/interfaces'

//TODO: Move this to interface file



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
