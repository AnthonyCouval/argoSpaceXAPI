# ArgoSpaceXApi
 ## Little API for user auth and CRUD SpaceX Ship
 
Make sure you have [Node.js](http://nodejs.org/) installed

#### Running locally :

```sh
git clone git@github.com:tyrants/argoSpaceXAPI.git # or clone your own fork
cd argoSpaceXAPI
npm install
```

 #### To launch api :
 
 ```sh
npm --mongoDb=mongodb://yourMongoUrl start
 ```
 
 #### Can work with mlab :
  ```sh
 npm --mongoDb=mongodb:// User:Password@dsXXXXXX.mlab.com:XXXXX/db start
  ```
  
 
## Methods :

#### POST http://localhost:3000/user/register 
> to add a user

Body: (don't forget to send in x-www-form-urlencoded)
```json
{
    "username":"myUser",
    "password":"mypassword"
}
```

#### POST http://localhost:XXXXX/user/login
> to connect a user

Body:
```json
{
    "username":"myUser",
    "password":"mypassword"
}
```

#### GET http://localhost:XXXXX/ship  
> To get all the ships

#### GET http://localhost:XXXXX/ship/:shipId  
> To get a specific ship

#### POST http://localhost:XXXXX/ship  
> To add a ship

Body:
```json
{
    "name": "Falcon Heavy",
    "active": false,
    "stages": "2",
    "costPerLaunch": "90000000",
    "successRatePct": 94,
    "firstFlight": "2017-12-04",
    "launchpad": "-",
    "country": "United States",
    "company": "SpaceX",
    "description": "With the ability to lift into orbit over 54 metric tons (119,000 lb)--a mass equivalent to a 737 jetliner loaded with passengers, crew, luggage and fuel--Falcon Heavy can lift more than twice the payload of the next closest operational vehicle, the Delta IV Heavy, at one-third the cost.",
    "coverUrl": "https://fr.wikipedia.org/wiki/Falcon_Heavy#/media/File:Pad_39_A_Falcon_Heavy_Artist_Cropped.jpg"
}
```

#### PUT http://localhost:XXXXX/ship/:shipId  
> to modify a ship

Body:
```json
{
    "name": "Falcon Heavy",
    "active": false,
    "stages": "2",
    "costPerLaunch": "90000000",
    "successRatePct": 94,
    "firstFlight": "2017-12-04",
    "launchpad": "-",
    "country": "United States",
    "company": "SpaceX",
    "description": "With the ability to lift into orbit over 54 metric tons (119,000 lb)--a mass equivalent to a 737 jetliner loaded with passengers, crew, luggage and fuel--Falcon Heavy can lift more than twice the payload of the next closest operational vehicle, the Delta IV Heavy, at one-third the cost.",
    "coverUrl": "https://fr.wikipedia.org/wiki/Falcon_Heavy#/media/File:Pad_39_A_Falcon_Heavy_Artist_Cropped.jpg"
}
```

#### DELETE http://localhost:XXXXX/ship/:shipId  
> to delete a ship
