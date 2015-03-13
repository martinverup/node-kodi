(function() {
    var KodiPlaylist = function(delegate) {
        this.delegate = delegate;
    };

    KodiPlaylist.prototype.add = function(params) {
        params = params || {};
        return this.delegate.rpc('Playlist.Add', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };

    KodiPlaylist.prototype.clear = function(params) {
        if (typeof(params) == 'number') {
            params = {
                "playlistid": params
            };
        }
        params = params || {};
        return this.delegate.rpc('Playlist.Clear', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };

    KodiPlaylist.prototype.getItems = function(params) {
        if (typeof(params) == 'number') {
            params = {
                "playlistid": params
            };
        }
        params = params || {};
        return this.delegate.rpc('Playlist.GetItems', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };

    KodiPlaylist.prototype.getPlaylists = function() {
        return this.delegate.rpc('Playlist.GetPlaylists').then(function(r) {
            return r.result;
        });
    };

    KodiPlaylist.prototype.getProperties = function(params) {
        if (typeof(params) == 'number') {
            params = {
                "playlistid": params
            };
        }
        params = params ||  {};
        params.properties = params.properties || ["type", "size"]; //default
        return this.delegate.rpc('Playlist.GetProperties', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };

    KodiPlaylist.prototype.insert = function(params) {
        params = params || {};
        return this.delegate.rpc('Playlist.Insert', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };

    KodiPlaylist.prototype.remove = function(params) {
        if (typeof(params) == 'number') {
            params = {
                "playlistid": params
            };
        }
        params = params || {};
        params.position = params.position || 0; //default
        return this.delegate.rpc('Playlist.Remove', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };

    KodiPlaylist.prototype.swap = function(params) {
        if (typeof(params) == 'number') {
            params = {
                "playlistid": params
            };
        }
        params = params || {};
        params.position1 = params.position1 || 0; //default
        params.position2 = params.position2 || 1; //default
        return this.delegate.rpc('Playlist.Swap', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };

    module.exports = KodiPlaylist;
})();
