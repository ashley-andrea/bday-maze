// ======= Configuration =======
// 2D array represents custom maze design (0 = path, 1 = wall)
const maze = [

    Array(49).fill(1),

    [].concat(
        [1],
        Array(6).fill(0),
        [1],
        Array(4).fill(0),
        [1],
        Array(5).fill(0),
        [1],
        Array(4).fill(0),
        [1],
        Array(24).fill(0),
        [1]
    ),

    [].concat(
        [1],
        [0],
        Array(4).fill(1),
        [0],
        [1],
        [0],
        Array(2).fill(1),
        [0],
        [1],
        [0],
        Array(3).fill(1),
        [0],
        [1],
        [0],
        Array(2).fill(1),
        [0],
        Array(7).fill(1),
        [0],
        Array(5).fill(1),
        [0],
        Array(10).fill(1),
        [0],
        [1]
    ),

    [].concat(
        [1],
        Array(4).fill(0),
        [1],
        [0],
        [1],
        Array(2).fill(0),
        Array(5).fill(1),
        [0],
        [1],
        [0],
        [1],
        [0],
        [1],
        Array(2).fill(0),
        [1],
        Array(5).fill(0),
        [1],
        [0],
        [1],
        Array(7).fill(0),
        [1],
        Array(6).fill(0),
        [1],
        [0],
        [1]
    ),

    [].concat(
        Array(6).fill(1),
        [0],
        Array(2).fill(1),
        Array(9).fill(0),
        [1],
        [0],
        Array(2).fill(1),
        [0],
        [1],
        [0],
        Array(3).fill(1),
        [0],
        [1],
        [0],
        [1],
        [0],
        Array(5).fill(1),
        [0],
        Array(4).fill(1),
        [0],
        [1],
        [0],
        [1],
        [0],
        [1]
    ),

    [].concat(
        [1],
        Array(6).fill(0),
        [1],
        Array(2).fill(0),
        Array(2).fill(1),
        [0],
        [1],
        [0],
        Array(4).fill(1),
        Array(2).fill(0),
        Array(3).fill(1),
        [0],
        [1],
        Array(5).fill(0),
        [1],
        [0],
        [1],
        Array(3).fill(0),
        [1],
        [0],
        [1],
        Array(4).fill(0),
        Array(3).fill(1),
        [0],
        [1]
    ),

    [].concat(
        [1],
        [0],
        Array(2).fill(1),
        [0],
        Array(3).fill(1),
        [0],
        Array(2).fill(1),
        Array(2).fill(0),
        [1],
        Array(4).fill(0),
        Array(2).fill(1),
        Array(2).fill(0),
        [1],
        Array(2).fill(0),
        [1],
        [0],
        Array(5).fill(1),
        [0],
        [1],
        [0],
        Array(3).fill(1),
        [0],
        Array(2).fill(1),
        [0],
        [1],
        Array(5).fill(0),
        [1]
    ),

    [].concat(
        [1],
        [0],
        [1],
        Array(3).fill(0),
        [1],
        Array(2).fill(0),
        [1],
        Array(2).fill(0),
        Array(3).fill(1),
        [0],
        [1],
        Array(2).fill(0),
        Array(2).fill(1),
        [0],
        [1],
        [0],
        Array(2).fill(1),
        Array(2).fill(0),
        [1],
        Array(4).fill(0),
        [1],
        Array(5).fill(0),
        [1],
        Array(2).fill(0),
        Array(7).fill(1)
    ),

    [].concat(
        [1],
        [0],
        Array(2).fill(1),
        [0],
        Array(2).fill(1),
        [0],
        Array(3).fill(1),
        [0],
        [1],
        Array(3).fill(0),
        Array(2).fill(1),
        Array(2).fill(0),
        [1],
        [0],
        [1],
        Array(2).fill(0),
        Array(4).fill(1),
        [0],
        Array(4).fill(1),
        [0],
        Array(6).fill(1),
        Array(3).fill(0),
        [1],
        Array(3).fill(0),
        [1]
    ),

    [].concat(
        [1],
        [0],
        [1],
        Array(2).fill(0),
        [1],
        Array(4).fill(0),
        Array(5).fill(1),
        Array(2).fill(0),
        Array(2).fill(1),
        [0],
        Array(4).fill(1),
        Array(4).fill(0),
        [1],
        [0],
        [1],
        Array(8).fill(0),
        [1],
        Array(2).fill(0),
        Array(5).fill(1),
        [0],
        [1]
    ),

    [].concat(
        [1],
        [0],
        [1],
        [0],
        Array(2).fill(1),
        [0],
        [1],
        [0],
        Array(2).fill(1),
        Array(3).fill(0),
        Array(2).fill(1),
        Array(2).fill(0),
        [1],
        Array(2).fill(0),
        [1],
        Array(2).fill(0),
        Array(5).fill(1),
        [0],
        Array(8).fill(1),
        [0],
        Array(2).fill(1),
        Array(5).fill(0),
        [1],
        [0],
        [1]
    ),

    [].concat(
        [1],
        [0],
        [1],
        Array(4).fill(0),
        Array(3).fill(1),
        Array(2).fill(0),
        [1],
        Array(2).fill(0),
        Array(2).fill(1),
        [0],
        Array(2).fill(1),
        [0],
        Array(2).fill(1),
        [0],
        [1],
        Array(3).fill(0),
        [1],
        [0],
        [1],
        [0],
        [1],
        Array(7).fill(0),
        Array(5).fill(1),
        [0],
        [1],
        [0],
        [1]
    ),

    [].concat(
        [1],
        [0],
        Array(2).fill(1),
        [0],
        Array(2).fill(1),
        Array(4).fill(0),
        Array(3).fill(1),
        Array(2).fill(0),
        [1],
        Array(2).fill(0),
        [1],
        Array(6).fill(0),
        Array(3).fill(1),
        [0],
        [1],
        [0],
        Array(5).fill(1),
        [0],
        Array(3).fill(1),
        Array(3).fill(0),
        [1],
        [0],
        [1],
        [0],
        [1]
    ),

    [].concat(
        [1],
        [0],
        [1],
        Array(2).fill(0),
        [1],
        Array(2).fill(0),
        [1],
        [0],
        Array(2).fill(1),
        [0],
        Array(2).fill(1),
        [0],
        Array(2).fill(1),
        [0],
        Array(2).fill(1),
        [0],
        Array(3).fill(1),
        [0],
        [1],
        [0],
        [1],
        Array(5).fill(0),
        [1],
        [0],
        Array(3).fill(1),
        Array(3).fill(0),
        [1],
        [0],
        Array(3).fill(1),
        [0],
        [1]
    ),

    [].concat(
        Array(3).fill(1),
        [0],
        Array(5).fill(1),
        [0],
        [1],
        Array(3).fill(0),
        [1],
        Array(2).fill(0),
        [1],
        Array(2).fill(0),
        [1],
        Array(3).fill(0),
        [1],
        Array(3).fill(0),
        Array(5).fill(1),
        [0],
        [1],
        Array(5).fill(0),
        Array(3).fill(1),
        Array(5).fill(0),
        [1]
    ),

    [].concat(
        Array(2).fill(1),
        Array(2).fill(0),
        [1],
        Array(2).fill(0),
        [1],
        Array(2).fill(0),
        [1],
        [0],
        [1],
        [0],
        Array(2).fill(1),
        [0],
        Array(6).fill(1),
        [0],
        Array(3).fill(1),
        Array(5).fill(0),
        [1],
        [0],
        Array(4).fill(1),
        [0],
        Array(2).fill(1),
        [0],
        Array(5).fill(1),
        [0],
        [1]
    ),

    [].concat(
        [1],
        Array(2).fill(0),
        Array(2).fill(1),
        [0],
        Array(2).fill(1),
        [0],
        Array(4).fill(1),
        Array(6).fill(0),
        [1],
        Array(2).fill(0),
        [1],
        Array(3).fill(0),
        Array(7).fill(1),
        [0],
        [1],
        Array(7).fill(0),
        [1],
        Array(5).fill(0),
        [1]
    ),

    [].concat(
        [1],
        [0],
        Array(2).fill(1),
        Array(2).fill(0),
        [1],
        Array(2).fill(0),
        [1],
        Array(4).fill(0),
        Array(4).fill(1),
        [0],
        Array(2).fill(1),
        [0],
        Array(3).fill(1),
        Array(3).fill(0),
        [1],
        Array(5).fill(0),
        [1],
        [0],
        Array(5).fill(1),
        [0],
        [1],
        [0],
        Array(3).fill(1),
        [0],
        [1]
    ),

    [].concat(
        [1],
        [0],
        [1],
        Array(2).fill(0),
        Array(2).fill(1),
        [0],
        Array(5).fill(1),
        [0],
        [1],
        Array(2).fill(0),
        [1],
        Array(2).fill(0),
        [1],
        Array(3).fill(0),
        Array(2).fill(1),
        [0],
        Array(2).fill(1),
        [0],
        Array(5).fill(1),
        [0],
        [1],
        Array(3).fill(0),
        Array(3).fill(1),
        [0],
        [1],
        [0],
        [1],
        [0],
        [1]
    ),

    [].concat(
        [1],
        [0],
        [1],
        [0],
        Array(2).fill(1),
        Array(2).fill(0),
        [1],
        Array(3).fill(0),
        Array(4).fill(1),
        [0],
        Array(2).fill(1),
        [0],
        Array(3).fill(1),
        Array(2).fill(0),
        [1],
        Array(10).fill(0),
        Array(3).fill(1),
        Array(5).fill(0),
        [1],
        Array(3).fill(0),
        [1]
    ),

    [].concat(
        [1],
        [0],
        [1],
        Array(4).fill(0),
        Array(2).fill(1),
        [0],
        Array(3).fill(1),
        Array(5).fill(0),
        [1],
        Array(3).fill(0),
        Array(2).fill(1),
        [0],
        Array(10).fill(1),
        Array(3).fill(0),
        Array(5).fill(1),
        [0],
        Array(5).fill(1)
    ),

    [].concat(
        [1],
        [0],
        Array(2).fill(1),
        [0],
        [1],
        Array(2).fill(0),
        [1],
        [0],
        [1],
        Array(3).fill(0),
        [1],
        [0],
        Array(3).fill(1),
        [0],
        [1],
        Array(2).fill(0),
        [1],
        Array(6).fill(0),
        [1],
        Array(3).fill(0),
        Array(3).fill(1),
        Array(5).fill(0),
        [1],
        Array(5).fill(0),
        [1]
    ),

    [].concat(
        [1],
        Array(2).fill(0),
        Array(4).fill(1),
        [0],
        [1],
        [0],
        [1],
        [0],
        Array(5).fill(1),
        Array(3).fill(0),
        Array(2).fill(1),
        [0],
        [1],
        [0],
        Array(4).fill(1),
        [0],
        [1],
        [0],
        [1],
        Array(3).fill(0),
        [1],
        [0],
        Array(3).fill(1),
        [0],
        Array(4).fill(1),
        [0],
        Array(2).fill(1)
    ),

    [].concat(
        Array(2).fill(1),
        Array(2).fill(0),
        [1],
        [0],
        [1],
        Array(3).fill(0),
        [1],
        Array(7).fill(0),
        Array(3).fill(1),
        Array(2).fill(0),
        [1],
        [0],
        [1],
        Array(2).fill(0),
        [1],
        [0],
        [1],
        [0],
        Array(3).fill(1),
        Array(3).fill(0),
        [1],
        [0],
        [1],
        [0],
        [1],
        Array(5).fill(0),
        [1]
    ),

    [].concat(
        Array(3).fill(1),
        [0],
        [1],
        [0],
        Array(2).fill(1),
        [0],
        Array(7).fill(1),
        [0],
        Array(2).fill(1),
        Array(3).fill(0),
        Array(2).fill(1),
        [0],
        Array(2).fill(1),
        [0],
        [1],
        [0],
        [1],
        Array(3).fill(0),
        Array(3).fill(1),
        [0],
        [1],
        [0],
        [1],
        [0],
        [1],
        [0],
        Array(3).fill(1),
        [0],
        [1]
    ),

    [].concat(
        [1],
        [0],
        [1],
        Array(3).fill(0),
        [1],
        Array(8).fill(0),
        [1],
        [0],
        [1],
        Array(2).fill(0),
        Array(3).fill(1),
        Array(5).fill(0),
        [1],
        [0],
        Array(3).fill(1),
        [0],
        [1],
        [0],
        Array(3).fill(1),
        [0],
        [1],
        [0],
        [1],
        Array(2).fill(0),
        [1],
        Array(2).fill(0),
        [1]
    ),

    [].concat(
        [1],
        [0],
        Array(3).fill(1),
        [0],
        Array(8).fill(1),
        [0],
        Array(3).fill(1),
        [0],
        Array(2).fill(1),
        Array(3).fill(0),
        Array(5).fill(1),
        [0],
        [1],
        Array(3).fill(0),
        [1],
        Array(5).fill(0),
        [1],
        [0],
        Array(7).fill(1)
    ),

    [].concat(
        [1],
        Array(3).fill(0),
        [1],
        [0],
        [1],
        Array(2).fill(0),
        [1],
        Array(3).fill(0),
        [1],
        Array(2).fill(0),
        [1],
        Array(5).fill(0),
        [1],
        [0],
        [1],
        Array(3).fill(0),
        [1],
        [0],
        Array(2).fill(1),
        [0],
        Array(2).fill(1),
        [0],
        Array(5).fill(1),
        Array(2).fill(0),
        [1],
        Array(4).fill(0),
        [1]
    ),

    [].concat(
        [1],
        [0],
        [1],
        [0],
        [1],
        Array(3).fill(0),
        Array(2).fill(1),
        [0],
        [1],
        [0],
        Array(2).fill(1),
        [0],
        [1],
        [0],
        Array(9).fill(1),
        [0],
        [1],
        [0],
        [1],
        Array(3).fill(0),
        [1],
        [0],
        [1],
        Array(3).fill(0),
        Array(2).fill(1),
        [0],
        [1],
        [0],
        [1],
        [0],
        Array(2).fill(1)
    ),

    [].concat(
        Array(3).fill(1),
        [0],
        Array(3).fill(1),
        Array(4).fill(0),
        Array(3).fill(1),
        Array(2).fill(0),
        [1],
        [0],
        [1],
        Array(5).fill(0),
        [1],
        [0],
        [1],
        [0],
        [1],
        [0],
        [1],
        [0],
        Array(3).fill(1),
        [0],
        Array(3).fill(1),
        Array(2).fill(0),
        [1],
        [0],
        [1],
        [0],
        [1],
        Array(2).fill(0),
        [1]
    ),

    [].concat(
        [1],
        [0],
        [1],
        Array(3).fill(0),
        Array(3).fill(1),
        Array(6).fill(0),
        Array(2).fill(1),
        [0],
        [1],
        [0],
        Array(3).fill(1),
        [0],
        [1],
        [0],
        [1],
        [0],
        [1],
        [0],
        [1],
        [0],
        [1],
        Array(3).fill(0),
        [1],
        [0],
        Array(2).fill(1),
        Array(3).fill(0),
        [1],
        [0],
        Array(4).fill(1)
    ),

    [].concat(
        [1],
        Array(3).fill(0),
        [1],
        Array(3).fill(0),
        Array(8).fill(1),
        Array(2).fill(0),
        [1],
        Array(2).fill(0),
        [1],
        Array(2).fill(0),
        [1],
        [0],
        [1],
        [0],
        [1],
        [0],
        [1],
        [0],
        [1],
        [0],
        Array(3).fill(1),
        Array(4).fill(0),
        [1],
        [0],
        [1],
        Array(4).fill(0),
        [1]
    ),

    [].concat(
        [1],
        [0],
        Array(3).fill(1),
        [0],
        [1],
        Array(2).fill(0),
        [1],
        Array(3).fill(0),
        [1],
        [0],
        Array(2).fill(1),
        [0],
        Array(2).fill(1),
        [0],
        Array(4).fill(1),
        [0],
        [1],
        [0],
        [1],
        [0],
        [1],
        [0],
        [1],
        Array(3).fill(0),
        [1],
        [0],
        [1],
        [0],
        Array(2).fill(1),
        [0],
        [1],
        [0],
        Array(4).fill(1)
    ),

    [].concat(
        [1],
        Array(3).fill(0),
        [1],
        [0],
        Array(2).fill(1),
        [0],
        [1],
        [0],
        [1],
        Array(4).fill(0),
        [1],
        Array(2).fill(0),
        [1],
        Array(8).fill(0),
        [1],
        [0],
        [1],
        Array(3).fill(0),
        [1],
        [0],
        [1],
        [0],
        [1],
        [0],
        [1],
        Array(7).fill(0),
        [1]
    ),

    [].concat(
        Array(3).fill(1),
        [0],
        [1],
        Array(2).fill(0),
        [1],
        [0],
        Array(3).fill(1),
        [0],
        Array(2).fill(1),
        [0],
        Array(2).fill(1),
        [0],
        Array(6).fill(1),
        [0],
        [1],
        [0],
        [1],
        [0],
        Array(11).fill(1),
        [0],
        Array(5).fill(1),
        [0],
        [1]
    ),

    [].concat(
        [1],
        [0],
        [1],
        [0],
        Array(2).fill(1),
        [0],
        [1],
        [0],
        [1],
        [0],
        [1],
        Array(2).fill(0),
        [1],
        Array(11).fill(0),
        [1],
        [0],
        Array(3).fill(1),
        Array(11).fill(0),
        [1],
        Array(5).fill(0),
        [1]
    ),

    [].concat(
        [1],
        [0],
        [1],
        Array(2).fill(0),
        [1],
        [0],
        [1],
        [0],
        [1],
        [0],
        Array(4).fill(1),
        [0],
        Array(9).fill(1),
        [0],
        [1],
        Array(3).fill(0),
        [1],
        [0],
        Array(17).fill(1)
    ),

    [].concat(
        [1],
        [0],
        Array(2).fill(1),
        [0],
        [1],
        [0],
        [1],
        Array(8).fill(0),
        [1],
        Array(9).fill(0),
        Array(3).fill(1),
        [0],
        [1],
        Array(18).fill(0)
    ),

    [].concat(
        [1],
        Array(4).fill(0),
        [1],
        [0],
        Array(4).fill(1),
        [0],
        Array(5).fill(1),
        [0],
        Array(9).fill(1),
        [0],
        [1],
        [0],
        Array(10).fill(1),
        [0],
        Array(8).fill(1)
    ),

    [].concat(
        Array(3).fill(1),
        Array(4).fill(0),
        [1],
        Array(7).fill(0),
        [1],
        Array(7).fill(0),
        [1],
        Array(4).fill(0),
        [1],
        Array(3).fill(0),
        [1],
        Array(6).fill(0),
        [1],
        [0],
        [1],
        Array(6).fill(0),
        [1]
    ),

    [].concat(
        [1],
        [0],
        Array(2).fill(1),
        [0],
        Array(3).fill(1),
        [0],
        Array(7).fill(1),
        [0],
        Array(5).fill(1),
        [0],
        [1],
        [0],
        [1],
        [0],
        Array(2).fill(1),
        [0],
        [1],
        [0],
        [1],
        [0],
        Array(4).fill(1),
        [0],
        [1],
        [0],
        Array(6).fill(1),
        [0],
        [1]
    ),

    [].concat(
        [1],
        Array(6).fill(0),
        [1],
        Array(3).fill(0),
        [1],
        Array(5).fill(0),
        [1],
        Array(7).fill(0),
        [1],
        [0],
        [1],
        Array(2).fill(0),
        [1],
        Array(3).fill(0),
        [1],
        Array(4).fill(0),
        [1],
        Array(8).fill(0),
        [1]
    ),

    [].concat(Array(12).fill(1), [0], Array(36).fill(1)),
];


