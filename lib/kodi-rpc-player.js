(function() {
    var KodiPlayer = function(delegate) {
        this.delegate = delegate;
    };

    var defaultplayer = 1;

    KodiPlayer.prototype.getActivePlayers = function() {
        return this.delegate.rpc('Player.GetActivePlayers').then(function(r) {
            return r.result;
        });
    };

    KodiPlayer.prototype.getProperties = function(params) {
        params = params || {};
        params.properties = params.properties || ["time", "percentage", "totaltime", "speed"];
        params.playerid = params.playerid ||  defaultplayer;
        return this.delegate.rpc('Player.GetProperties', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };

    KodiPlayer.prototype.getItem = function(params) {
        if (typeof(params) == 'number') {
            params = {
                "playerid": params
            };
        }
        params = params || {};
        params.playerid = params.playerid || defaultplayer;
        return this.delegate.rpc('Player.GetItem', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };

    KodiPlayer.prototype.goTo = function(params) {
        if (typeof(params) == 'string') {
            params = {
                "playerid": defaultplayer,
                "to": params
            };
        }
        params = params || {};
        params.playerid = params.playerid || defaultplayer;
        player.to = player.to || "next";
        return this.delegate.rpc('Player.GoTo', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };

    KodiPlayer.prototype.move = function(params) {
        if (typeof(params) == 'string') {
            params = {
                "playerid": defaultplayer,
                "direction": params
            };
        }
        params = params || {};
        params.playerid = params.playerid || defaultplayer;
        params.direction = params.direction || "left";
        return this.delegate.rpc('Player.Move', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };

    KodiPlayer.prototype.open = function(params) {
        params = params || {};
        return this.delegate.rpc('Player.Open', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };

    KodiPlayer.prototype.playPause = function(params) {
        if (typeof(params) == 'boolean') {
            params = {
                "play": params,
                "playerid": defaultplayer
            };
        } else if (typeof(params) == 'number') {
            params = {
                "play": "toggle",
                "playerid": params
            };
        }
        params = params || {};
        params.play = params.play || "toggle"; //default

        params.playerid = params.playerid ||  defaultplayer;
        return this.delegate.rpc('Player.PlayPause', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };

    KodiPlayer.prototype.rotate = function(params) {
        if (typeof(params) == 'string') {
            params = {
                "value": params
            };
        } else if (typeof(params) == 'number') {
            params = {
                "playerid": params
            };
        }
        params = params || {};
        params.value = params.value || "clockwise"; //default
        params.playerid = params.playerid || defaultplayer;
        return this.delegate.rpc('Player.Rotate', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };

    KodiPlayer.prototype.seek = function(params) {
        if (typeof(params) == 'number') {
            params = {
                "playerid": params
            };
        } else if (typeof(params) == 'string') {
            params = {
                "value": params
            };
        }
        params = params || {};
        params.value = params.value || "smallforward"; //default
        params.playerid = params.playerid || defaultplayer;
        return this.delegate.rpc('Player.Seek', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };

    KodiPlayer.prototype.setAudioStream = function(params) {
        if (typeof(params) == 'number' || typeof(params) == 'string') {
            params = {
                "stream": params
            };
        }
        params = params || {};
        params.playerid = params.playerid || defaultplayer;
        params.stream = params.stream || "next"; //default
        return this.delegate.rpc('Player.SetAudioStream', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };

    KodiPlayer.prototype.setPartymode = function(params) {
        if (typeof(params) == 'number') {
            params = {
                "playerid": params
            };
        } else if (typeof(params) == 'boolean') {
            params = {
                "partymode": params
            };
        }
        params = params || {};
        params.playerid = params.playerid || defaultplayer;
        params.partymode = params.partymode || "toggle"; //default
        return this.delegate.rpc('Player.SetPartymode', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };

    KodiPlayer.prototype.setRepeat = function(params) {
        if (typeof(params) == 'number') {
            params = {
                "playerid": params
            };
        }
        params = params || {};
        params.playerid = params.playerid || defaultplayer;
        params.repeat = params.repeat || "cycle"; //default
        return this.delegate.rpc('Player.SetRepeat', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };

    KodiPlayer.prototype.setShuffle = function(params) {
        if (typeof(params) == 'number') {
            params = {
                "playerid": params
            };
        } else if (typeof(params) == 'boolean') {
            params = {
                "shuffle": params
            };
        }
        params = params || {};
        params.playerid = params.playerid || defaultplayer;
        params.shuffle = params.shuffle || "toggle";
        return this.delegate.rpc('Player.SetShuffle', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };

    KodiPlayer.prototype.setSpeed = function(params) {
        if (typeof(params) == 'number') {
            params = {
                "playerid": params
            };
        }
        params = params || {};
        params.playerid = params.playerid || defaultplayer;
        params.speed = params.speed || 1; //default
        return this.delegate.rpc('Player.SetSpeed', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };

    KodiPlayer.prototype.setSubtitle = function(params) {
        if (typeof(params) == 'number') {
            params = {
                "playerid": params
            };
        } else if (typeof(params) == 'boolean') {
            params = {
                "enable": params
            };
        } else if (typeof(params) == 'string') {
            params = {
                "subtitle": params
            };
        }
        params = params || {};
        params.playerid = params.playerid || defaultplayer;
        params.subtitle = params.subtitle || "next"; //default
        return this.delegate.rpc('Player.SetSubtitle', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };

    KodiPlayer.prototype.stop = function(params) {
        if (typeof(params) == 'number') {
            params = {
                "playerid": params
            };
        }
        params = params || {};
        params.playerid = params.playerid || defaultplayer;
        return this.delegate.rpc('Player.Stop', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };

    KodiPlayer.prototype.zoom = function(params) {
        if (typeof(params) == 'number') {
            params = {
                "playerid": params
            };
        } else if (typeof(params) == 'string') {
            params = {
                "zoom": params
            };
        }
        params = params || {};
        params.zoom = params.zoom || "in"; //default
        params.playerid = params.playerid || defaultplayer;
        return this.delegate.rpc('Player.Zoom', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };


    //New non-standard functions

    KodiPlayer.prototype.getCurrentlyPlayingVideo = function(params) {
        var params = params || {};
        var properties = ["title", "year", "art", "rating", "runtime", "imdbnumber", "showtitle", "season", "episode"]
        params.playerid = 1;
        params.properties = params.properties || properties;
        return this.delegate.rpc('Player.GetItem', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };

    KodiPlayer.prototype.playPauseVideo = function() {
        var params = {};
        params.playerid = 1;
        return this.delegate.rpc('Player.PlayPause', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };

    KodiPlayer.prototype.SetVideoSpeed = function(params) {
        if (typeof(params) == 'number') {
            params = {
                "speed": params
            };
        }
        params = params || {};
        params.playerid = 1;
        params.speed = params.speed || 1; //default
        return this.delegate.rpc('Player.SetSpeed', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };

    KodiPlayer.prototype.getCurrentlyPlayingAudio = function() {
        var params = {};
        params.playerid = 0;
        params.properties = ["title", "artist", "albumartist", "genre", "year", "album", "track", "duration"];
        return this.delegate.rpc('Player.GetItem', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };

    KodiPlayer.prototype.playPauseAudio = function() {
        var params = {};
        params.playerid = 0;
        return this.delegate.rpc('Player.PlayPause', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };

    KodiPlayer.prototype.SetAudioSpeed = function(params) {
        if (typeof(params) == 'number') {
            params = {
                "speed": params
            };
        }
        params = params || {};
        params.playerid = 0;
        params.speed = params.speed || 1; //default
        return this.delegate.rpc('Player.SetSpeed', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };

    module.exports = KodiPlayer;
})();
