var Serie = /** @class */ (function () {
    function Serie(ISNB, titulo, autor, numPaginas) {
        this.ISNB = ISNB;
        this.titulo = titulo;
        this.autor = autor;
        this.numPaginas = numPaginas;
    }
    Object.defineProperty(Serie.prototype, "setISNB", {
        set: function (ISNB) {
            this.ISNB = ISNB;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Serie.prototype, "getISNB", {
        get: function () {
            return this.ISNB;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Serie.prototype, "setTitulo", {
        set: function (titulo) {
            this.titulo = titulo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Serie.prototype, "getTitulo", {
        get: function () {
            return this.titulo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Serie.prototype, "setAutor", {
        set: function (autor) {
            this.autor = autor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Serie.prototype, "getAutor", {
        get: function () {
            return this.autor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Serie.prototype, "setNumPaginas", {
        set: function (numPaginas) {
            this.numPaginas = numPaginas;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Serie.prototype, "getNumPaginas", {
        get: function () {
            return this.numPaginas;
        },
        enumerable: false,
        configurable: true
    });
    Serie.prototype.toString = function () {
        return "El libro " + this.titulo + " con ISBN " + this.ISNB + " creado por el autor " + this.autor + " tiene " + this.numPaginas + " paginas ";
    };
    return Serie;
}());
var libro1 = new Serie(1234, "Guerra", "Luke Skywalker", 44);
var libro2 = new Serie(3333, "League", "Caitlyn", 666);
if (libro1.getNumPaginas >= libro2.getNumPaginas) {
    console.log("el libro " + libro1.getTitulo + " tiene mas paginas");
}
else {
    console.log("El libro " + libro2.getTitulo + " tiene mas paginas ");
}