// Correct path
const correctPath = [
    { x: 12, y: 42 },
    { x: 12, y: 41 },
    { x: 13, y: 41 },
    { x: 14, y: 41 },
    { x: 15, y: 41 },
    { x: 16, y: 41 },
    { x: 16, y: 40 },
    { x: 16, y: 39 },
    { x: 17, y: 39 },
    { x: 17, y: 38 },
    { x: 17, y: 37 },
    { x: 18, y: 37 },
    { x: 19, y: 37 },
    { x: 20, y: 37 },
    { x: 21, y: 37 },
    { x: 22, y: 37 },
    { x: 23, y: 37 },
    { x: 24, y: 37 },
    { x: 25, y: 37 },
    { x: 25, y: 36 },
    { x: 25, y: 35 },
    { x: 24, y: 35 },
    { x: 23, y: 35 },
    { x: 22, y: 35 },
    { x: 21, y: 35 },
    { x: 20, y: 35 },
    { x: 19, y: 35 },
    { x: 18, y: 35 },
    { x: 18, y: 34 },
    { x: 18, y: 33 },
    { x: 17, y: 33 },
    { x: 17, y: 32 },
    { x: 17, y: 31 },
    { x: 17, y: 30 },
    { x: 17, y: 29 },
    { x: 17, y: 28 },
    { x: 17, y: 27 },
    { x: 18, y: 27 },
    { x: 18, y: 26 },
    { x: 18, y: 25 },
    { x: 19, y: 25 },
    { x: 19, y: 24 },
    { x: 20, y: 24 },
    { x: 21, y: 24 },
    { x: 21, y: 23 },
    { x: 22, y: 23 },
    { x: 22, y: 22 },
    { x: 22, y: 21 },
    { x: 21, y: 21 },
    { x: 21, y: 20 },
    { x: 20, y: 20 },
    { x: 19, y: 20 },
    { x: 19, y: 19 },
    { x: 19, y: 18 },
    { x: 18, y: 18 },
    { x: 18, y: 17 },
    { x: 18, y: 16 },
    { x: 17, y: 16 },
    { x: 16, y: 16 },
    { x: 16, y: 15 },
    { x: 16, y: 14 },
    { x: 15, y: 14 },
    { x: 15, y: 13 },
    { x: 15, y: 12 },
    { x: 14, y: 12 },
    { x: 14, y: 11 },
    { x: 13, y: 11 },
    { x: 13, y: 10 },
    { x: 12, y: 10 },
    { x: 11, y: 10 },
    { x: 11, y: 11 },
    { x: 10, y: 11 },
    { x: 10, y: 12 },
    { x: 9, y: 12 },
    { x: 9, y: 13 },
    { x: 9, y: 14 },
    { x: 9, y: 15 },
    { x: 8, y: 15 },
    { x: 8, y: 16 },
    { x: 8, y: 17 },
    { x: 7, y: 17 },
    { x: 7, y: 18 },
    { x: 7, y: 19 },
    { x: 6, y: 19 },
    { x: 6, y: 20 },
    { x: 6, y: 21 },
    { x: 7, y: 21 },
    { x: 7, y: 22 },
    { x: 7, y: 23 },
    { x: 8, y: 23 },
    { x: 8, y: 24 },
    { x: 8, y: 25 },
    { x: 9, y: 25 },
    { x: 10, y: 25 },
    { x: 11, y: 25 },
    { x: 12, y: 25 },
    { x: 13, y: 25 },
    { x: 14, y: 25 },
    { x: 14, y: 26 },
    { x: 14, y: 27 },
    { x: 15, y: 27 },
    { x: 15, y: 28 },
    { x: 15, y: 29 },
    { x: 14, y: 29 },
    { x: 14, y: 30 },
    { x: 13, y: 30 },
    { x: 12, y: 30 },
    { x: 11, y: 30 },
    { x: 10, y: 30 },
    { x: 9, y: 30 },
    { x: 9, y: 29 },
    { x: 8, y: 29 },
    { x: 7, y: 29 },
    { x: 7, y: 28 },
    { x: 6, y: 28 },
    { x: 5, y: 28 },
    { x: 5, y: 27 },
    { x: 5, y: 26 },
    { x: 5, y: 25 },
    { x: 4, y: 25 },
    { x: 3, y: 25 },
    { x: 3, y: 24 },
    { x: 3, y: 23 },
    { x: 2, y: 23 },
    { x: 2, y: 22 },
    { x: 1, y: 22 },
    { x: 1, y: 21 },
    { x: 1, y: 20 },
    { x: 1, y: 19 },
    { x: 1, y: 18 },
    { x: 1, y: 17 },
    { x: 1, y: 16 },
    { x: 2, y: 16 },
    { x: 2, y: 15 },
    { x: 3, y: 15 },
    { x: 3, y: 14 },
    { x: 3, y: 13 },
    { x: 4, y: 13 },
    { x: 4, y: 12 },
    { x: 4, y: 11 },
    { x: 5, y: 11 },
    { x: 6, y: 11 },
    { x: 6, y: 10 },
    { x: 6, y: 9 },
    { x: 7, y: 9 },
    { x: 7, y: 8 },
    { x: 7, y: 7 },
    { x: 8, y: 7 },
    { x: 8, y: 6 },
    { x: 8, y: 5 },
    { x: 9, y: 5 },
    { x: 9, y: 4 },
    { x: 10, y: 4 },
    { x: 11, y: 4 },
    { x: 12, y: 4 },
    { x: 13, y: 4 },
    { x: 14, y: 4 },
    { x: 14, y: 5 },
    { x: 14, y: 6 },
    { x: 15, y: 6 },
    { x: 16, y: 6 },
    { x: 17, y: 6 },
    { x: 17, y: 7 },
    { x: 18, y: 7 },
    { x: 18, y: 8 },
    { x: 19, y: 8 },
    { x: 19, y: 9 },
    { x: 19, y: 10 },
    { x: 20, y: 10 },
    { x: 20, y: 11 },
    { x: 20, y: 12 },
    { x: 21, y: 12 },
    { x: 21, y: 13 },
    { x: 21, y: 14 },
    { x: 22, y: 14 },
    { x: 23, y: 14 },
    { x: 23, y: 15 },
    { x: 23, y: 16 },
    { x: 24, y: 16 },
    { x: 25, y: 16 },
    { x: 25, y: 17 },
    { x: 26, y: 17 },
    { x: 26, y: 18 },
    { x: 26, y: 19 },
    { x: 27, y: 19 },
    { x: 28, y: 19 },
    { x: 29, y: 19 },
    { x: 30, y: 19 },
    { x: 31, y: 19 },
    { x: 32, y: 19 },
    { x: 33, y: 19 },
    { x: 34, y: 19 },
    { x: 35, y: 19 },
    { x: 35, y: 20 },
    { x: 36, y: 20 },
    { x: 37, y: 20 },
    { x: 37, y: 21 },
    { x: 38, y: 21 },
    { x: 39, y: 21 },
    { x: 40, y: 21 },
    { x: 41, y: 21 },
    { x: 41, y: 22 },
    { x: 41, y: 23 },
    { x: 41, y: 24 },
    { x: 41, y: 25 },
    { x: 41, y: 26 },
    { x: 41, y: 27 },
    { x: 42, y: 27 },
    { x: 42, y: 28 },
    { x: 42, y: 29 },
    { x: 42, y: 30 },
    { x: 42, y: 31 },
    { x: 42, y: 32 },
    { x: 42, y: 33 },
    { x: 41, y: 33 },
    { x: 41, y: 34 },
    { x: 41, y: 35 },
    { x: 40, y: 35 },
    { x: 39, y: 35 },
    { x: 38, y: 35 },
    { x: 37, y: 35 },
    { x: 36, y: 35 },
    { x: 35, y: 35 },
    { x: 34, y: 35 },
    { x: 33, y: 35 },
    { x: 32, y: 35 },
    { x: 31, y: 35 },
    { x: 31, y: 36 },
    { x: 31, y: 37 },
    { x: 32, y: 37 },
    { x: 33, y: 37 },
    { x: 34, y: 37 },
    { x: 35, y: 37 },
    { x: 36, y: 37 },
    { x: 37, y: 37 },
    { x: 38, y: 37 },
    { x: 39, y: 37 },
    { x: 40, y: 37 },
    { x: 41, y: 37 },
    { x: 42, y: 37 },
    { x: 43, y: 37 },
    { x: 44, y: 37 },
    { x: 45, y: 37 },
    { x: 46, y: 37 },
    { x: 47, y: 37 },
    { x: 48, y: 37 },
];


