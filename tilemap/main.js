

const Player = function(x, y) {
    this.x = x; this.y = y;
};



var context = document.getElementById("myCanvas").getContext("2d");

var player = new Player(160, 160);
player.symbol = 'br';
player.speed = 2;
player.update = function(scale, logic_grid) {
    if (Keyboard.isDown(Keyboard.LEFT)) {this.x -= this.speed;}
    if (Keyboard.isDown(Keyboard.RIGHT)) {this.x += this.speed;}
    if (Keyboard.isDown(Keyboard.UP)) {this.y -= this.speed;}
    if (Keyboard.isDown(Keyboard.DOWN)) {this.y += this.speed;}
    
    if (this.x < 0) {this.x = 0}
    if (this.y < 0) {this.y = 0}
    
    let ptile = Math.floor(this.y / scale) * tile_map.cols + Math.floor(this.x / scale);
    //top left corner check
    if (logic_grid[ptile] == 0) {
        let x_prt = scale - (this.x % scale);
        let y_prt = scale - (this.y % scale);
        if (x_prt < scale/2 || y_prt < scale/2) {
            if (x_prt < y_prt) {
                player.x += x_prt+1;
            } else {
                player.y += y_prt+1;
            } 
        }
    } 
    //top right corner check
    if (logic_grid[ptile+1] == 0) {
        let x_prt = (this.x % scale);
        let y_prt = scale - (this.y % scale);
        if (x_prt < scale/2 || y_prt < scale/2) {
            if (x_prt < y_prt) {
                player.x -= x_prt+1;
            } else {
                player.y += y_prt+1;
            } 
        }
    }
    
    //bottom left corner check
    if (logic_grid[ptile+tile_map.cols] == 0) {
        let x_prt = scale - (this.x % scale);
        let y_prt = (this.y % scale);
        if (x_prt < scale/2 || y_prt < scale/2) {
            if (x_prt < y_prt) {
                player.x += x_prt+1;
            } else {
                player.y -= y_prt+1;
            } 
        }
    }

    //bottom right corner check
    if (logic_grid[ptile+tile_map.cols+1] == 0) {
        let x_prt = (this.x % scale);
        let y_prt = (this.y % scale);
        if (x_prt < scale/2 || y_prt < scale/2) {
            if (x_prt < y_prt) {
                player.x -= x_prt+1;
            } else {
                player.y -= y_prt+1;
            } 
        }
    }
}



function loop() {

        window.requestAnimationFrame(loop);

        var h = document.documentElement.clientHeight;
        var w = document.documentElement.clientWidth;
        var scale_h = Math.floor(h / tile_map.rows);
        var scale_w = Math.floor(w / tile_map.cols);

        context.canvas.height = h;
        context.canvas.width = w;

        var scale = 32;
        scale_h = scale;
        scale_w = scale;

        context.imageSmoothingEnabled = false;

        var logic_grid = []

        for (let y = 0; y < tile_map.rows; y++) {
            for (let x = 0; x < tile_map.cols; x ++) {
                let tile_index = y * tile_map.cols + x;
                let tile_val = tile_map.tiles[tile_index];
                context.drawImage(
                    tile_sheet, 
                    tile_atlas[tile_val][0],tile_atlas[tile_val][1], 
                    tile_size, tile_size, 
                    x * scale_w, y * scale_h, scale_w, scale_h
                );
                logic_grid[tile_index] = tile_atlas[tile_val][2]
            }
        }

        context.drawImage(tile_sheet, tile_atlas[player.symbol][0], tile_atlas[player.symbol][1], tile_size, tile_size, player.x, player.y, scale_w, scale_h);

        //console.log(Keyboard._keys);

        player.update(scale, logic_grid);

    }

    