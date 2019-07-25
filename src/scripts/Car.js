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
    this.velocity.add(this.p5.createVector(0.5, 0));
  }
  
  brake() {
    this.velocity.sub(this.p5.createVector(0.5, 0));
  }
  
  display() {
    this.location.add(this.velocity);

    if (this.location.x >= this.p5.width && this.velocity.x > 0) {
      this.location.x = -30;
    } else if (this.location.x < -50 && this.velocity.x < 0) {
      this.location.x = this.p5.width + 30;
    }

    this.p5.image(this.image, this.location.x, this.location.y);
  }
}