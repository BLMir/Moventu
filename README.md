<h1 align="center">
  <br>
  <img src="https://github.com/BLMir/RandomRouter/blob/readme/img/MoventuRamdomRoutersmall.png?raw=true" alt="Random Router"></a>
  <br>
  Random Router (Grpc Services) made with Kotlin
  <h4 align="center">This project is part of an ambitious project calls [Movemtu](#moventuMoreInfo).</h4>
  <br>
</h1>

<h4 align="center">The services is able to generate randoms route given a duration time and start gps point.</h4>

<p align="center">
  <img alt="random router" src="https://media.giphy.com/media/l1fRfBh53oBVnC5xqu/giphy.gif">
</p>
<h4 align="center">All routes have the same start/End point and duration.</h4>

### Initial Configuration

1- We need to request the Google Direction API <a href="https://developers.google.com/maps/documentation/directions/start"> here </a>.
After that we can start adding the key to the resources.
```shell
Google.apiKey=YOUR_DIRECTION_API_KEY
```
2- Assign a port to the grpc server.
```shell
Server.port=PORT
```
3- (OPTIONAL) Add a google static api key. Just if we want to see the route drawn in a image.
```shell
Google.staticApiKey=YOUR_STATIC_API_KEY
```

## TODO ( help us :D )

When We were develop this services we faced some improvement that we had to store them, here is the list 

- Backend:
  - [ ] Grpc to REST
  - [ ] Distance check logic
- Front End:
  - [ ] Web/Ios/Android Client 
  
## Maintainers

- Lluis Llobera
- Nano Fernandez
- Biel Mir

## Licensing

<p align="center">Apache License
Version 2.0, January 2004
http://www.apache.org/licenses/</p>

#moventuMoreInfo
