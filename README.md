# holaluz-prueba-tecnica

# How to run?


## Production 
Both backend and frontend have their own dockerfile for production, for ease of use, I've added a docker-compose, this shall not be in the production deployment

To run this all you need to do is execute ```docker-compose up```
And access it via: http://localhost:8844/


## Local
if you want to run it in dev mode in local env:

- frontend: ```yarn workspace frontend start```
- backend: ```yarn workspace backend start```

