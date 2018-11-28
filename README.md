# se2-auth-demo

[![Build Status](https://travis-ci.com/2018-Trento-SEII-INFORG/Authentication.svg?branch=master)](https://travis-ci.com/2018-Trento-SEII-INFORG/Authentication)

A small example that shows how to add authentication to your API using jwt https://jwt.io/.
Taken from: https://scotch.io/tutorials/authenticate-a-node-js-api-with-json-web-tokens

Deployed at https://is2-authentication-develop.herokuapp.com

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

- http://localhost/ welcome endpoint (public)
- http://localhost/authentications POST endpoint to authenticate passing name 'nick' and password 'nick' (public)
- http://localhost/api/v1/ apis (public)
- http://localhost/api/v1/users endpoint about the users (protected)

To call the protected endpoint you need to pass in the token:
- in the header as 'x-access-token'
- or in the body in a field 'token'
- or in the query under the key 'token'

```
$ curl -v -H "Authorization: Bearer <generated token>" http://localhost:3000/api/v1/me
$ curl -v http://localhost:3000/api/v1/users/me?token=<generated token>
```
