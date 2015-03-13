(function() {
    var KodiVideoLibrary = function(delegate) {
        this.delegate = delegate;
    };

    KodiVideoLibrary.prototype.clean = function() {
        return this.delegate.rpc('VideoLibrary.Clean').then(function(r) {
            return r.result;
        });
    };

    KodiVideoLibrary.prototype.export = function(params) {
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
        return this.delegate.rpc('VideoLibrary.Export', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };

    KodiVideoLibrary.prototype.getEpisodeDetails = function(params) {
        if (typeof(params) == 'number') {
            params = {
                "episodeid": params
            };
        }
        params = params || {};
        params.properties = params.properties || ["title", "year", "art", "rating", "runtime", "imdbnumber", "showtitle", "season", "episode"]; //default
        return this.delegate.rpc('VideoLibrary.GetEpisodeDetails', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };

    KodiVideoLibrary.prototype.getEpisodes = function(params) {
        if (typeof(params) == 'number') {
            params = {
                "tvshowid": params
            };
        }
        params = params || {};
        params.properties = params.properties || ["title", "art", "rating", "runtime", "showtitle", "season", "episode"]; //default
        return this.delegate.rpc('VideoLibrary.GetEpisodes', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };

    KodiVideoLibrary.prototype.getGenres = function(params) {
        params = params || {};
        params.properties = params.properties || ["title", "thumbnail"]; //default
        return this.delegate.rpc('VideoLibrary.GetGenres', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };

    KodiVideoLibrary.prototype.getMovieDetails = function(params) {
        if (typeof(params) == 'number') {
            params = {
                "movieid": params
            };
        }
        params = params || {};
        params.properties = params.properties || ["art", "thumbnail", "rating", "playcount", "year", "imdbnumber"]; //default
        return this.delegate.rpc('VideoLibrary.GetMovieDetails', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };

    KodiVideoLibrary.prototype.getMovieSetDetails = function(params) {
        if (typeof(params) == 'number') {
            params = {
                "setid": params
            };
        }
        params = params || {};
        params.properties = params.properties || ["title", "playcount", "fanart", "thumbnail", "art"]; //default
        return this.delegate.rpc('VideoLibrary.GetMovieSetDetails', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };

    KodiVideoLibrary.prototype.getMovieSets = function(params) {
        params = params || {};
        params.properties = params.properties || ["title", "playcount", "fanart", "thumbnail", "art"]; //default
        return this.delegate.rpc('VideoLibrary.GetMovieSets', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };

    KodiVideoLibrary.prototype.getMovies = function(params) {
        params = params || {};
        params.properties = params.properties || ["art", "thumbnail", "rating", "playcount", "year", "imdbnumber"]; //default
        return this.delegate.rpc('VideoLibrary.GetMovies', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };

    KodiVideoLibrary.prototype.getMusicVideoDetails = function(params) {
        if (typeof(params) == 'number') {
            params = {
                "musicvideoid": params
            };
        }
        params = params || {};
        params.properties = params.properties || ["title", "playcount", "runtime", "thumbnail", "art", "artist", "album", "year", "track"]; //default
        return this.delegate.rpc('VideoLibrary.GetMusicVideoDetails', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };

    KodiVideoLibrary.prototype.getMusicVideos = function(params) {
        params = params || {};
        params.properties = params.properties || ["title", "playcount", "runtime", "thumbnail", "art", "artist", "album", "year", "track"]; //default
        return this.delegate.rpc('VideoLibrary.GetMusicVideos', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };

    KodiVideoLibrary.prototype.getRecentlyAddedEpisodes = function(params) {
        params = params || {};
        params.properties = params.properties || ["art", "thumbnail", "rating", "playcount", "year", "imdbnumber"]; //default
        return this.delegate.rpc('VideoLibrary.GetRecentlyAddedEpisodes', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };

    KodiVideoLibrary.prototype.getRecentlyAddedMovies = function(params) {
        params = params || {};
        params.properties = params.properties || ["art", "thumbnail", "rating", "playcount", "year", "imdbnumber"]; //default
        return this.delegate.rpc('VideoLibrary.GetRecentlyAddedMovies', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };

    KodiVideoLibrary.prototype.getRecentlyAddedMusicVideos = function(params) {
        params = params || {};
        params.properties = params.properties || ["title", "playcount", "runtime", "thumbnail", "art", "artist", "album", "year", "track"]; //default
        return this.delegate.rpc('VideoLibrary.GetRecentlyAddedMusicVideos', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };

    KodiVideoLibrary.prototype.getSeasons = function(params) {
        if (typeof(params) == 'number') {
            params = {
                "tvshowid": params
            };
        }
        params = params || {};
        params.properties = params.properties || ["season", "showtitle", "playcount", "episode", "watchepisodes", "art"]; //default
        return this.delegate.rpc('VideoLibrary.GetSeasons', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };

    KodiVideoLibrary.prototype.getTVShowDetails = function(params) {
        if (typeof(params) == 'number') {
            params = {
                "tvshowid": params
            };
        }
        params = params || {};
        params.properties = params.properties || ["art", "thumbnail", "rating", "playcount", "year", "imdbnumber"]; //default
        return this.delegate.rpc('VideoLibrary.GetTVShowDetails', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };

    KodiVideoLibrary.prototype.getTVShows = function(params) {
        params = params || {};
        params.properties = params.properties || ["art", "thumbnail", "rating", "playcount", "year", "imdbnumber"]; //default
        return this.delegate.rpc('VideoLibrary.GetTVShows', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };

    KodiVideoLibrary.prototype.removeEpisode = function(params) {
        if (typeof(params) == 'number') {
            params = {
                "episodeid": params
            };
        }
        params = params || {};
        return this.delegate.rpc('VideoLibrary.RemoveEpisode', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };

    KodiVideoLibrary.prototype.removeMovie = function(params) {
        if (typeof(params) == 'number') {
            params = {
                "movieid": params
            };
        }
        params = params || {};
        return this.delegate.rpc('VideoLibrary.RemoveMovie', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };

    KodiVideoLibrary.prototype.removeMusicVideo = function(params) {
        if (typeof(params) == 'number') {
            params = {
                "musicvideoid": params
            };
        }
        params = params || {};
        return this.delegate.rpc('VideoLibrary.RemoveMusicVideo', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };

    KodiVideoLibrary.prototype.removeTVShow = function(params) {
        if (typeof(params) == 'number') {
            params = {
                "tvshowid": params
            };
        }
        params = params || {};
        return this.delegate.rpc('VideoLibrary.RemoveTVShow', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };

    KodiVideoLibrary.prototype.scan = function(params) {
        if (typeof(params) == 'string') {
            params = {
                "directory": params
            };
        }
        params = params || {};
        params.directory = params.directory || ""; //default
        return this.delegate.rpc('VideoLibrary.Scan', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };

    KodiVideoLibrary.prototype.setEpisodeDetails = function(params) {
        params = params || {};
        return this.delegate.rpc('VideoLibrary.SetEpisodeDetails', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };

    KodiVideoLibrary.prototype.setMovieDetails = function(params) {
        params = params || {};
        return this.delegate.rpc('VideoLibrary.SetMovieDetails', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };

    KodiVideoLibrary.prototype.setMusicVideoDetails = function(params) {
        params = params || {};
        return this.delegate.rpc('VideoLibrary.SetMusicVideoDetails', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };

    KodiVideoLibrary.prototype.setTVShowDetails = function(params) {
        params = params || {};
        return this.delegate.rpc('VideoLibrary.SetTVShowDetails', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };

    module.exports = KodiVideoLibrary;
})();
