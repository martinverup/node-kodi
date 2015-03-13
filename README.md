node-kodi
================
Node interface for Kodi using [JSON-RPC](http://kodi.wiki/?title=JSON-RPC_API).

Usage example
================
```javascript
var kodi_rpc = require('node-kodi');

var kodi = new kodi_rpc({
    url: <Kodi HOST>,
    user: <Kodi USERNAME>,
    password: <Kodi PASSWORD>
});

kodi.player.getCurrentlyPlayingVideo().then(function(r) {
    console.log(r);
});

kodi.input.sendText({"text": "This text is sent to Kodi"}).then(function(r) {
    console.log(r);
});

// OR

kodi.input.sendText('This text is sent to Kodi').then(function(r) {
    console.log(r);
});


```
