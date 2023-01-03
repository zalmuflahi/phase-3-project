let x = 0
let y = 0
let w = 20
let h = 20
let camX = 0;
let camY = 0;
let img;
// let c;
// let bx;
// let by;
// let boxSize = 75;
// let overBox = false;
// let locked = false;
// let xOffset = 0.0;
// let yOffset = 0.0;

const smoothing = 0.1;
let map_img;
let pic;
function preload() {
  map_img = loadImage('NewpalletTown.png', map_img => {
    map_img.resize(map_img.width*2,map_img.height*2);
  });
  img = loadImage('Sephiroth.png')
}

function setup() {
  createCanvas(1000, 970);
  background(map_img);
  bx = width / 2.0;
  by = height / 2.0;
}

function draw() {
  

  let targetCamX = x;
  let targetCamY = y;
  camX += (targetCamX - camX) * smoothing;
  camY += (targetCamY - camY) * smoothing;

   x = constrain(x, 150, map_img.width /  2 - 250);
   y = constrain(y, 280, map_img.height / 2 - 140);

  if (keyIsDown(LEFT_ARROW)) {
    x -= 2;
  } else if (keyIsDown(RIGHT_ARROW)) {
    x += 2;
  } else if (keyIsDown(DOWN_ARROW)) {
    y += 2;
  } else if (keyIsDown(UP_ARROW)) {
    y -= 2;
  }

  // if (
  //   mouseX > bx - boxSize &&
  //   mouseX < bx + boxSize &&
  //   mouseY > by - boxSize &&
  //   mouseY < by + boxSize
  // ) {
  //   overBox = true;
  //   if (!locked) {
  //     stroke(255);
  
  //   }
  // } else {
  //   stroke(156, 39, 176);
  //   overBox = false;
  // }

 
  image(map_img, -camX, -camY);
  image(img, x, y, 60, 40);
  // rect(bx, by, boxSize, boxSize);
}

// function mousePressed() {
//   if (overBox) {
//     locked = true;
//     fill(255, 255, 255);
//   } else {
//     locked = false;
//   }
//   xOffset = mouseX - bx;
//   yOffset = mouseY - by;
// }

// function mouseDragged() {
//   if (locked) {
//     bx = mouseX - xOffset;
//     by = mouseY - yOffset;
//   }
// }

// function mouseReleased() {
//   locked = false;
// }