// Setup variables and assets
const tileSize = 15; // adjust to fit character size
const rows = maze.length;
const cols = maze[0].length;
const canvas = document.getElementById("mazeCanvas");
canvas.width = cols * tileSize;
canvas.height = rows * tileSize;
const ctx = canvas.getContext("2d");

// goal heart image
const heartImage = new Image();
heartImage.src = "assets/Purple heart.PNG"; // image at end tile


// Character control and animation
let player = { x: correctPath[0].x, y: correctPath[0].y };
let direction = "down"; // left, right, up, down
let frameIndex = 0;
const frameCount = 4; // number of frames per direction
let gameEnded = false;

function drawPlayer() {
    const centerX = player.x * tileSize + tileSize / 2;
    const centerY = player.y * tileSize + tileSize / 2;
    const radius = tileSize / 3;

    ctx.fillStyle = "purple";
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    ctx.fill();
}


// Maze drawing
function drawMaze() {
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      ctx.fillStyle = maze[y][x] === 1 ? "#313715" : "#BACA70";
      ctx.fillRect(x * tileSize, y * tileSize, tileSize, tileSize);
    }
  }

  const last = correctPath[correctPath.length - 1];
  if (!gameEnded) {
    ctx.drawImage(
      heartImage,
      last.x * tileSize, last.y * tileSize,
      tileSize, tileSize
    );
  }
}


