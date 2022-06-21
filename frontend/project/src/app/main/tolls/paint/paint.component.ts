import { Component, OnInit } from '@angular/core';
import p5 from 'p5';

@Component({
  selector: 'app-paint',
  templateUrl: './paint.component.html',
  styleUrls: ['./paint.component.scss']
})
export class PaintComponent implements OnInit {
  

	canvas: any;
  sw = 20;
  c = [];
  strokeColor = 0;
  constructor() { }

  ngOnInit() {
    // this sketch was modified from the original
    // https://editor.p5js.org/Janglee123/sketches/HJ2RnrQzN
    const sketch = s => {
      s.setup = () => {
        let canvas2 = s.createCanvas(s.windowWidth - 200, s.windowHeight - 200);

        canvas2.parent('sketch-holder');


        s.strokeWeight(this.sw);
        this.c[0] = s.color(0, 0, 0);
        s.rect(0, 0, s.width, s.height);
        s.stroke(this.c[this.strokeColor]);
        s.background(255);
      };

      s.draw = () => {
        if (s.mouseIsPressed) {
          if (s.mouseButton === s.LEFT) {
            s.line(s.mouseX, s.mouseY, s.pmouseX, s.pmouseY);
          } else if (s.mouseButton === s.CENTER) {
            s.background(255);
          }
        }





/*        
				s.fill(0,100,100)
				s.line(s.mouseX, s.mouseY, s.pmouseX, s.pmouseY)

*/
      };

      s.keyPressed = () => {
        if (s.key === 'c') {
          window.location.reload();
        }
      };
    };

    this.canvas = new p5(sketch);
  }
}
