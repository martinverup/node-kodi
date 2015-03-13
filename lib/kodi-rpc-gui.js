(function() {
    var KodiGUI = function(delegate) {
        this.delegate = delegate;
    };

    KodiGUI.prototype.activateWindow = function(params) {
        if (typeof(params) == 'string') {
            params = {
                "window": params
            };
        }
        params = params || {};
        params.window = params.window || "home"; //default
        return this.delegate.rpc('GUI.ActivateWindow', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };

    KodiGUI.prototype.getProperties = function(params) {
        if (params instanceof Array) {
            params = {
                "properties": params
            };
        }
        params = params || {};
        params.properties = params.properties || ["currentwindow", "currentcontrol", "skin", "fullscreen"]; //default
        return this.delegate.rpc('GUI.GetProperties', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };

    KodiGUI.prototype.setFullscreen = function(params) {
        if (typeof(params) == 'boolean') {
            params = {
                "fullscreen": params
            };
        }
        params = params || {};
        params.fullscreen = params.fullscreen || "toggle"; //default
        return this.delegate.rpc('GUI.SetFullscreen', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };

    KodiGUI.prototype.showNotification = function(params) {
        if (typeof(params) == 'string') {
            params = {
                "message": params
            };
        }
        params = params || {};
        params.title = params.title || "Notification"; //default
        params.message = params.message || ""; //default
        return this.delegate.rpc('GUI.ShowNotification', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };

    module.exports = KodiGUI;
})();
