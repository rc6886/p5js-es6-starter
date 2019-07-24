import P5 from 'p5';
import Car from './Car';

window.P5 = P5;

const CANVAS_HEIGHT = 600;
const CANVAS_WIDTH = 600;

let car;


new P5((p5) => {
  p5.setup = () => {
    p5.createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
    car = new Car(p5);
  };

  p5.draw = () => {
    p5.background(220);

    p5.keyPressed = function() {
      if (p5.keyCode === 38) {
        car.accelerate();
      }
    };

    car.display();
  };
});
