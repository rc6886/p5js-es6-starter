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
    this.acceleration.x += 0.001;
    console.log('Accel-X-Acceleration: ', this.acceleration.x);
    
    this.velocity.add(this.acceleration);
    console.log('Accel-X-Velocity: ', this.velocity.x);
    this.velocity.limit(2);
    
    this.location.add(this.velocity);
    console.log('Accel-X-Location: ', this.location.x);
    
    if (this.location.x > windowWidth) {
      // Make it appear as if the car is driving into the frame
      this.location.x = -40;
    }
  }
  
  brake() {
    this.velocity.add(-0.001, 0);
    console.log('Brake-X-Velocity: ', this.velocity.x);
    
    if (this.velocity.x < 0) {
      this.velocity.x = 0;
    }
    
    
    this.location.add(this.velocity);
    console.log('Brake-X-Location: ', this.location.x);
    
    if (this.location.x > windowWidth) {
      // Make it appear as if the car is driving into the frame
      this.location.x = -40;
    }
    
    if (this.location.x < 0) {
      this.location.x = windowWidth;
    }
  }
  
  display() {
    this.p5.image(this.image, this.location.x, this.location.y);
  }
}