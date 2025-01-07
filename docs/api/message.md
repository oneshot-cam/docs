---
title: Message
---

Textmessages are used to exchange information between two or more users.

```json
{
  "id": "Uuid", // "318cd399-f47f-478f-8d09-c9c414c3750d"
  "author": "String", // "testuser"
  "channel": "Uuid", // "ee8e77d9-290e-4bb9-84a1-c2b7efb338df"
  "content": "String", // "Hello World"
  "created_at": "Timestamp" // "2021-03-28T14:39:40.063095Z"
}
```

## Send Message

Users can exchange information by sending messages in textchannels.

### Request

`POST /message/send`

```json
{
  "channel": "Uuid", // "ee8e77d9-290e-4bb9-84a1-c2b7efb338df"
  "content": "String" // "Hello World"
}
```

### Response

```json
{
  "id": "Uuid" // "318cd399-f47f-478f-8d09-c9c414c3750d"
}
```

### Possible Errors

| Code          | Message        | Description                                                       |
| ------------- | -------------- | ----------------------------------------------------------------- |
| 403 Forbidden | FORBIDDEN      | The provided token was incorrect.                                 |
| 404 Not Found | NOT_FOUND      | The provided channel id was incorrect.                            |

