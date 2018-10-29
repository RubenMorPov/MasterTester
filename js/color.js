var Color = /** @class */ (function () {
    function Color(rgb) {
        this._attributes = {
            _red: 0,
            _green: 0,
            _blue: 0,
            _transparency: 0.0,
            _rgb: '',
        };
    }
    Object.defineProperty(Color.prototype, "rgba", {
        get: function () {
            return [
                "rgba(" + this.red,
                this.green,
                this.blue,
                this.transparency + ")",
            ].join(',');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color.prototype, "rgb", {
        get: function () {
            return this._attributes._rgb;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color.prototype, "red", {
        get: function () {
            return this._attributes._red;
        },
        set: function (r) {
            this._attributes._red = r;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color.prototype, "green", {
        get: function () {
            return this._attributes._green;
        },
        set: function (g) {
            this._attributes._green = g;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color.prototype, "blue", {
        get: function () {
            return this._attributes._blue;
        },
        set: function (b) {
            this._attributes._blue = b;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color.prototype, "transparency", {
        get: function () {
            return this._attributes._transparency;
        },
        enumerable: true,
        configurable: true
    });
    return Color;
}());
