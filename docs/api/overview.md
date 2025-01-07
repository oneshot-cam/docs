---
title: Overview
---

The Azuma HTTP API is used to interact with parts of the Azuma server.

## HTTP API Routes

HTTP API Route documentation consists of the request description,
the response description and possible errors you may encounter.
Request and response descriptions contain JSON bodies when applicable,
those define available keys and values in pseudo-types, followed by an example.
Some errors can happen on every route, those are described in [Errors](#errors).

## Errors

When an error occurs, the server will respond with an error status code and a JSON body including a message,
in case the error is not clear, it is shown in the following codeblock.

```json
{
  "message": "String" // "ALREADY_EXISTS"
}
```

### 400 Bad Request

The request you're sending is invalid. Please double-check that you are sending it as described in it's documentation.
If you've done that and it still doesn't work, create an issue in the backend repository.

### 401 Unauthorized

You tried to access a route which requires authorization but didn't provide a correct bearer-token
in the `Authorization` header. Please obtain and use a token, this is explained in [Sessions](#sessions).

### 500 Internal Server Error

This is most likely not your fault. Contact the Azuma instance hoster.

## Sessions

All routes except for [HTTP API Index](#http-api-index), [Register User](/api/user/#register-user)
and [Login User](/api/user/#login-user) require authorization, obtained through the latter two routes.
This token is used as a bearer-token in the `Authorization` header, like shown in the following codeblock.

```http
Authorization: Bearer 318cd399-f47f-478f-8d09-c9c414c3750d
```

When the token is first generated, it will be set to expire after 5 minutes.
This is done to prevent unused tokens. Every time the token is used, it's expiry date
will be set to 14 days after the current time. If the token is not used for 14 days,
it will expire and you will have to generate a new token using one of the methods mentioned above.

## HTTP API Index

This route returns information about the Azuma instance.

### Request

`GET /`

### Response

```json
{
  "name": "String", // "azumaneo"
  "version": "String", // "0.1.0"
  "authors": "String[]", // [ "cloudybyte <hi@cloudybyte.net>", "okrplay <32576280+okrplay@users.noreply.github.com>" ]
  "license": "String" // "AGPL-3.0-or-later"
}
```
