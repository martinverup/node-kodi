(function() {
    var KodiAddons = function(delegate) {
        this.delegate = delegate;
    };

    KodiAddons.prototype.executeAddon = function(params) {
        if (typeof(params) == 'string') {
            params = {
                "addonid": params
            };
        }
        params = params || {};
        params.addonid = params.addonid || ""; //default
        return this.delegate.rpc('Addons.ExecuteAddon', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };

    KodiAddons.prototype.getAddonDetails = function(params) {
        if (typeof(params) == 'string') {
            params = {
                "addonid": params
            };
        }
        params = params || {};
        params.addonid = params.addonid || ""; //default
        params.properties = params.properties || ["name", "version", "enabled"]; //default
        return this.delegate.rpc('Addons.GetAddonDetails', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };

    KodiAddons.prototype.getAddons = function(params) {
        if (typeof(params) == 'boolean') {
            params = {
                "enabled": params
            };
        }
        params = params || {};
        params.enabled = params.enabled || "all";
        params.properties = params.properties || ["name", "version", "enabled"]; //default
        return this.delegate.rpc('Addons.GetAddons', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };

    KodiAddons.prototype.setAddonEnabled = function(params) {
        if (typeof(params) == 'string') {
            params = {
                "addonid": params
            };
        }
        params = params || {};
        params.addonid = params.addonid || ""; //default
        params.enabled = params.enabled || "toggle" //default
        return this.delegate.rpc('Addons.SetAddonEnabled', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };

    module.exports = KodiAddons;
})();
