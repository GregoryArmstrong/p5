var song;

function preload() {
  song = loadSound('assets/ErikSatieGymnopedieNo3.mp3');
}

function setup () {
  song.play();
  width = 1280;
  height = 800;
  createCanvas(width, height);
  peaks = song.getPeaks([width]);
  background(0);
  amp = new p5.Amplitude();
}

function draw () {
  // var level = amp.getLevel();
  // var size = map(level, 0, 1, 0, 800);
  // var col = map(level, 0, 1, 0, 255);
 var ampLevel = amp.getLevel();
 var ampLevelWidth = map(ampLevel, .4, 1, 80, 1000)
 var ampLevelHeight = map(ampLevel, 0, 1, 50, 100)
 var ampLevelRotate = map(ampLevel, 0, .4, 0, 900)
 var ampLevelScale = map(ampLevel, 0, .7, 800, 600)
 var ampLevelColor1 = map(ampLevel, 0, .4, 0, 255)
 var ampLevelColor2 = map(ampLevel, 0, .4, 0, 100)
 var ampLevelColor3 = map(ampLevel, 0, .4, 255, 0)
 var ampLevelStroke = map(ampLevel, .05, .4, 3, .085)
 var ampLevelStroke2 = map(ampLevel, .05, .4, .08, 20)
 var ampLevelRed = map(ampLevel, .40, .6, 230, 255);
 var ampLevelGreen = map(ampLevel, 0, .47, 255, 0);
 var ampLevelBlue = 0;

 if (ampLevel < .05) {
   var ampLevelRed = map(ampLevel, 0, .05, 0, 150);
 } else if (.05 < ampLevel < .4) {
   var ampLevelRed = map(ampLevel, .05, .4, 150, 255);
 }

 if (ampLevel > .42) {
   var ampLevelGreen = 0;
 } else if ( 0 < ampLevel < .03) {
   var ampLevelGreen = map(ampLevel, 0, .03, 60, 255);
 }

 if (ampLevel < .03) {
   var ampLevelBlue = map(ampLevel, 0, .03, 255, 0);
 }

 if (ampLevel < .4) {
   var ampLevelWidth = map(ampLevel, 0, .3, 10, 80);
 }

 if (ampLevel < .020) {
   var ampLevelStroke = map(ampLevel, 0, .05, 6, 3);
 }
 // stroke(0, 0, col*100);

  fill(ampLevelRed*2, ampLevelGreen, ampLevelBlue);
  quad(random(1280), random(800), random(1280), random(800), random(1280), random(800), random(1280), random(800));
  fill(ampLevelRed, ampLevelGreen*2, ampLevelBlue);
  quad(random(1280), random(800), random(1280), random(800), random(1280), random(800), random(1280), random(800));
  fill(ampLevelRed, ampLevelGreen, ampLevelBlue*2);
  quad(random(1280), random(800), random(1280), random(800), random(1280), random(800), random(1280), random(800));

  // ellipse(random(1280), random(800), size*8, size*8);
  // arc(random(1280), random(800), size, size, 3, 5);
  // beginShape();
  // vertex(25, 38);
  // bezierVertex(random(1280), random(800), random(1280), random(800), (random(1280), random(800));
  // bezierVertex(random(1280), random(800), random(1280), random(800), (random(1280), random(800));
  // endShape();
}

function mousePressed() {
  if ( song.isPlaying() ) {
    song.pause();
  } else {
    song.play();
  }
}
