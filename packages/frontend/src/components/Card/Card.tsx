import React, { FC } from 'react'
import { ClientData, SupplyPointData } from '../../types/data'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import './styles.scss'
interface CardProps {
	clientInfo?: ClientData
	supplyPointInfo?: SupplyPointData
	hasOffer?: boolean
	isElligible?: boolean
}

export const InfoCard: FC<CardProps> = ({ clientInfo, supplyPointInfo, hasOffer, isElligible }) => {
	const elligableMsg = isElligible ? 'You can become part of the root revolution with the offer:' : 'You are not elligle to our rooftop products, sorry'
	const offerType = hasOffer ? 'Basic discount, 5% discount ' : 'Standard offer, no discount'
	return (
		<div className='color-box '>
			{clientInfo && supplyPointInfo && (
				<div>
					<Typography gutterBottom variant='h5' textAlign='center' component='div'>
						{elligableMsg}
					</Typography>
					<Typography gutterBottom variant='h5' textAlign='center' component='div'>
						{isElligible ? offerType : ''}
					</Typography>
					<Card sx={{ minWidth: 275, width: 680 }}>
						<CardContent className='parent'>
							<div className='div1'>
								<Typography gutterBottom variant='h4' component='div'>
									Client Info
								</Typography>
								<Typography variant='body1' color='text.primary'>
									Name:
									<Typography variant='body1' color='text.secondary'>
										{clientInfo.full_name}
									</Typography>
								</Typography>
								<Typography variant='body1' color='text.primary'>
									Address:
									<Typography variant='body1' color='text.secondary'>
										{clientInfo.address}
									</Typography>
								</Typography>
								<Typography variant='body1' color='text.primary'>
									CUPS:
									<Typography variant='body1' color='text.secondary'>
										{clientInfo.cups}
									</Typography>
								</Typography>
								<Typography variant='body1' color='text.primary'>
									Building type:
									<Typography variant='body1' color='text.secondary'>
										{clientInfo.building_type}
									</Typography>
								</Typography>
								<Typography variant='body1' color='text.primary'>
									Email:
									<Typography variant='body1' color='text.secondary'>
										{clientInfo.email}
									</Typography>
								</Typography>
								<Typography variant='body1' color='text.primary'>
									Role:
									<Typography variant='body1' color='text.secondary'>
										{clientInfo.role}
									</Typography>
								</Typography>
							</div>
							<div className='div2'>
								<Typography gutterBottom variant='h4' component='div'>
									Supply Info
								</Typography>
								<Typography variant='body1' color='text.primary'>
									CUPS:
									<Typography variant='body1' color='text.secondary'>
										{supplyPointInfo.cups}
									</Typography>
								</Typography>
								<Typography variant='body1' color='text.primary'>
									Power 1:
									<Typography variant='body1' color='text.secondary'>
										{supplyPointInfo.power.p1}
									</Typography>
								</Typography>
								<Typography variant='body1' color='text.primary'>
									Power 2:
									<Typography variant='body1' color='text.secondary'>
										{supplyPointInfo.power.p2}
									</Typography>
								</Typography>
								<Typography variant='body1' color='text.primary'>
									Invoiced amount:
									<Typography variant='body1' color='text.secondary'>
										{supplyPointInfo.invoiced_amount}
									</Typography>
								</Typography>
								<Typography variant='body1' color='text.primary'>
									Tariff:
									<Typography variant='body1' color='text.secondary'>
										{supplyPointInfo.tariff}
									</Typography>
								</Typography>

								<div>
									<Typography variant='body1' color='text.primary'>
										Neighbours:
									</Typography>
									{supplyPointInfo.neighbors.map((neighbour) => {
										return (
											<Typography variant='body1' color='text.secondary'>
												{neighbour}
											</Typography>
										)
									})}
								</div>
							</div>
						</CardContent>
					</Card>
				</div>
			)}
		</div>
	)
}
