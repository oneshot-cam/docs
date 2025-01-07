---
title: User
---

User accounts are used to identify people. They are also used to obtain tokens to use with the Azuma API.

```json
{
  "id": "Uuid", // "ee8e77d9-290e-4bb9-84a1-c2b7efb338df"
  "name": "String", // "John"
  "email": "String" // "john.doe@oneshot.cam",
}
```

## Register User

This route is used to create a new user and get a session token for it.

### Request

`POST /users`

```json
{
  "name": "String", // "John"
  "email": "String", // "john.doe@oneshot.cam"
  "password": "String" // "oneshot_secret"
}
```

### Response

```json
{
  "token": "Uuid" // "318cd399-f47f-478f-8d09-c9c414c3750d"
}
```

### Possible Errors

:::warning[todo]
:::

| Code         | Message        | Description                                                       |
| ------------ | -------------- | ----------------------------------------------------------------- |
| 409 Conflict | ALREADY_EXISTS | This user already exists. Are you trying to [login](#login-user)? |

## Login User

This route is used to get a session token for a user that has already been created.

### Request

`POST /user/login`

```json
{
  "name": "String", // "azuma"
  "password": "String" // "neo"
}
```

### Response

```json
{
  "token": "Uuid" // "c3b6f0b1-4a81-4ec8-800e-a2ad39f4d56e"
}
```

### Possible Errors

| Code          | Message   | Description                                                             |
| ------------- | --------- | ----------------------------------------------------------------------- |
| 403 Forbidden | FORBIDDEN | The login credentials were incorrect.                                   |
| 404 Not Found | NOT_FOUND | This user does not exist, are you trying to [register](#register-user)? |

## Update User

This route is used to update the current user.

### Request

`PATCH /user/update`

```json
{
  "name": "String?", // "azumax"
  "password": "String?" // "neox"
}
```

### Response

```json
{
  "id": "Uuid", // "ee8e77d9-290e-4bb9-84a1-c2b7efb338df"
  "name": "String", // "azumax"
  "created_at": "Timestamp" // "2021-03-28T14:39:40.063095Z"
}
```

### Possible Errors

| Code         | Message        | Description                     |
| ------------ | -------------- | ------------------------------- |
| 409 Conflict | ALREADY_EXISTS | This username is already taken. |
