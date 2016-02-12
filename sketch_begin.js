var song, amplitude;

function preload(){
  song = loadSound('assets/ErikSatieGymnopedieNo3.mp3');
}

function setup() {
  song.play();
  width = 500;
  height = 500;
  createCanvas(width, height);
  peaks = song.getPeaks([width]);
  background(0);
  amplitude = new p5.Amplitude();
}

function draw() {
  background(255);
  var level = amplitude.getLevel();
  var size = map(level, 0, 1, 0, 2000);
  var col = map(level, 0, 1, 0, 255);
  fill(col*50, col*10, col*10);
  ellipse(width/2, height/2, size*5, size*5);
}

function mousePressed() {
  if ( sound.isPlaying() ) {
    sound.pause();
  } else {
    sound.play();
  }
}
