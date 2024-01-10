# Backend info

This backend is done on NodeJS, using express as a REST api

It has the following endpoints:

## /api/clients/:id

it returns the client data, as well as the supply point for said CUPS number, along with the already calculated eligibility and discounts

it returns the following structure:

```js
{
	client: ClientData
	supplyPoint: SupplyPointData
	hasOffer: boolean
	isElligible: boolean
	message: string //Will always be empty unless there's an error such as CUPS not found
}
```

structure of client data:

```js
{
	full_name: string
	address: string
	cups: string
	role: string
	building_type: string
	email: string
	password: string
}
```

structure of supply point data:

```js
 {
  cups: string;
  tariff: string;
  invoiced_amount: string;
  power: UserPower;
  neighbors: string[];
  }
```