// Movement & game logic
function move(dx, dy) {
    const newX = player.x + dx;
    const newY = player.y + dy;
    if (
      newX >= 0 && newX < cols &&
      newY >= 0 && newY < rows &&
      maze[newY][newX] === 0
    ) {
      player.x = newX;
      player.y = newY;
    }
  }
  
function reachedEnd() {
    const last = correctPath[correctPath.length - 1];
    return player.x === last.x && player.y === last.y;
}

function endGame() {
    gameEnded = true;
    revealIndex = 0;          // start from zero
    const interval = setInterval(() => {
      revealIndex++;
      if (revealIndex >= correctPath.length) {
        clearInterval(interval);
      }
    }, 50);
  }
  

// Shared reveal index:
let revealIndex = 0;
let pulseAngle = 0;

// Draw all currently revealed glow tiles
function drawReveal() {
    if (revealIndex <= 0) return;
  
    ctx.save();
    ctx.fillStyle   = "lime";
    ctx.shadowColor = "lime";
  
    // base blur for reveal
    const baseBlur = tileSize * 0.6;
  
    // if fully revealed, add pulse
    let blur = baseBlur;
    if (revealIndex >= correctPath.length) {
      blur += Math.sin(pulseAngle) * (baseBlur * 0.4); 
      // adjust 0.4 to control pulse amplitude
    }
    ctx.shadowBlur = blur;
  
    // draw all the revealed tiles
    for (let i = 0; i < revealIndex; i++) {
      const { x, y } = correctPath[i];
      ctx.fillRect(x * tileSize, y * tileSize, tileSize, tileSize);
    }
    ctx.restore();
  }  


