import express, { Request, Response } from 'express'
import cors from 'cors'
import clientData from './data/clients.json'
import supplyPoints from './data/supply-points.json'
import { UserData } from './types/data'

const app = express()
const PORT = 3001

let corsOptions = {
	origin: '*',
	optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(express.json())
app.use(cors(corsOptions))

// Endpoint POST
app.get('/api/clients/:id', (req: Request, res: Response) => {


	//TODO: move this to a service 

	let neighborsWithMorePower = 0
	let hasOffer = false
	let isElligible = false
	let message = ''
	const cups = req.params.id
	// const selectedClient = clientData.filter((client) => {
	// 	client.cups !== cups
	// })

	//TODO: Review this code, maybe is not needed or can be simplified
	
	const selectedClient = clientData
		.map((client) => {
			if (client.cups === cups) {
				return client
			}
		})
		.filter((client) => client !== undefined)[0]
	const selectedSupplyPoints = supplyPoints
		.map((supplyPoint) => {
			if (supplyPoint.cups === cups) {
				return supplyPoint
			}
		})
		.filter((client) => client !== undefined)[0]
	if (selectedClient && selectedSupplyPoints) {
		if (selectedClient?.building_type === 'house' && selectedSupplyPoints.neighbors.length > 0) {
			isElligible = true
		}

		selectedSupplyPoints.neighbors.map((neighborCUPS) => {
			const neighbor = supplyPoints.map((supplyPoint) => {
				if (supplyPoint.cups === neighborCUPS) return supplyPoint
			})[0]
			const neighborP1 = neighbor?.power.p1 || -Infinity
			const neighborP2 = neighbor?.power.p2 || -Infinity

			if (selectedSupplyPoints.power.p1 < neighborP1 && selectedSupplyPoints.power.p2 < neighborP2) {
				neighborsWithMorePower++
			}
		})

		if (neighborsWithMorePower == selectedSupplyPoints.neighbors.length) {
			hasOffer = true
		}
	} else {
		isElligible = false
		message = 'No se ha encontrado el CUPS'
	}

	// Do we take into account the fact that one CUP could be assigned to more than 1 client?
	// if(selectedClient.some((client) => client.building_type === 'house') ){
	//   data = {
	//     isAllegeable:true,
	//     hasOffer:false,
	//   }
	// }

	res.json({
		data: {
			client: selectedClient,
			supplyPoint: selectedSupplyPoints,
			isElligible,
			hasOffer,
		},
		message,
		status: 200,
	})
})
app.listen(PORT, () => {
	console.log(`Servidor escuchando en el puerto ${PORT}`)
})

export default app
