# Web Storage Api

Web storage api provides mechanisms by which browsers can securely store the key value pairs.

## How local storage works?

- They have five methods
- setItem() => To add a key and value pair to local storage.
- removeItem() => To remove an item from local storage
- getItem() => To get items from local storage
- clear() => Clear the local Storage
- key() => Pass a number to retrieve key of a localstorage

## Limitations of Local Storage

- Do not ever store sensitive user information in a local storage
- It is not a substitute for a server based db as it stores data only on the browser
- It is limited to storing of 5MB data across all major browsers
- It has no form of protection and hence it is quite insecure, can be accessed by any code on the webpage
- It is synchronous,