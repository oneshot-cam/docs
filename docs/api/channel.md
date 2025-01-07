---
title: Channels
---
Messages are sent in channels in order to differenciate them by topic.

## Channel Creation

This route creates a new textchannel.

### Request

`POST /channel`

```json
{
  "name": "String", // "azuma-dev"
  "description": "String" // "Everything about azumas development". This field is nullable!
}
```

### Response

```json
{
  "id": "Uuid", // "8bd3784a-0f32-4c71-b9f2-380021d2b83f"
}
```


## Channel Deletion

Delete a channel and all of its content from the database.

### Request

`DELETE /channel`

```json
{
  "id": "Uuid", // "8bd3784a-0f32-4c71-b9f2-380021d2b83f"
}
```

### Response

`204 No Content`

### Possible Errors

| Code          | Message        | Description                                                       |
| ------------- | -------------- | ----------------------------------------------------------------- |
| 404 Not Found | NOT_FOUND      | The provided channel does not exist.                              |



