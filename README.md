# nodejs-notification-service

Push notification with nodeJS and Service Worker

## Dependencies
```
1. NodeJS

2. Express

3. Web-push
```

## Vapid Keys: Generating Private and Public Keys.

Identifies who is sending the push notification. Takes three parameters:

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

Application demo:

API Secure Gateway Payment - https://checkout.stripe.com/c/pay/cs_test_a1YbfWQWI7sV8rr3dobAOjUm1oFTIflgOGsKV3LqYd2h0JhWKnsmuh1xOd#fidkdWxOYHwnPyd1blpxYHZxWjA0SHJDQUlOd0lyPGNPSDNpMWthaUhnSW0xQkxvc2h0SlJNYGRHSmJcbFE1ZzAyfGhuY3FxSlF1M3xWYUBPblBza11Kf3JmQEREVjNLTlBoVlFNVHc2YlNJNTVOSEMxYEx8XScpJ2hsYXYnP34nYnBsYSc%2FJzJmNDY8YDZgKGFmZmQoMT0xNyhkZDVjKDZmMjY8N2QwMjNmNGM1YzRmZCcpJ2hwbGEnPycxYT1mNjc2PCgzPWY2KDE1NmEoPTEwZCg1ZmNmNz1nMTZmMDw8NzVkM2EnKSd2bGEnPydmNjdmZjM3NCgxPTJhKDFjZzUoPGZgNSg8MGM8PTMxYzI0N2EyNGAyZmQneCknZ2BxZHYnP15YKSdpZHxqcHFRfHVgJz8ndmxrYmlgWmxxYGgnKSd3YGNgd3dgd0p3bGJsayc%2FJ21xcXV2PyoqaWpzYG9qbGtxKG5wbnBwK3Ngd2ZgaStkdXUneCUl
