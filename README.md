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
- Run for dev with `nodemon` and `eslint`
```shell
$ yarn dev 
```

#### Example some API
- Swagger API: http://localhost:5000/api/v1/api-docs/
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
      "data": {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJlYWN0IiwiaWF0IjoxNTI0NDc4MzcwLCJleHAiOjE1MjQ0ODU1NzB9.Me7AuPzf7NDzmtw9aCdfW8VBpbgiddBYlXFGYMIlvQw",
        "username": "react"
      },
      "success": 1
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
      "data": {
        "user": {
          "username": "react",
          "iat": 1524478370,
          "exp": 1524485570
        },
        "num": 26.62498848615844
      },
      "success": 1
    }
    ```

### TODO
- Unit Test: mocha, chai.
- Build Tools, ES7.

### License
MIT
