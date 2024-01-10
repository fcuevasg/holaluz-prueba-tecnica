import React, { FC } from 'react'
import { ClientData, SupplyPointData } from '../../types/data'

interface CardProps {
	clientInfo?: ClientData
	supplyPointInfo?: SupplyPointData
	hasOffer?: boolean
	isElligible?: boolean
}

export const Card: FC<CardProps> = ({ clientInfo, supplyPointInfo, hasOffer, isElligible }) => {
	const elligableMsg = isElligible ? 'You can become part of the root revolution with the offer:' : 'You are not elligle to our rooftop products, sorry'
	const offerType = hasOffer ? 'Basic discount, 5% discount ' : 'Standard offer, no discount'
	return (
		<div className='color-box '>
			{clientInfo && supplyPointInfo && (
				<div>
					<div>
						<h1> Client info: </h1>
						<span>{clientInfo.full_name}</span>
						<span>{clientInfo.address}</span>
						<span>{clientInfo.cups}</span>
						<span>{clientInfo.building_type}</span>
						<span>{clientInfo.email}</span>
						<span>{clientInfo.role}</span>
					</div>
					<div>
						<h1> Supply info: </h1>
						<span>{supplyPointInfo.cups}</span>
						<span>P1: {supplyPointInfo.power.p1}</span>
						<span>P2: {supplyPointInfo.power.p2}</span>
						<span>{supplyPointInfo.invoiced_amount}</span>
						<span>{supplyPointInfo.tariff}</span>
						<div>
							<span>Neighbours:</span>
							{supplyPointInfo.neighbors.map((neighbour, index) => {
								return <span key={index}>{neighbour}</span>
							})}
						</div>

						<h2>{elligableMsg}</h2>
						<h2>{offerType}</h2>
					</div>
				</div>
			)}
		</div>
	)
}
