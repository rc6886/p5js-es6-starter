export default class Car {

  constructor(p5) {
    this.p5 = p5;
    this.image = p5.loadImage('https://i.postimg.cc/MKQgSkPm/icons8-car-64.png');
    
    this.location = p5.createVector(p5.width/2, p5.height/2);
    this.velocity = p5.createVector(0, 0);
    this.acceleration = p5.createVector(0, 0);
    this.topSpeed = 5;
  }
  
  accelerate() {
    this.velocity.add(this.p5.createVector(0.1, 0));
  }
  
  brake() {
    this.velocity.sub(this.p5.createVector(0.1, 0));
  }
  
  display() {
    this.location.add(this.velocity);

    console.log('Acceleration: ', this.acceleration);
    console.log('Velocity: ', this.velocity);
    console.log('Location: ', this.location);

    if (this.location.x >= this.p5.width) {
      this.location.x = -30;
    }

    this.p5.image(this.image, this.location.x, this.location.y);
  }
}