class Color {
    _attributes = {
        _red: 0,
        _green: 0,
        _blue: 0,
        _transparency: 0.0,
        _rgb: '',
    };

    constructor(rgb: String) {}

    get rgba(): String {
        return [
            `rgba(${this.red}`,
            this.green,
            this.blue,
            `${this.transparency})`,
        ].join(',');
    }

    get rgb(): String {
        return this._attributes._rgb;
    }

    get red(): number {
        return this._attributes._red;
    }

    get green(): number {
        return this._attributes._green;
    }

    get blue(): number {
        return this._attributes._blue;
    }

    get transparency(): number {
        return this._attributes._transparency;
    }

    set red(r: number) {
        this._attributes._red = r;
    }

    set green(g: number) {
        this._attributes._green = g;
    }

    set blue(b: number) {
        this._attributes._blue = b;
    }
}
