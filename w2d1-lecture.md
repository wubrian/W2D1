# W2D1 Lecture

* URL (Uniform Resource Locator)
  - Protocol
  - Domain (or Host)
  - Port
  - Resource Path
  - Query Parameters
  - Anchor

* JSON (JavaScript Object Notation)
- serialization: converts objects (or data structures) into a format that can be stored or transmitted between computers (typically as a string of text)
- deserialization: The opposite, going from String → Object


* Protocol

- a set of rules governing the exchange of data between devices

- KKJP (Knock Knock Joke Protocol)... etc many protocols that are in common for us to use

* HTTP (Hyper Text Transfer Protocol)

- connection between "Request" and "Response"

## The Client

1. Request line
2. Method
  - Get => (state of the server unchange)
  - Post => (state of the server will change), duplicate of the body text
  - Put => update/replace of the body text
  - Delete => take out any body text specify
3. Path
  - "/ " is the root path
  - http request: Get / HTTP / 1.1
                  Host: example.com
                  Content-Length: 302
                  Accepts: text/html

                  Key1=value1&key2=value2
    - command line:  curl -v httplink

  - http response: HTTP/1.1 200 OK
                   Content-Type: text/html
4. Version
  - api (application programming interface)
  - postman
  .
  .
  .
5. Headers
6. Body

* DNS (Domain Name System)
* API (Application Programming Interface)




