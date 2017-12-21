# Exquisite Corpse Backend

Backend for the Exquisite Corpse game. This backend is meant to be deployed using [Firebase Functions](https://firebase.google.com/docs/functions/).

## API Reference

### Get all finished games

`GET /all`

 **Response**
 ```
 {
   "games": [
     {
       "finished_on": "2017-09-27",
       "texts": ["Le cadavre", "exquis", "boira", "le vin", "nouveau"]
     },
     ...
   ]
 }
 ```

### Send a text

`POST /`
 
 **Parameters**
 
 Name|Type|Description
 ---|---|---
 message|string|**Required.** Single text contribution by a player. Max length 80 chars.
 
 **Response**
 ```
 {
   "status": 200
 }
 ```
 In case a text contribution finishes a game, the response will inform you about it:
 ```
 {
   "status": 200,
   "game": {
     "finished_on": "2017-09-27",
     "texts": ["Le cadavre", "exquis", "boira", "le vin", "nouveau"]
   }
 }
 ```
