
var canvas = document.getElementById("my-canvas");
var context = canvas.getContext("2d");

var floor = canvas.height - 25;

var acc = .5;
var jump_v = acc * 25;
var max_v = 10;

var player = {
    height: 32,
    width: 32,
    jumping: true,
    x_pos: 10,
    y_pos: 10,
    x_vel: 0,
    y_vel: 0,
    update: function() {
        //handle lateral movement
        this.x_vel *= 0.95;
        if (Keyboard.isDown(Keyboard.LEFT)) {this.x_vel -= acc};
        if (Keyboard.isDown(Keyboard.RIGHT)) {this.x_vel += acc};
        if (this.x_vel > max_v) {this.x_vel = max_v};
        if (this.x_vel < -1 * max_v) {this.x_vel = -1 * max_v};

        if (this.x_pos + this.width < 0) {
            this.x_pos = canvas.width;
        } else if (this.x_pos > canvas.width) {
            this.x_pos = 0 -  this.width;          
        }
        this.x_pos += this.x_vel;



        //gravity and floor colision
        if (this.y_pos + this.height >= floor) {
            this.y_pos = floor - this.height;
            this.y_vel = 0;
            this.jump = false;
        } else {
            this.y_vel += acc;
        }

        

        //platform collision
        for (let i=0; i < platforms.list.length; i++) {
            let r = platforms.list[i];
            if (this.x_pos > r.x - this.width && this.x_pos < r.x + r.width) {
                if (this.y_pos + this.height >= r.y &&
                    this.y_pos + this.height - this.y_vel <= r.y ) {
                    this.y_vel = 0;
                    this.y_pos = r.y - this.height;
                    this.jump = false;
                } 
            }
        }
        //jump
        if (this.jump == false && Keyboard.isDown(Keyboard.UP)) {
            console.log('Jump! ['+Math.round(this.x_pos)+', '+Math.round(this.y_pos)+']');
            this.jump = true;
            this.y_vel = -1 * jump_v;
        }

        this.y_pos += this.y_vel;
        //console.log(Math.round(this.x_vel) + ", " + Math.round(this.y_vel));
    },
};

var Keyboard = {
    LEFT: 37,
    RIGHT: 39,
    UP: 38,
    DOWN: 40,
    _keys: {},
};

Keyboard.listenForEvents = function (keys) {
    window.addEventListener('keydown', this._onKeyDown.bind(this));
    window.addEventListener('keyup', this._onKeyUp.bind(this));

    keys.forEach(function (key) {
        this._keys[key] = false;
    }.bind(this));
};

Keyboard._onKeyDown = function (event) {
    var keyCode = event.keyCode;
    if (keyCode in this._keys) {
        event.preventDefault();
        this._keys[keyCode] = true;
    }
};

Keyboard._onKeyUp = function (event) {
    var keyCode = event.keyCode;
    if (keyCode in this._keys) {
        event.preventDefault();
        this._keys[keyCode] = false;
    }
};

Keyboard.isDown = function (keyCode) {
    if (!keyCode in this._keys) {
        throw new Error('Keycode ' + keyCode + ' is not being listened to');
    }
    return this._keys[keyCode];
};


var platforms = {
    list: [],
    add: function(x, y, w, h) {this.list.push({x:x, y:y, width:w, height:h})},
    remove: function(index) {this.list.splice(index,1)},
    draw: function() {
        for (let i=0; i<this.list.length;i++) {
            let r = this.list[i];
            context.beginPath();
            context.rect(r.x, r.y, r.width, r.height);
            context.fillStyle = 'rgba(0, 200, 0, 1.0)';
            context.fill();
        }
    }

};

platforms.add(200,200,100,25);
platforms.add(50,250,100,25);





function draw(obj, ctx) {
    ctx.beginPath();
    ctx.rect(obj.x_pos, obj.y_pos, obj.width, obj.height);
    ctx.fillStyle = 'rgba(0, 0, 255, 0.75)';
    ctx.fill();
    ctx.closePath();
}


Keyboard.listenForEvents([Keyboard.LEFT, Keyboard.RIGHT, Keyboard.UP]);





function gameLoop() {
    window.requestAnimationFrame(gameLoop);
   
    
    context.rect(0, 0, canvas.width, canvas.height);
    context.fillStyle = 'rgba(128,128,128,1)';
    context.fill();

    context.beginPath();
    context.rect(0, floor, canvas.width, 100);
    context.fillStyle = 'rgba(0, 200, 0, 1.0)';
    context.fill();

    player.update();
    platforms.draw();
    draw(player, context);
    //console.log(Keyboard._keys);

    //display text
    let p = document.getElementById("display_text")
    p.innerHTML = (
        "player x pos: " + Math.round(player.x_pos) + "<br/>" +
        "player y pos: " + Math.round(player.y_pos) + "<br/>" +
        "player x vel: " + Math.round(player.x_vel) + "<br/>" +
        "player y vel: " + Math.round(player.y_vel) + "<br/>"
    );
    for (let i=0; i < platforms.list.length; i++) {
        let r = platforms.list[i];
        p.innerHTML = p.innerHTML + "<br>platform " + i + " is at [" + r.x + ", " + r.y + "]";
    }
    
}

gameLoop();

