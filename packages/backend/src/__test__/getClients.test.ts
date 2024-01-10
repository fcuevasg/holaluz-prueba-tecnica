import request from 'supertest'
import app from '../app'

/**
 * {"data": {"client": {"address": "Potato street, 4", "building_type": "house", "cups": "123456", "email": "terry@gmail.com", "full_name": "Terry Evans", "password": "plainterrypassword", "role": "customer"}, "hasOffer": false, "isElligible": true, "supplyPoint": {"cups": "123456", "invoiced_amount": "50.00", "neighbors": ["234567", "345678"], "power": {"p1": "4500", "p2": "4200"}, "tariff": "One price"}}, "message": "", "status": 200}
 */

const mockedResponse = { data: { client: { address: 'Potato street, 4', building_type: 'house', cups: '123456', email: 'terry@gmail.com', full_name: 'Terry Evans', password: 'plainterrypassword', role: 'customer' }, hasOffer: false, isElligible: true, supplyPoint: { cups: '123456', invoiced_amount: '50.00', neighbors: ['234567', '345678'], power: { p1: '4500', p2: '4200' }, tariff: 'One price' } }, message: '', status: 200 }

describe('GET /clients', () => {
	it('should return a list of clients', async () => {
		const response = await request(app).get('/api/getClients?cups=123456')
		expect(response.status).toBe(200)
		expect(response.body).toEqual(mockedResponse)
	})

	it('should return a well formed client object', async () => {
		const response = await request(app).get('/api/getClients?cups=123456')
		expect(response.body.data.client).toHaveProperty('full_name')
		expect(response.body.data.client).toHaveProperty('address')
		expect(response.body.data.client).toHaveProperty('cups')
		expect(response.body.data.client).toHaveProperty('role')
		expect(response.body.data.client).toHaveProperty('building_type')
		expect(response.body.data.client).toHaveProperty('email')
		expect(response.body.data.client).toHaveProperty('password')
	})
	it('should return a well formed client object', async () => {
		const response = await request(app).get('/api/getClients?cups=123456')
		expect(response.body.data.client).toHaveProperty('full_name')
		expect(response.body.data.client).toHaveProperty('address')
		expect(response.body.data.client).toHaveProperty('cups')
		expect(response.body.data.client).toHaveProperty('role')
		expect(response.body.data.client).toHaveProperty('building_type')
		expect(response.body.data.client).toHaveProperty('email')
		expect(response.body.data.client).toHaveProperty('password')
		expect(response.body.data.client).toEqual(mockedResponse.data.client)
	})

	it('should return a well formed supplyPoint object', async () => {
		const response = await request(app).get('/api/getClients?cups=123456')
		expect(response.body.data.supplyPoint).toHaveProperty('cups')
		expect(response.body.data.supplyPoint).toHaveProperty('tariff')
		expect(response.body.data.supplyPoint).toHaveProperty('invoiced_amount')
		expect(response.body.data.supplyPoint).toHaveProperty('power')
		expect(response.body.data.supplyPoint).toHaveProperty('neighbors')
		expect(response.body.data.supplyPoint).toEqual(mockedResponse.data.supplyPoint)
	})

	it('should return a well formed power object', async () => {
		const response = await request(app).get('/api/getClients?cups=123456')
		expect(response.body.data.supplyPoint.power).toHaveProperty('p1')
		expect(response.body.data.supplyPoint.power).toHaveProperty('p2')
		expect(response.body.data.supplyPoint.power).toEqual(mockedResponse.data.supplyPoint.power)
	})

	it('should return a well formed neighbors array', async () => {
		const response = await request(app).get('/api/getClients?cups=123456')
		expect(response.body.data.supplyPoint.neighbors).toEqual(mockedResponse.data.supplyPoint.neighbors)
	})

	it('should return a message if the client does not exist', async () => {
		const response = await request(app).get('/api/getClients?cups=1234567')
		expect(response.body.message).toEqual('No se ha encontrado el CUPS')
	})
})
