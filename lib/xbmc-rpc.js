(function() {

    var request = require('request');
    var Q = require('q');

    var KodiAddons = require('./kodi-rpc-addons');
    var KodiApplication = require('./kodi-rpc-application');
    var KodiAudioLibrary = require('./kodi-rpc-audiolibrary');
    var KodiFiles = require('./kodi-rpc-files');
    var KodiGUI = require('./kodi-rpc-gui');
    var KodiInput = require('./kodi-rpc-input');
    var KodiPVR = require('./kodi-rpc-pvr');
    var KodiPlayer = require('./kodi-rpc-player');
    var KodiPlaylist = require('./kodi-rpc-playlist');
    var KodiSystem = require('./kodi-rpc-system');
    var KodiVideoLibrary = require('./kodi-rpc-videolibrary');
    var KodiKodi = require('./kodi-rpc-kodi');


    var Kodi_RPC = function(input) {
        this.url = input.url;
        this.user = input.user;
        this.password = input.password;

        this.debug = input.debug || false;

        this.fail = false;

        this.addons = new KodiAddons(this);
        this.application = new KodiApplication(this);
        this.audiolibrary = new KodiAudioLibrary(this);
        this.files = new KodiFiles(this);
        this.gui = new KodiGUI(this);
        this.input = new KodiInput(this);
        this.pvr = new KodiPVR(this);
        this.player = new KodiPlayer(this);
        this.playlist = new KodiPlaylist(this);
        this.system = new KodiSystem(this);
        this.videolibrary = new KodiVideoLibrary(this);
        this.kodi = new KodiKodi(this);

        //Is the server connectable?
        if (this.debug)
            console.log('Pinging Kodi at ' + this.url);
        this.ping().then(function(r) {
            this.fail = r.result != 'pong';
        }, function(error) {
            this.fail = true;
        });
    };

    Kodi_RPC.prototype.rpc = function(method, parameters) {
        if (this.fail) {
            console.log('Kodi is unavailable. Check your settings. Is Kodi running?');
            return false;
        }

        if (this.debug)
            console.log('Kodi connection established');

        var params = (typeof parameters != 'undefined' ? '"params": ' + parameters + ', ' : '');

        if (this.url[this.url.length - 1] != '/')
            this.url += '/';

        var rpc = '{"jsonrpc": "2.0", "method": "' + method + '", ' + params + '"id": "node-kodi"}';

        var urlenc = this.url + 'jsonrpc?request=' + encodeURIComponent(rpc);

        if (this.debug)
            console.log((this.url.substring(0, 4) != "http" ? 'http://' : '') + this.url + 'jsonrpc?request=' + rpc);

        return makeRequest(urlenc, this.user, this.password);
    };

    function makeRequest(url, username, password) {

        var defer = Q.defer();

        if (url.substring(0, 4) != "http") {
            url = 'http://' + url;
        }

        var auth = 'Basic ' + new Buffer(username + ':' + password).toString('base64');

        var options = {
            'url': url,
            'headers': {
                'Authorization': auth,
                'Content-Type': 'json'
            }
        };

        function callback(error, response, body) {
            if (!error && response.statusCode == 200) {
                body = JSON.parse(body);
                defer.resolve(body);
            } else {
                defer.reject(error);
            }
        }

        request(options, callback);

        return defer.promise;
    };
    

    Kodi_RPC.prototype.getConfiguration = function() {
        return this.rpc('JSONRPC.GetConfiguration').then(function(r) {
            return r.result;
        });
    };

    Kodi_RPC.prototype.introspect = function(params) {
        return this.rpc('JSONRPC.Introspect', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };

    Kodi_RPC.prototype.notifyAll = function(params) {
        return this.rpc('JSONRPC.NotifyAll', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };

    Kodi_RPC.prototype.permission = function() {
        return this.rpc('JSONRPC.Permission').then(function(r) {
            return r.result;
        });
    };

    Kodi_RPC.prototype.ping = function() {
        return this.rpc('JSONRPC.Ping').then(function(r) {
            return r.result;
        });
    };

    Kodi_RPC.prototype.setConfiguration = function(params) {
        return this.rpc('JSONRPC.SetConfiguration', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };

    Kodi_RPC.prototype.version = function() {
        return this.rpc('JSONRPC.Version').then(function(r) {
            return r.result;
        });
    };

    module.exports = Kodi_RPC;
})();
