var tile_size = 16;

var tile_atlas = {
    'wa':   [0,   0,  0],   //standard wall
    'do':   [16,  0,  1],   //door open
    'dc':   [32,  0,  0],   //door closed
    'wo':   [48,  0,  0],   //window open
    'wc':   [64,  0,  0],   //window closed
    'wl':   [80,  0,  0],   //wall left edge
    'wr':   [96,  0,  0],   //wall right edge
    'rc':   [112, 0,  1],   //all ways road
    'rh':   [128, 0,  1],   //horizontal road
    'rv':   [144, 0,  1],   //vertical road
    'gr':   [0,   16, 1],   //grass
    'gs':   [16,  16, 1],   //grass 2
    'br':   [32,  16, 0],   //barrel
    'ch':   [48,  16, 0],   //chest
    'wt':   [64,  16, 0],   //well top
    'wb':   [80,  16, 0],   //well bottom
    'tt':   [96,  16, 0],   //tree top
    'tb':   [112, 16, 0],   //tree bottom
    'bh':   [128, 16, 0],   //bush
    'r1':   [0,   32, 2],   //roof lower left slant
    'r3':   [16,  32, 2],   //roof upper left slant
    'r5':   [32,  32, 0],   //roof left shingles
    'r7':   [48,  32, 0],   //roof lower left wall
    'r9':   [64,  32, 0],   //roof upper left wall
    'r0':   [80,  32, 0],   //roof upper right wall
    'r8':   [96,  32, 0],   //roof lower right wall
    'r6':   [112, 32, 0],   //roof right shingles
    'r4':   [128, 32, 2],   //roof upper right slant
    'r2':   [144, 32, 2],   //roof lower right slant

    
};

var tile_map = {
    cols: 30,
    rows: 50,
    tiles: [
    'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'rv', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr',
    'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'rv', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr',
    'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'rv', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr',
    'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'rv', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr',
    'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'rv', 'gr', 'gr', 'r1', 'r3', 'r4', 'r2', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr',
    'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'r1', 'r2', 'rv', 'gr', 'gr', 'r5', 'r5', 'r6', 'r6', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr',
    'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'r3', 'r5', 'r6', 'rv', 'gr', 'gr', 'r7', 'r9', 'r0', 'r8', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr',
    'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'r7', 'r9', 'r0', 'rv', 'gr', 'tt', 'wl', 'wo', 'wo', 'wr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr',
    'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'wl', 'dc', 'wr', 'rv', 'gr', 'tb', 'wl', 'wc', 'dc', 'wr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr',
    'rh', 'rh', 'rh', 'rh', 'rh', 'rh', 'rh', 'rh', 'rh', 'rh', 'rh', 'rh', 'rc', 'rh', 'rh', 'rh', 'rh', 'rh', 'rh', 'rh', 'rh', 'rh', 'rh', 'rh', 'rh', 'rh', 'rh', 'rh', 'rh', 'rh',
    'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'rv', 'wt', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr',
    'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'rv', 'wb', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr',
    'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'rv', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr',
    'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'rv', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr',
    'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'rv', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr',
    'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'rv', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr',
    'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'rv', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr',
    'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'rv', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr',
    'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'rv', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr',
    'rh', 'rh', 'rh', 'rh', 'rh', 'rh', 'rh', 'rh', 'rh', 'rh', 'rh', 'rh', 'rc', 'rh', 'rh', 'rh', 'rh', 'rh', 'rh', 'rh', 'rh', 'rh', 'rh', 'rh', 'rh', 'rh', 'rh', 'rh', 'rh', 'rh',
    'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'rv', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr',
    'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'rv', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr',
    'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'rv', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr',
    'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'rv', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr',
    'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'rv', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr',
    'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'rv', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr',
    'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'rv', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr',
    'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'rv', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr',
    'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'rv', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr',
    'rh', 'rh', 'rh', 'rh', 'rh', 'rh', 'rh', 'rh', 'rh', 'rh', 'rh', 'rh', 'rc', 'rh', 'rh', 'rh', 'rh', 'rh', 'rh', 'rh', 'rh', 'rh', 'rh', 'rh', 'rh', 'rh', 'rh', 'rh', 'rh', 'rh',
    'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'rv', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr',
    'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'rv', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr',
    'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'rv', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr',
    'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'rv', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr',
    'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'rv', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr',
    'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'rv', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr',
    'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'rv', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr',
    'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'rv', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr',
    'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'rv', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr',
    'rh', 'rh', 'rh', 'rh', 'rh', 'rh', 'rh', 'rh', 'rh', 'rh', 'rh', 'rh', 'rc', 'rh', 'rh', 'rh', 'rh', 'rh', 'rh', 'rh', 'rh', 'rh', 'rh', 'rh', 'rh', 'rh', 'rh', 'rh', 'rh', 'rh',
    'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'rv', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr',
    'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'rv', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr',
    'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'rv', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr',
    'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'rv', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr',
    'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'rv', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr',
    'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'rv', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr',
    'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'rv', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr',
    'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'rv', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr',
    'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'rv', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr',
    'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'rv', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr', 'gr'
    ],
};

//tile sheet tiles 10x3
//wall,  door_o, door_c, window_o, window_c,  wall_l,  wall_r,   road_c,     road_h, road_v
//grass, grass2, barrel, chest,    well_t,    well_b,  tree_top, tree_trunk, bush,   water
//roof
var tile_sheet = new Image();
tile_sheet.addEventListener("load", (event) => { 
    Keyboard.listenForEvents([Keyboard.LEFT, Keyboard.RIGHT, Keyboard.UP, Keyboard.DOWN]);
    loop(); 
});
tile_sheet.src = "town_tiles.png";