//constants.js
const COLS = 10;
const ROWS = 20;
const BLOCK_SIZE = 30;

//main.js
const canvas = document.getElementById('board');
const ctx = canvas.getContext('2d');
 
// Calculate size of canvas from constants.
ctx.canvas.width = COLS * BLOCK_SIZE;
ctx.canvas.height = ROWS * BLOCK_SIZE;
 
// Scale blocks
ctx.scale(BLOCK_SIZE, BLOCK_SIZE);

// Set up the board
let columnHeights = [];
let blocksInAllRows = [];
let grid = [];