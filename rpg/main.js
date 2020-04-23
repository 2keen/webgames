var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

//bg images
var Loader = {
    images: {}
};

Laoder.loadImage = function (key, src) {
    var img = new Image();
    var d = new Promise(function (resolve, reject) {
        img.onload = function () {
            this.images[key] = img;
            resolve(img);
        }.bind(this);
        img.onerror = function() {
            reject('Could not load image: ', src);
        };
    }.bind(this));
    img.src = src;
    return d;
}
Loader.getImage = function (key) {
    return (key in this.images) ? this.images[key] : null;
};



var atlas = {
    'g': [0,16], //1: grass
    '+': [112,0], //2: all ways road
    '-': [128,0], //3: horizontal road
    '|': [144,0], //4: vertical road
    
}
var townMap = {
        cols: 16,
        rows: 10,
        tsize: 256,
        tiles: [
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1,
            3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 3, 3, 3,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1,
        ],
        getTile: function(col, row) {
            return this.tiles[row * townMap.cols + col];
        }
};

Game.load = function () {
    return [
        Loader.loadImage('tiles', '../assets/tiles.png')
    ];
};





