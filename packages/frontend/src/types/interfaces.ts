import { ClientData, SupplyPointData } from "./data"

export interface DataState {
	client: ClientData
	supplyPoint: SupplyPointData
	hasOffer: boolean
	isElligible: boolean
	message: string
}