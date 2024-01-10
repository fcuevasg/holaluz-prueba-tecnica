import express, { Request, Response } from 'express'
import cors from 'cors'
import clientData from './data/clients.json'
import supplyPoints from './data/supply-points.json'


const app = express()
const PORT = 3567

let corsOptions = {
	origin: '*',
	optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(express.json())
app.use(cors(corsOptions))

app.get('/api/clients/:id', (req: Request, res: Response) => {
	const cups = req.params.id;

	const selectedClient = clientData.find((client) => client.cups === cups);
	const selectedSupplyPoints = supplyPoints.find((supplyPoint) => supplyPoint.cups === cups);

	let isElligible = false;
	let hasOffer = false;
	let message = '';

	if (selectedClient && selectedSupplyPoints) {
		if (selectedClient.building_type === 'house' && selectedSupplyPoints.neighbors.length > 0) {
			isElligible = true;
		}

		const neighborsWithMorePower = selectedSupplyPoints.neighbors.filter((neighborCUPS) => {
			const neighbor = supplyPoints.find((supplyPoint) => supplyPoint.cups === neighborCUPS);
			const neighborP1 = neighbor?.power.p1 || -Infinity;
			const neighborP2 = neighbor?.power.p2 || -Infinity;

			return selectedSupplyPoints.power.p1 < neighborP1 && selectedSupplyPoints.power.p2 < neighborP2;
		});

		if (neighborsWithMorePower.length !== selectedSupplyPoints.neighbors.length) {
			hasOffer = true;
		}
	} else {
		isElligible = false;
		message = 'No se ha encontrado el CUPS';
	}

	res.json({
		data: {
			client: selectedClient,
			supplyPoint: selectedSupplyPoints,
			isElligible,
			hasOffer,
		},
		message,
		status: 200,
	});
});
app.listen(PORT, () => {
	console.log(`Servidor escuchando en el puerto ${PORT}`)
})

export default app
