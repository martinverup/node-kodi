(function() {
    var KodiSystem = function(delegate) {
        this.delegate = delegate;
    };

    KodiSystem.prototype.ejectOpticalDrive = function() {
        return this.delegate.rpc('System.EjectOpticalDrive').then(function(r) {
            return r.result;
        });
    };

    KodiSystem.prototype.getProperties = function(params) {
        params = params || {};
        params.properties = params.properties || ["canshutdown", "cansuspend", "canhibernate", "canreboot"]; //default
        return this.delegate.rpc('System.GetProperties', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };

    KodiSystem.prototype.hibernate = function() {
        return this.delegate.rpc('System.Hibernate').then(function(r) {
            return r.result;
        });
    };

    KodiSystem.prototype.reboot = function() {
        return this.delegate.rpc('System.Reboot').then(function(r) {
            return r.result;
        });
    };

    KodiSystem.prototype.shutdown = function() {
        return this.delegate.rpc('System.Shutdown').then(function(r) {
            return r.result;
        });
    };

    KodiSystem.prototype.suspend = function() {
        return this.delegate.rpc('System.Suspend').then(function(r) {
            return r.result;
        });
    };

    module.exports = KodiSystem;
})();
