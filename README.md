# holaluz-prueba-tecnica

# How to run?


## Production 
Both backend and frontend have their own dockerfile for production, for ease of use, I've added a docker-compose, this shall not be in the production deployment

To run this all you need to do is execute ```docker-compose up``` in the root of the project and access it via: http://localhost:8844/  (if it's being cached, you can always run it with ```--build``` at the end)


## Local

if you want to run it in dev mode in local env you'll first need to install the dependencies by using ```yarn install``` then run each project with:


- frontend: ```yarn workspace frontend start```
- backend: ```yarn workspace backend start```

## To run the tests
If you want to run the tests, you'll first need to install the dependencies by using ```yarn install```

Then run whichever package you want to test by using: ```yarn workspace [frontend|backend] jest```

