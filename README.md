# nodejs-notification-service

Push notification with nodeJS and Service Worker

## Dependencies
```
1. NodeJS

2. Express

3. Web-push
```

## Vapid Keys 

Identifies who is sending the push notification. Takes three paramenters:

```
1. mailto

2. Private Key

3. Public Key

```

## How to generate Vapid Keys

1. Keys for encryption: Private and Public.

2. cd into the middleware in node_modules and run command "generate-vapid-keys". See screenshot - https://github.com/kukuu/nodejs-notification-service/tree/master/snapshots.

3. The Keys MUST be stored in environmental variables before deployment. 

Note - Don't use the key from this work, as it has been masked. Follow instructins above to generate your own Vapid Keys for encryption.
