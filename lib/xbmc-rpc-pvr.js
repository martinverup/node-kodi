(function() {
    var KodiPVR = function(delegate) {
        this.delegate = delegate;
    };

    KodiPVR.prototype.getChannelDetails = function(params) {
        if (typeof(params) == 'number') {
            params = {
                "channelid": params
            };
        }
        params = params || {};
        params.properties = params.properties || ["thumbnail", "channeltype", "hidden", "locked", "channel", "lastplayed"]; //default
        return this.delegate.rpc('PVR.GetChannelDetails', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };

    KodiPVR.prototype.getChannelGroupDetails = function(params) {
        if (typeof(params) == 'number') {
            params = {
                "channelgroupid": params
            };
        }
        params = params || {};
        params.properties = params.properties || ["thumbnail", "channeltype", "hidden", "locked", "channel", "lastplayed"]; //default
        return this.delegate.rpc('PVR.GetChannelGroupDetails', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };

    KodiPVR.prototype.getChannelGroups = function(params) {
        if (typeof(params) == 'string') {
            params = {
                "channeltype": params
            };
        }
        params = params || {};
        params.channeltype = params.channeltype || "tv"; //default
        return this.delegate.rpc('PVR.GetChannelGroups', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };

    KodiPVR.prototype.getChannels = function(params) {
        if (typeof(params) == 'string' || typeof(params) == 'number') {
            params = {
                "channelgroupid": params
            };
        }
        params = params || {};
        params.channelgroupid = params.channelgroupid || "alltv"; //default
        params.properties = params.properties || ["thumbnail", "channeltype", "hidden", "locked", "channel", "lastplayed"]; //default
        return this.delegate.rpc('PVR.GetChannels', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };

    KodiPVR.prototype.getProperties = function(params) {
        if (typeof(params) == 'string') {
            params = {
                "properties": [params]
            };
        } else if (params instanceof Array) {
            params = {
                "properties": params
            };
        }
        params = params || {};
        params.properties = params.properties || ["available", "recording", "scanning"]; //default
        return this.delegate.rpc('PVR.GetProperties', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };

    KodiPVR.prototype.record = function(params) {
        if (typeof(params) == 'boolean') {
            params = {
                "record": params
            };
        }
        params = params || {};
        params.record = params.record || "toggle"; //default
        params.channel = params.channel || "current"; //default
        return this.delegate.rpc('PVR.Record', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };

    KodiPVR.prototype.scan = function() {
        return this.delegate.rpc('PVR.Scan').then(function(r) {
            return r.result;
        });
    };

    module.exports = KodiPVR;
})();
