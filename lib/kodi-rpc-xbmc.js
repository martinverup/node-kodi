(function() {
    var KodiKodi = function(delegate) {
        this.delegate = delegate;
    };

    KodiKodi.prototype.getInfoBooleans = function(params) {
        if (typeof(params) == 'string') {
            params = {
                "booleans": [params]
            };
        } else if (params instanceof Array) {
            params = {
                "booleans": params
            };
        }
        params = params || {};
        params.booleans = params.booleans || ["Network.IPAddress"]; //default
        return this.delegate.rpc('Kodi.GetInfoBooleans', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };

    KodiKodi.prototype.getInfoLabels = function(params) {
        if (typeof(params) == 'string') {
            params = {
                "labels": [params]
            };
        } else if (params instanceof Array) {
            params = {
                "labels": params
            };
        }
        params = params || {};
        params.labels = params.labels || ["Network.IPAddress"]; //default
        return this.delegate.rpc('Kodi.GetInfoLabels', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };

    module.exports = KodiKodi;
})();
