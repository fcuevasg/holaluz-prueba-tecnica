export interface ClientData {
  full_name: string;
  address: string;
  cups: string;
  role: string;
  building_type: string;
  email: string;
  password: string;
}

interface UserPower {
  p1: string;
  p2: string;
}

export interface supplyPointData{
  cups: string;
  tariff: string;
  invoiced_amount: string;
  power: UserPower;
  neighbors: string[];
}
