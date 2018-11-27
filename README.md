# se2-auth-demo

[![Build Status](https://travis-ci.com/jorgeramirez/se2-auth-demo.svg?branch=master)](https://travis-ci.com/jorgeramirez/se2-auth-demo)

A small example that shows how to add authentication to your API using jwt https://jwt.io/.
Taken from: https://scotch.io/tutorials/authenticate-a-node-js-api-with-json-web-tokens

## Run

Clone the repo and install the dependencies by doing

```
$   npm install
```

Run the application by doing:

```
$   npm start
```

Endpoints

- http://localhost:80/ welcome endpoint (public)
- http://localhost:3000/authentications POST endpoint to authenticate passing name 'nick' and password 'nick' (public)
- http://localhost:3000/api/v1/ apis (public)
- http://localhost:3000/api/v1/users endpoint about the users (protected)

To call the protected endpoint you need to pass in the token in the header 'x-access-token' or in the body or as a paremeter 'token'

```
$ curl -v -H "Authorization: Bearer <generated token>" http://localhost:3000/api/v1/me
$ curl -v http://localhost:3000/api/v1/me?access_token=<generated token>
```
