// BASED ON OlD WORK, ORIGINALLY POSTED HERE: https://github.com/HedonisticOpportunist/Cats-in-Neath/blob/master/scripts/sketch.js
// FURTHER IMPLEMENTATION IDEAS: https://github.com/HedonisticOpportunist/Game-Project-V2

// POSITION VARIABLES
let is_left;
let is_right;
let is_down;
let is_up;

// COLLISION DETECTION VARIABLES
let scroll_position;
let game_char_x;
let game_char_y;
let floor_pos_y;

// CAT POSITION COORDINATES
let cat_x;
let cat_y;

// GAME SCORE
let game_score;

// MOUSE FOUND
let isFound;

// ARRAYS
let mice;
let eyes;

function setUpGame() {
  createCanvas(windowWidth, windowHeight);

  // CHARACTER COLLISION CONTROL COORDINATES
  floor_pos_y = (height * 3) / 4;
  game_char_x = width / 2;
  game_char_y = floor_pos_y;
  game_char_world_x = game_char_x - scroll_position;
  game_char_world_x = game_char_x - scroll_position;

  // POSITION / BOOLEAN VARIABLES
  is_left = false;
  is_right = false;
  is_up = false;
  is_down = false;

  // CAT CHARACTER COORINATES
  cat_x = 50;
  cat_y = 320;

  // MOUSE COORINATES
  mouse_y = 320;
  mouse_second_y = 580;

  // Game score set to 0 so that player can start the game with a carte blanche
  game_score = 0;

  // Initialise is found to be false
  isFound = false;

  // Initialise mice objects within the mouse array.
  mice = [
    // First set of mice
    {
      x_pos: 150,
      y_pos: mouse_y,
    },
    {
      x_pos: 250,
      y_pos: mouse_y,
    },
    {
      x_pos: 340,
      y_pos: mouse_y,
    },
    // Second set of mice
    {
      x_pos: 550,
      y_pos: mouse_y,
    },
    {
      x_pos: 600,
      y_pos: mouse_y,
    },
    {
      x_pos: 650,
      y_pos: mouse_y,
    },
    // Third set of mice
    {
      x_pos: 150,
      y_pos: mouse_second_y,
    },
    {
      x_pos: 250,
      y_pos: mouse_second_y,
    },
    {
      x_pos: 340,
      y_pos: mouse_second_y,
    },
    // Fourth set of mice
    {
      x_pos: 550,
      y_pos: mouse_second_y,
    },
    {
      x_pos: 700,
      y_pos: mouse_second_y,
    },
    {
      x_pos: 850,
      y_pos: mouse_second_y,
    },
  ];

  // Initialise eyes for the wider mice eyes array.
  // The x position for each eye on the left side is incremented by five, so that the eyes display properly for each side.
  eyes = [
    // First set of mice
    {
      x_pos: 150,
      y_pos: mouse_y,
    },
    {
      x_pos: 150 + 5,
      y_pos: mouse_y,
    },
    {
      x_pos: 250,
      y_pos: mouse_y,
    },
    {
      x_pos: 250 + 5,
      y_pos: mouse_y,
    },
    {
      x_pos: 340,
      y_pos: mouse_y,
    },
    {
      x_pos: 340 + 5,
      y_pos: mouse_y,
    },
    // Second set of mice
    {
      x_pos: 550,
      y_pos: mouse_y,
    },
    {
      x_pos: 550 + 5,
      y_pos: mouse_y,
    },
    {
      x_pos: 600,
      y_pos: mouse_y,
    },
    {
      x_pos: 600 + 5,
      y_pos: mouse_y,
    },
    {
      x_pos: 650,
      y_pos: mouse_y,
    },
    {
      x_pos: 650 + 5,
      y_pos: mouse_y,
    },
    // Third set of mice
    {
      x_pos: 150,
      y_pos: mouse_second_y,
    },
    {
      x_pos: 150 + 5,
      y_pos: mouse_second_y,
    },
    {
      x_pos: 250,
      y_pos: mouse_second_y,
    },
    {
      x_pos: 250 + 5,
      y_pos: mouse_second_y,
    },
    {
      x_pos: 340,
      y_pos: mouse_second_y,
    },
    {
      x_pos: 340 + 5,
      y_pos: mouse_second_y,
    },
    // Fourth set of mice
    {
      x_pos: 550,
      y_pos: mouse_second_y,
    },
    {
      x_pos: 550 + 5,
      y_pos: mouse_second_y,
    },
    {
      x_pos: 700,
      y_pos: mouse_second_y,
    },
    {
      x_pos: 700 + 5,
      y_pos: mouse_second_y,
    },
    {
      x_pos: 850,
      y_pos: mouse_second_y,
    },
    {
      x_pos: 850 + 5,
      y_pos: mouse_second_y,
    },
  ];
}
