# Express Rest API Starter
- Simple project starter point for Rest API using Nodejs & Expressjs.
- Starter point for learning and practice Nodejs & Expressjs.
- Inspired by [express-mongoose-es6-rest-api](https://github.com/KunalKapadia/express-mongoose-es6-rest-api).

### Get started

#### Commands

- Node version >= v6.9.
- Install packages by yarn or npm.
```shell
$ yarn install 
```
- Run server (default port: `5000`)
```shell
$ yarn start 
```

#### Example some API

- Check API is working http://localhost:5000/api/v1/health-check it should response `OK`.
- Check API login:
  - POST: http://localhost:5000/api/v1/auth/login
    - Request Body: 
    ```json
    {"username": "react", "password": "express"}
    ```
  - Response Payload:
    ```json
    {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJlYWN0IiwiaWF0IjoxNTE4MjU3OTMwfQ.8FfXLMr-j3Is8SVBAs9Xt1SN5-8J110fI0zZ8pG7sXs",
        "username": "react"
    }
    ```
- Get random number API:
  - GET: http://localhost:5000/api/v1/auth/randomNumber
    - Request Header: 
    ```json
    Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJlYWN0IiwiaWF0IjoxNTE4MjU3OTMwfQ.8FfXLMr-j3Is8SVBAs9Xt1SN5-8J110fI0zZ8pG7sXs
    ```
  - Response Payload:
    ```json
      {
        "user": {
            "username": "react",
            "iat": 1518260145,
            "exp": 1518260205
        },
        "num": 28.34904852480433
      }
    ```

### TODO
- ORM/ODM: mongoosejs, sequelizejs.
- GraphQL.
- Build Tools, ES7, nodemon.
- ...


### License
MIT
