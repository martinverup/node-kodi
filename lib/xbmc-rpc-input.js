(function() {
    var KodiInput = function(delegate) {
        this.delegate = delegate;
    };

    KodiInput.prototype.back = function() {
        return this.delegate.rpc('Input.Back').then(function(r) {
            return r.result;
        });
    };

    KodiInput.prototype.contextMenu = function() {
        return this.delegate.rpc('Input.ContextMenu').then(function(r) {
            return r.result;
        });
    };

    KodiInput.prototype.down = function() {
        return this.delegate.rpc('Input.Down').then(function(r) {
            return r.result;
        });
    };

    KodiInput.prototype.executeAction = function(params) {
        if (typeof(params) == 'string') {
            params = {
                "action": params
            };
        }
        params = params || {};
        params.action = params.action || "left"; //default
        return this.delegate.rpc('Input.ExecuteAction', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };

    KodiInput.prototype.home = function() {
        return this.delegate.rpc('Input.Home').then(function(r) {
            return r.result;
        });
    };

    KodiInput.prototype.info = function() {
        return this.delegate.rpc('Input.Info').then(function(r) {
            return r.result;
        });
    };

    KodiInput.prototype.left = function() {
        return this.delegate.rpc('Input.Left').then(function(r) {
            return r.result;
        });
    };

    KodiInput.prototype.right = function() {
        return this.delegate.rpc('Input.Right').then(function(r) {
            return r.result;
        });
    };

    KodiInput.prototype.select = function() {
        return this.delegate.rpc('Input.Select').then(function(r) {
            return r.result;
        });
    };

    KodiInput.prototype.sendText = function(params) {
        if (typeof(params) == 'string') {
            params = {
                "text": params
            };
        }
        params = params || {};
        params.text = params.text || ""; //default
        params.done = params.done || true;
        return this.delegate.rpc('Input.SendText', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };

    KodiInput.prototype.showCodec = function() {
        return this.delegate.rpc('Input.ShowCodec').then(function(r) {
            return r.result;
        });
    };

    KodiInput.prototype.showOSD = function() {
        return this.delegate.rpc('Input.ShowOSD').then(function(r) {
            return r.result;
        });
    };

    KodiInput.prototype.up = function() {
        return this.delegate.rpc('Input.Up').then(function(r) {
            return r.result;
        });
    };

    module.exports = KodiInput;
})();
