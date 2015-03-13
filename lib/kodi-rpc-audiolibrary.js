(function() {
    var KodiAudioLibrary = function(delegate) {
        this.delegate = delegate;
    };

    KodiAudioLibrary.prototype.clean = function() {
        return this.delegate.rpc('AudioLibrary.Clean').then(function(r) {
            return r.result;
        });
    };

    KodiAudioLibrary.prototype.export = function(params) {
        if (typeof(params) == 'string') {
            params = {
                "properties": {
                    "path": params
                }
            };
        }
        params = params || {};
        params.properties = params.properties || {
            "path": "/"
        }; //default
        return this.delegate.rpc('AudioLibrary.Export', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };

    KodiAudioLibrary.prototype.getAlbumDetails = function(params) {
        if (typeof(params) == 'number') {
            params = {
                "albumid": params
            };
        }
        params = params || {};
        params.properties = params.properties || ["title", "artist", "genre", "albumlabel", "year", "playcount", "artistid"]; //default
        return this.delegate.rpc('AudioLibrary.GetAlbumDetails', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };

    KodiAudioLibrary.prototype.getAlbums = function(params) {
        params = params || {};
        params.properties = params.properties || ["title", "artist", "genre", "albumlabel", "year", "playcount", "artistid"]; //default
        return this.delegate.rpc('AudioLibrary.GetAlbums', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };

    KodiAudioLibrary.prototype.getArtistDetails = function(params) {
        if (typeof(params) == 'number') {
            params = {
                "artistid": params
            };
        }
        params = params || {};
        params.properties = params.properties || ["genre", "formed", "yearsactive"]; //default
        return this.delegate.rpc('AudioLibrary.GetArtistDetails', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };

    KodiAudioLibrary.prototype.getArtists = function(params) {
        params = params || {};
        params.properties = params.properties || ["genre", "formed", "yearsactive"]; //default
        return this.delegate.rpc('AudioLibrary.GetArtists', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };

    KodiAudioLibrary.prototype.getGenres = function(params) {
        params = params || {};
        params.properties = params.properties || ["title", "thumbnail"]; //default
        return this.delegate.rpc('AudioLibrary.GetGenres', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };

    KodiAudioLibrary.prototype.getRecentlyAddedAlbums = function(params) {
        params = params || {};
        params.properties = params.properties || ["title", "artist", "genre", "albumlabel", "year", "playcount", "artistid"]; //default
        return this.delegate.rpc('AudioLibrary.GetRecentlyAddedAlbums', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };

    KodiAudioLibrary.prototype.getRecentlyAddedSongs = function(params) {
        params = params || {};
        params.properties = params.properties || ["title", "artist", "albumartist", "genre", "year", "album", "track", "duration"]; //default
        return this.delegate.rpc('AudioLibrary.GetRecentlyAddedSongs', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };

    KodiAudioLibrary.prototype.getRecentlyPlayedAlbums = function(params) {
        params = params || {};
        params.properties = params.properties || ["title", "artist", "genre", "albumlabel", "year", "playcount", "artistid"]; //default
        return this.delegate.rpc('AudioLibrary.GetRecentlyPlayedAlbums', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };

    KodiAudioLibrary.prototype.getRecentlyPlayedSongs = function(params) {
        params = params || {};
        params.properties = params.properties || ["title", "artist", "albumartist", "genre", "year", "album", "track", "duration"]; //default
        return this.delegate.rpc('AudioLibrary.GetRecentlyPlayedSongs', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };

    KodiAudioLibrary.prototype.getSongDetails = function(params) {
        if (typeof(params) == 'number') {
            params = {
                "songid": params
            };
        }
        params = params || {};
        params.properties = params.properties || ["title", "artist", "albumartist", "genre", "year", "album", "track", "duration"]; //default
        return this.delegate.rpc('AudioLibrary.GetSongDetails', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };

    KodiAudioLibrary.prototype.getSongs = function(params) {
        params = params || {};
        params.properties = params.properties || ["title", "artist", "albumartist", "genre", "year", "album", "track", "duration"]; //default
        return this.delegate.rpc('AudioLibrary.GetSongs', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };

    KodiAudioLibrary.prototype.scan = function(params) {
        if (typeof(params) == 'string') {
            params = {
                "directory": params
            };
        }
        params = params || {};
        params.directory = params.directory || ""; //default
        return this.delegate.rpc('AudioLibrary.Scan', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };

    KodiAudioLibrary.prototype.setAlbumDetails = function(params) {
        params = params || {};
        return this.delegate.rpc('AudioLibrary.SetAlbumDetails', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };

    KodiAudioLibrary.prototype.setArtistDetails = function(params) {
        params = params || {};
        return this.delegate.rpc('AudioLibrary.SetArtistDetails', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };

    KodiAudioLibrary.prototype.setSongDetails = function(params) {
        params = params || {};
        return this.delegate.rpc('AudioLibrary.SetSongDetails', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };

    module.exports = KodiAudioLibrary;
})();