// Game loop
function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  
    drawMaze();
  
    if (gameEnded) {
      drawReveal();
    } else {
      drawPlayer();
      if (reachedEnd()) endGame();
    }
  
    // pulse updater
    if (gameEnded && revealIndex >= correctPath.length) {
      pulseAngle += 0.05;
    }
  
    requestAnimationFrame(gameLoop);
  }
  
  
// Key controls
document.addEventListener("keydown", (e) => {
    if (gameEnded) return;
    switch (e.key) {
      case "ArrowUp": move(0, -1, "up"); break;
      case "ArrowDown": move(0, 1, "down"); break;
      case "ArrowLeft": move(-1, 0, "left"); break;
      case "ArrowRight": move(1, 0, "right"); break;
    }
  });


// Game initialization (wait for all images to load before starting)
document.addEventListener('DOMContentLoaded', () => {
    if (!window.myApp) {
        console.error("window.myApp is not defined!");
        return;
    }

    // Handle "Minimize" and "Close" buttons
    const closeBtn = document.getElementById("close-maze");
    const minimizeBtn = document.getElementById("minimize-maze");

    if (closeBtn) {
        closeBtn.addEventListener("click", () => {
            window.myApp.close();
        });
    }

    if (minimizeBtn) {
        minimizeBtn.addEventListener("click", () => {
            window.myApp.minimize();
        });
    }

    heartImage.onload = () => gameLoop();
});
